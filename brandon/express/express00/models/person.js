const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
