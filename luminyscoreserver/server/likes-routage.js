import express from "express";
import asyncHandler from "express-async-handler";
import likesHandler from "./likes-handler";

const likesRouter = express.Router();

likesRouter.get("/:id", asyncHandler(likesHandler.getLikes));
likesRouter.post("/:id", asyncHandler(likesHandler.incrLikes));
likesRouter.post("/init/:id", asyncHandler(likesHandler.initLikes));

export default likesRouter;
