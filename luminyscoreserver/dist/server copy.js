"use strict";

var _express = _interopRequireDefault(require("express"));

var _usersRoutage = _interopRequireDefault(require("./users-routage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.static('./app/luminyscore'));
app.use('/users-routage', _usersRoutage.default);
app.get('/', function (req, res) {
  res.sendFile('index.html');
});
app.listen(8080);