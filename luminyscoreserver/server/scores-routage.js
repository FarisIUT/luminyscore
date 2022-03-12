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

let scores = getDataScores.matchAdder();
scoresRouter.get('/', function (req, res) {
    //console.log("response"+getDataScores.matchAdder());
    getDataScores.matchAdder().then((result)=>{res.send(result)})
    //res.send(getDataScores.matchAdder());
});
scoresRouter.get('/', (0, _expressAsyncHandler.default)(_getDataScores.default.matchAdder()));
scoresRouter.post('/', (0, _expressAsyncHandler.default)(_getDataScores.default.matchAdder()));
var _default = scoresRouter;
exports.default = _default;