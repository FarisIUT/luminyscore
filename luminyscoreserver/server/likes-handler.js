import likesRep from "./likes-repository";

async function getLikes(req, res) {
  try {
    const result = await likesRep.getAll();
    const finalArray = [];
    for (let obj of result.hits.hits) {
      if (obj === undefined) {
      }

      finalArray.push(obj._source);
    }
    res.send(finalArray);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}

async function incrLikes(req, res) {
  res.set("Content-Type", "application/json");
  try {
    const likes = await likesRep.getLikes(req.body.matchId);
    await likesRep.incrLikes(req.body, likes.hits.hits[0]._id);
    res.send({ likes: "ok" });
  } catch (e) {
    console.log("error updating user", e);
    res.status(400).end();
  }
}

async function createLikes(req, res) {
  res.set("Content-Type", "application/json");
  try {
    const likes = await likesRep.getLikes(req.body.matchId);
    await likesRep.incrLikes(req.body, user.hits.hits[0]._id);
    res.send({ user: req.body });
  } catch (e) {
    console.log("error updating user", e);
    res.status(400).end();
  }
}

export default {
  getLikes,
  incrLikes,
};
