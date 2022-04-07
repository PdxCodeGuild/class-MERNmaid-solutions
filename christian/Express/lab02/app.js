//import all items for app
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//import over 'Person' model
const Person = require ('./models/Person');

//declare app as express
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/people', async (req, res) => {
    const person = new Person(req.firstname);
    await person.save();
    res.send(person);
})




// run server function
const runServer = async () => {
    await mongoose.connect('mongodb://localhost:27017/models') //connect to mongoose
    console.log('success');

    app.listen(3000, () => { //app.listen to connect server and app
        console.log('server is listening to port 3000')
    })
}

//call server function
runServer();