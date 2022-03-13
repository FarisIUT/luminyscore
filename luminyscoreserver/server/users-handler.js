import usersRep from "./users-repository";

async function getUsers(req, res) {
  try {
    const result = await usersRep.getAll();
    const finalArray = [];
    for (let obj of result.hits.hits) {
      finalArray.push(obj._source);
    }
    res.send(finalArray);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}

async function create(req, res) {
  res.set("Content-Type", "application/json");
  try {
    const userBool = await userExist(req.body.firstName);
    if (userBool) {
      res.send({});
    } else {
      await usersRep.store(req.body);
      res.send({ firstName: "ok" });
    }
  } catch (e) {
    console.log("error creating user", e);
    res.status(400).end();
  }
}

async function editUser(req, res) {
  res.set("Content-Type", "application/json");
  try {
    const user = await usersRep.getUserViaEmail(req.body.email);
    await usersRep.edit(req.body, user.hits.hits[0]._id);
    res.send({ user: req.body });
  } catch (e) {
    console.log("error updating user", e);
    res.status(400).end();
  }
}

async function userExist(firstName) {
  try {
    const result = await usersRep.getUser(firstName);
    return result.hits.total.value > 0 ? true : false;
  } catch (e) {
    console.log("error getting user", e);
    return false;
  }
}

async function checkAuth(email, mdp) {
  try {
    const result = await usersRep.getUserViaEmail(email);
    const user = [];
    if (result.hits.total.value > 0) {
      if (result.hits.hits[0]._source.email === email) {
        if (result.hits.hits[0]._source.mdp === mdp) {
          user[0] = true;
          user[1] = result.hits.hits[0]._source;
          return user;
        } else {
          user[0] = false;
          user[1] = null;
          return user;
        }
      } else {
        user[0] = false;
        user[1] = null;
        return user;
      }
    } else {
      user[0] = false;
      user[1] = null;
      return user;
    }
  } catch (e) {
    console.log("error getting user", e, " ", email, " ", mdp);
    return false;
  }
}

async function signIn(req, res) {
  try {
    const auth = await checkAuth(req.body.email, req.body.mdp);
    if (auth[0]) {
      res.send({ user: auth[1] });
    } else {
      res.send({});
    }
  } catch (e) {
    console.log("error cheking for user credentials", e);
    res.status(400).end();
  }
}

async function userDelete(req, res) {
  try {
    const userBool = await userExist(req.params.id);
    if (!userBool) {
      res.status(404).end();
    } else {
      const result = await usersRep.remove(req.params.id);
      res.send(result);
    }
  } catch (e) {
    res.status(error.status || 400).end();
  }
}

export default {
  getUsers,
  create,
  userExist,
  userDelete,
  signIn,
  editUser,
};
