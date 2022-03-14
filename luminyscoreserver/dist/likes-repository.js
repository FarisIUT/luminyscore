"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _esClient = _interopRequireDefault(require("./es-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const index = "likes";

const handleElasticsearchError = error => {
  if (error.status === 404) {
    throw new Error("Likes Not Found", 404);
  }

  throw new Error(error.msg, error.status || 500);
};

const getLikes = matchId => _esClient.default.search({
  index,
  body: {
    query: {
      match: {
        matchId: {
          query: matchId
        }
      }
    }
  }
}).then(response => response).catch(error => {
  handleElasticsearchError(error);
});

const incrLikes = (id, count) => _esClient.default.update({
  index,
  id: id,
  body: {
    doc: {
      count: count + 1
    }
  }
}).then(response => response.status).catch(error => {
  console.log("error :>> ", error);
  handleElasticsearchError(error);
});

const initLikes = matchId => _esClient.default.index({
  index,
  refresh: "true",
  body: {
    matchId: matchId,
    count: 1
  }
}).then(response => response.status).catch(error => {
  console.log("error :>> ", error);
  handleElasticsearchError(error);
});

var _default = {
  getLikes,
  incrLikes,
  initLikes
};
exports.default = _default;