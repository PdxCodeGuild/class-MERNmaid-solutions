const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ response: "your magic 8 ball quote here" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
