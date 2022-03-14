"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _usersHandler = _interopRequireDefault(require("./users-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = _express.default.Router();

usersRouter.post("/edit", (0, _expressAsyncHandler.default)(_usersHandler.default.editUser));
usersRouter.post("/signin", (0, _expressAsyncHandler.default)(_usersHandler.default.signIn));
usersRouter.get("/", (0, _expressAsyncHandler.default)(_usersHandler.default.getUsers));
usersRouter.post("/", (0, _expressAsyncHandler.default)(_usersHandler.default.create));
usersRouter.delete("/:id", (0, _expressAsyncHandler.default)(_usersHandler.default.userDelete));
var _default = usersRouter;
exports.default = _default;