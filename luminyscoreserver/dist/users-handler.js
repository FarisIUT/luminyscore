"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _usersRepository = _interopRequireDefault(require("./users-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUsers(req, res) {
  try {
    const result = await _usersRepository.default.getAll();
    const finalArray = [];

    for (let obj of result.body.hits.hits) {
      finalArray.push(obj.source);
    }

    res.send(finalArray);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}

async function create(req, res) {
  res.set('Content-Type', 'application/json');

  try {
    const userBool = await userExist(req.body.firstName);

    if (userBool) {
      res.send({});
    } else {
      await _usersRepository.default.store(req.body);
      res.send(firstName = 'ok');
    }
  } catch (e) {
    res.status(400).end();
  }
}

async function userExist(firstName) {
  try {
    const result = await _usersRepository.default.getUser(firstName);
    return result.body.hits.total.value > 0 ? true : false;
  } catch (e) {
    console.log('error getting user', e);
    return false;
  }
}

async function checkAuth(email, mdp) {
  try {
    const result = await _usersRepository.default.getUser(email);

    if (result.body.hits.total.value > 0) {
      if (result.body.hits.hits.mdp === mdp) {
        return true;
      } else {
        false;
      }
    } else {
      return false;
    }
  } catch (e) {
    console.log("error getting user", e);
    return false;
  }
}

async function signIn(req, res) {
  try {
    const authBool = await checkAuth(req.body.email, req.body.mdp);

    if (authBool) {
      res.send({
        mdp: "ok"
      });
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
      const result = await _usersRepository.default.remove(req.params.id);
      res.send(result);
    }
  } catch (e) {
    res.status(error.status || 400).end();
  }
}

var _default = {
  getUsers,
  create,
  userExist,
  userDelete,
  signIn
};
exports.default = _default;