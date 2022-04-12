const express = require("express");

const app = express();

app.get('/', (req, res) => {
    // res.send(magic8Ball())
    res.send({ response: magic8Ball()})
})

function magic8Ball(){
    const sides = []
    sides[0] = 'It is certain.'
    sides[1] = 'It is decidedly so.'
    sides[2] = 'Without a doubt.'
    sides[3] = 'You may rely on it.'
    sides[4] = 'As I see it, yes.'
    sides[5] = 'Outlook good.'
    sides[6] = 'Yes.'
    sides[7] = 'It is certain.'
    sides[8] = 'Signs point to yes.'

    sides[9] = 'Reply hazy, try again.'
    sides[10] = 'Ask again later.'
    sides[11] = 'Better not tell you now.'
    sides[12] = 'Cannot predict now.'
    sides[13] = 'Concentrate and ask again.'

    sides[14] = 'Don\'t count on it.'
    sides[15] = 'My reply is no.'
    sides[16] = 'My sources say no.'
    sides[17] = 'Outlook not so good.'
    sides[18] = 'Very doubtful.'
    return sides[Math.floor(Math.random() * sides.length)]
}


app.listen(4000);