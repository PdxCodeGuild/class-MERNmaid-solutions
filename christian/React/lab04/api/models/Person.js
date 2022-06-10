// import mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//model data structure
const personSchema = Schema({
    firstname: {
        type: String,
        required: true,  //similar to Django database with "charfield" or "textfield"
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,
    }
});

//creates model in mongoose
const Person = mongoose.model('Person', personSchema);

//export to app file
module.exports = Person