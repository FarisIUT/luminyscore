"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _getDataScores = _interopRequireDefault(require("./getDataScores"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const scoresRouter = _express.default.Router(); // let scores = [
//   {
//     id: 1,
//     equipe: {
//       0:'OM',
//       1:'OGC Nice'
//     },
//     status: 'finish',
//     score: {
//       0:'1',
//       1:'2',
//     },
//   },
//   {
//     id: 2,
//     equipe: {
//       0:'PSG',
//       1:'Real Madrid'
//     },
//     status: 'to come',
//     score: {
//       0:'4',
//       1:'0',
//     },
//   },
//   {
//     id: 3,
//     equipe: {
//       0:'FC Nantes',
//       1:'OL'
//     },
//     status: 'finish',
//     score: {
//       0:2,
//       1:2,
//     },
//   },
// ];
// scoresRouter.get('/', function (req, res) {
//     res.send(scores);
// });


scoresRouter.get('/', (0, _expressAsyncHandler.default)(_getDataScores.default.matchAdder()));
scoresRouter.post('/', (0, _expressAsyncHandler.default)(_getDataScores.default.matchAdder()));
var _default = scoresRouter;
exports.default = _default;