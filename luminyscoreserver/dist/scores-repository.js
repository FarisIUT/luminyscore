"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _esClient = _interopRequireDefault(require("./es-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const index = "local_users";

const handleElasticsearchError = error => {
  if (error.status === 404) {
    throw new Error("User Not Found", 404);
  }

  throw new Error(error.msg, error.status || 500);
};

const getAll = () => _esClient.default.search({
  index
}).then(response => response).catch(error => {
  handleElasticsearchError(error);
});

const store = user => _esClient.default.index({
  index,
  refresh: "true",
  body: user
}).then(response => response.status).catch(error => {
  handleElasticsearchError(error);
});

const getUser = firstName => _esClient.default.search({
  index,
  body: {
    query: {
      match: {
        firstName: {
          query: firstName
        }
      }
    }
  }
}).then(response => response).catch(error => {
  handleElasticsearchError(error);
});

const getUserViaEmail = email => _esClient.default.search({
  index,
  body: {
    query: {
      match: {
        email: {
          query: email
        }
      }
    }
  }
}).then(response => response).catch(error => {
  handleElasticsearchError(error);
});

const remove = firstName => _esClient.default.deleteByQuery({
  index,
  refresh: "true",
  body: {
    query: {
      match: {
        firstName: {
          query: firstName
        }
      }
    }
  }
}).then(response => response).catch(error => {
  handleElasticsearchError(error);
});

var _default = {
  getUser,
  store,
  getAll,
  remove,
  getUserViaEmail
};
exports.default = _default;