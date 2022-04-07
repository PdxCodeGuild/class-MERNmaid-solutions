const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    age: {
        type: Number,
    }

})

// Create model using schema
const Person = mongoose.model('Person', personSchema);

// Export Person Model
module.exports = Person;