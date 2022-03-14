import express from "express";
import usersRouter from "./users-routage";
import scoresRouter from "./scores-routage";
import likesRouter from "./likes-routage";

const app = express();

app.use(express.json());
app.use(express.static("./app/luminyscore"));
app.use("/users", usersRouter);
app.use("/score", scoresRouter);
app.use("/likes", likesRouter);

app.get("/scores", function (req, res) {
  res.sendFile(__dirname + "/app/luminyscore/index.html");
});
app.get("/scores/*", function (req, res) {
  res.sendFile(__dirname + "/app/luminyscore/index.html");
});
app.get("/compte", function (req, res) {
  res.sendFile(__dirname + "/app/luminyscore/index.html");
});
app.get("/auth", function (req, res) {
  res.sendFile(__dirname + "/app/luminyscore/index.html");
});
app.listen(8080);
