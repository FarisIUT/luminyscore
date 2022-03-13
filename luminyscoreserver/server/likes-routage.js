import express from "express";
import asyncHandler from "express-async-handler";
import likesHandler from "./likes-handler";

const likesRouter = express.Router();

likesRouter.get("/likes", asyncHandler(likesHandler.getLikes));
likesRouter.post("/likes", asyncHandler(likesHandler.incrLikes));

export default likesRouter;
