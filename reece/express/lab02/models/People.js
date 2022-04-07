mongoose = require('mongoose')
const Schema = mongoose.Schema;

const peoplePerson = Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 40,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 40,
    },
    userName: {
        type: String,
        required: true,
        maxlength: 40,
    },
    age: {
        type: Number,
        required: true,
        maxlength: 3,
    },
})

const Person = mongoose.model("peoplePerson", peoplePerson)

module.exports = Person;