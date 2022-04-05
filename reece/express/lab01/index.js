const express = require('express');

const app =express();

app.get("/", (req, res) => {
    res.send({response: 'Magic 8 ball here!'});
});

app.listen(3000, () => {
    console.log("Server Listening");
  });