"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _likesHandler = _interopRequireDefault(require("./likes-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const likesRouter = _express.default.Router();

likesRouter.get("/:id", (0, _expressAsyncHandler.default)(_likesHandler.default.getLikes));
likesRouter.post("/:id", (0, _expressAsyncHandler.default)(_likesHandler.default.incrLikes));
likesRouter.post("/init/:id", (0, _expressAsyncHandler.default)(_likesHandler.default.initLikes));
var _default = likesRouter;
exports.default = _default;