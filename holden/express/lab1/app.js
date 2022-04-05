const express = require("express");

const app = express();

const answerPool = ["It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."];

// // random choice test
// const randomResults = []
// for (index in answerPool){
//   randomResults.push(0)
// }
//
// for (var i = 0; i < 30000; i++){
//   const choice = Math.floor(Math.random() * answerPool.length);
//   randomResults[choice]++
// }
// console.table(randomResults)

app.get("/", (req, res) => {
  const choice = Math.floor(Math.random() * answerPool.length);
  res.send({ response: answerPool[choice] });
});

app.listen(3000);