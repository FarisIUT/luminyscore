"use strict";

var _getDataScores2 = _interopRequireDefault2(require("./getDataScores"));

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _getDataScores = _interopRequireDefault(require("./getDataScores"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const scoresRouter = _express.default.Router();

<<<<<<< HEAD
scoresRouter.get("/:timestamp", function (req, res) {
  _getDataScores2.default.matchAdder(req.params.timestamp).then(result => {});

=======
scoresRouter.get('/:timestamp', function (req, res) {
  //console.log("appel score-routage")
  //getDataScores.matchAdder(req.params.timestamp).then((result)=>{console.log("from scores-routages "+result)})
>>>>>>> 26791c07c5a842f423b7b5e76d368dd9d4fa6647
  _getDataScores2.default.matchAdder(req.params.timestamp).then(result => {
    res.send(result);
  });
});
<<<<<<< HEAD
scoresRouter.get("/s/:id", function (req, res) {
  _getDataScores2.default.matchById(req.params.id).then(result => {});

=======
scoresRouter.get('/s/:id', function (req, res) {
  //console.log("appel score-routage")
  //getDataScores.matchById(req.params.id).then((result)=>{console.log("from scores-routages "+result)})
>>>>>>> 26791c07c5a842f423b7b5e76d368dd9d4fa6647
  _getDataScores2.default.matchById(req.params.id).then(result => {
    res.send(result);
  });
});
scoresRouter.get("/events/:id", function (req, res) {
  _getDataScores2.default.getEvents(req.params.id).then(result => {
    res.send(result);
  });
});
var _default = scoresRouter;
exports.default = _default;