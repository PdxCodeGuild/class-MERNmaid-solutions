const express = require('express');

const app = express();

app.get("/", (req, res) => {
    
    const words = ["Ask Later", "It is certain", "Maybe", "no", "Anything is possible"] // array of responses
    const ranChoice = Math.floor(Math.random() * words.length); //math.random times length of array to choose random chouces
    console.log(words[ranChoice]);
    const response = words[ranChoice] // console log array with choiice logic and put in variable
	res.send({ resonse: words[ranChoice]}); // res.send variable of response with words and ranChoice
});

app.listen(3000)