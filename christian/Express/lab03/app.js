//import all the necessary stuff
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Item = require ('./models/Item')
const List = require ('./models/List')

//route path
const itemRouter = require("./routes/item");
const listRouter = require("./routes/list");

const app = express()

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'))
//routes
app.use("/item", itemRouter); // localhost:5050/item gets access to routes
app.use("/list", listRouter); // localhost:5050/list use in postman



app.get("/", async (req, res) => {
	res.send("hellooo")
})



const runServer = async () => {
    await mongoose.connect('mongodb://localhost:27017/todo') //connect to mongoose
    console.log('success');

    app.listen(5050, () => { //app.listen to connect server and app
        console.log('server is listening to port 5050')
    })
}

//call server function
runServer();