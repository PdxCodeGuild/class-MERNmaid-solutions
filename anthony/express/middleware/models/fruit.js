const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fruitSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Fruity = mongoose.model("Fruity", fruitSchema);

module.exports = Fruity;
