"use strict";

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.static('./app/luminyscore'));
app.use('/users', _users.default);
app.get('/', function (req, res) {
  res.sendFile('index.html');
});
app.listen(8080);