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

//create person 
app.post('/people', async (req, res) => {
    const person = new Person(req.body); //use body parser and pull Person model
    await person.save(); // .save to database
    res.send(person); //.send back 
})

//retrieve person
app.get('/people/:id', async (req, res) => {
    // use ':id to target specific people
    const person = await Person.findOne({_id: req.params.id}); 
    if (!person) {
        res.sendStatus(404); //if person cant be retrieved, send 404
    
    } else {
        res.send(person) // return data
    }
});
//update person
app.patch('people/:id', async (req, res) => {
    //same as delete except use .patch
    const person = await Person.findOne({_id: req.params.id});
    if(!person) {res.send(404)};
    const personInfo = req.body;
    person.set(personInfo) //.set to update info
    await person.save();
    
    res.send(person)

});
//delete person
app.delete('/person/:id', async (req, res) => {
    const person = await Person.findOne({ _id: req.params.id });
    if (!person) {
    res.send(404);
    }
    await person.remove(); // .remove deletes person
    res.send(person);

})
//retrieve person
app.get("/person", async (req, res) => {
    const person = await Person.find();
    res.send(person);
  
  });
  



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