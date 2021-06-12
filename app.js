const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send({ messages: "Hello, from CD/CI pipeline" });
});

module.exports = app;
