import { response } from "express";
import esClient from "./es-client";

const index = "likes";

const handleElasticsearchError = (error) => {
  if (error.status === 404) {
    throw new Error("Likes Not Found", 404);
  }
  throw new Error(error.msg, error.status || 500);
};

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

const incrLikes = (id, count) =>
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
      console.log("error :>> ", error);
      handleElasticsearchError(error);
    });

const initLikes = (matchId) =>
  esClient
    .index({
      index,
      refresh: "true",
      body: {
        matchId: matchId,
        count: 1,
      },
    })
    .then((response) => response.status)
    .catch((error) => {
      console.log("error :>> ", error);
      handleElasticsearchError(error);
    });

export default {
  getLikes,
  incrLikes,
  initLikes,
};
