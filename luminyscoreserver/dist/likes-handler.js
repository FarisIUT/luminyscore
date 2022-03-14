"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _likesRepository = _interopRequireDefault(require("./likes-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getLikes(req, res) {
  try {
    const result = await _likesRepository.default.getLikes(req.params.id);

    if (result.hits.hits[0] != undefined) {
      res.send({
        count: result.hits.hits[0]._source.count
      });
    } else {
      res.send({
        count: 0
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}

async function incrLikes(req, res) {
  res.set("Content-Type", "application/json");

  try {
    const likes = await _likesRepository.default.getLikes(req.params.id);
    await _likesRepository.default.incrLikes(likes.hits.hits[0]._id, likes.hits.hits[0]._source.count);
    res.send({
      matchId: "ok"
    });
  } catch (e) {
    console.log("error increasing likes", e);
    res.status(400).end();
  }
}

async function initLikes(req, res) {
  res.set("Content-Type", "application/json");

  try {
    await _likesRepository.default.initLikes(req.params.id);
    res.send({
      matchId: "ok"
    });
  } catch (e) {
    console.log("error initiating likes", e);
    res.status(400).end();
  }
}

var _default = {
  getLikes,
  incrLikes,
  initLikes
};
exports.default = _default;