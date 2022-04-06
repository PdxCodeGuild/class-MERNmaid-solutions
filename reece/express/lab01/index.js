const express = require('express');

const app = express();

const sayings = ['It is certain.', 'Most likely.', 'Reply hazy, try again.', 'Very doubtful.']

app.get("/", (req, res) => {
    res.send({response: sayings});
});

app.listen(3000, () => {
    console.log("Server Listening");
  });