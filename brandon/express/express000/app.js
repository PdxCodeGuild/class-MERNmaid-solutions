const express = require("express");
const app = express();

const eightBall = {
  0: "Beware the ides of March...",
  1: "Maybe",
  2: "Most definitely!"
}

app.get("/", (req, res) => {
  let random = Math.floor(Math.random() * Object.keys(eightBall).length);
  res.send({response: eightBall[random]});
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
