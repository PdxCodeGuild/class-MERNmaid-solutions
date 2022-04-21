const mongoose = require("mongoose");

const { Schema } = mongoose;

const personSchema = Schema({
  firstName: String,
  lastName: String,
  username: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
