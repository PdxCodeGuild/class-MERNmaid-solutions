const mongoose = require("mongoose");

const Schema = mongoose.Schema

const characterSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            deefault: 1
        },
        weapon: {
            type: String,
            default : "fisticuffs"
        },
    }, 
    {
        toJSON: {
            virtuals: true
        },
    }
);

characterSchema.virtual("skills", { // virtual attribute called skill
    ref: "Skill", // reference to model name
    localField: "_id", // unique to model name
    foreignField: "character", // what should 'skills' call this model
    justOne: true // Can character have multiple skills?
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;