import { response } from "express";
import esClient from "./es-client";

const index = "likes";

const handleElasticsearchError = (error) => {
  if (error.status === 404) {
    throw new Error("Likes Not Found", 404);
  }
  throw new Error(error.msg, error.status || 500);
};

const getAllLikes = () =>
  esClient
    .search({
      index,
    })
    .then((response) => response)
    .catch((error) => {
      handleElasticsearchError(error);
    });

const getLikes = (matchId) =>
  esClient
    .search({
      index,
      body: {
        query: {
          match: {
            matchId: {
              query: matchId,
            },
          },
        },
      },
    })
    .then((response) => response)
    .catch((error) => {
      handleElasticsearchError(error);
    });

const incrLikes = (matchId, id) =>
  esClient
    .update({
      index,
      id: id,
      body: {
        doc: {
          count: count + 1,
        },
      },
    })
    .then((response) => response.status)
    .catch((error) => {
      handleElasticsearchError(error);
    });

const store = (user) =>
  esClient
    .index({
      index,
      refresh: "true",
      body: user,
    })
    .then((response) => response.status)
    .catch((error) => {
      handleElasticsearchError(error);
    });

export default {
  getAllLikes,
  getLikes,
  incrLikes,
};
