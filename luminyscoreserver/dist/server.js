"use strict";

var _express = _interopRequireDefault(require("express"));

var _usersRoutage = _interopRequireDefault(require("./users-routage"));

var _scoresRoutage = _interopRequireDefault(require("./scores-routage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.static('./app/luminyscore'));
app.use('/users', _usersRoutage.default);
app.use('/score', _scoresRoutage.default);
app.get('/scores', function (req, res) {
  res.sendFile(__dirname + '/app/luminyscore/index.html');
});
app.get('/compte', function (req, res) {
  res.sendFile(__dirname + '/app/luminyscore/index.html');
});
app.listen(8080);