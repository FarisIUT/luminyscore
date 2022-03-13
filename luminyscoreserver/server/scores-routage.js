"use strict";
import getDataScores from "./getDataScores";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _getDataScores = _interopRequireDefault(require("./getDataScores"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const scoresRouter = _express.default.Router();

scoresRouter.get('/', function (req, res) {
  console.log("appel score-routage")
  getDataScores.matchAdder().then((result)=>{console.log("from scores-routages "+result)})
  getDataScores.matchAdder().then((result)=>{res.send(result)})
});
scoresRouter.get('/events/:id', function (req, res) {
  getDataScores.getEvents(req.params.id).then((result)=>{res.send(result)});
})
var _default = scoresRouter;
exports.default = _default;