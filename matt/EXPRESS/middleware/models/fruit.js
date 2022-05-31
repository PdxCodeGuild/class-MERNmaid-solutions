const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fruitSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Fruit = mongoose.model("Fruit", fruitSchema);
module.exports = Fruit;