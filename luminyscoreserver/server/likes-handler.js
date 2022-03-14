import likesRep from "./likes-repository";

async function getLikes(req, res) {
  try {
    const result = await likesRep.getLikes(req.params.id);
    if (result.hits.hits[0] != undefined) {
      res.send({ count: result.hits.hits[0]._source.count });
    } else {
      res.send({ count: 0 });
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}

async function incrLikes(req, res) {
  res.set("Content-Type", "application/json");
  try {
    const likes = await likesRep.getLikes(req.params.id);
    await likesRep.incrLikes(
      likes.hits.hits[0]._id,
      likes.hits.hits[0]._source.count
    );
    res.send({ matchId: "ok" });
  } catch (e) {
    console.log("error increasing likes", e);
    res.status(400).end();
  }
}

async function initLikes(req, res) {
  res.set("Content-Type", "application/json");
  try {
    await likesRep.initLikes(req.params.id);
    res.send({ matchId: "ok" });
  } catch (e) {
    console.log("error initiating likes", e);
    res.status(400).end();
  }
}

export default {
  getLikes,
  incrLikes,
  initLikes,
};
