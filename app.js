const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send({ message: "Hello, from CD/CI pipeline, welcome" });
});

module.exports = app;
