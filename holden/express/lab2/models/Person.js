const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = Schema({
  // firstName, lastName, username and age
  firstName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  username: {
    type: String,
    required: true,
    maxlength: 40,
  },
  age: {
    type: String,
    required: true,
    maxlength: 5,
  }
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;