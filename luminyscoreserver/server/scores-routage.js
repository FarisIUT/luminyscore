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

scoresRouter.get('/:timestamp', function (req, res) {
  console.log("appel score-routage")
  getDataScores.matchAdder(req.params.timestamp).then((result)=>{console.log("from scores-routages "+result)})
  getDataScores.matchAdder(req.params.timestamp).then((result)=>{res.send(result)})
});
scoresRouter.get('/s/:id', function (req, res) {
  console.log("appel score-routage")
  getDataScores.matchById(req.params.id).then((result)=>{console.log("from scores-routages "+result)})
  getDataScores.matchById(req.params.id).then((result)=>{res.send(result)})
});
scoresRouter.get('/events/:id', function (req, res) {
  getDataScores.getEvents(req.params.id).then((result)=>{res.send(result)});
})
var _default = scoresRouter;
exports.default = _default;