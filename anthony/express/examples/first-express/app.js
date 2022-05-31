const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Someone visited this server!");
  res.send("<p>Hello World</p>");
});

app.get("/about", (req, res) => {
  console.log("About page!");
  res.send({ url: req.url, time: new Date() });
});

app.listen(3000);
