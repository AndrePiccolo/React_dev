const mongoose = require("mongoose")

const contractSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: [true, "User id can not be empty"]
        },
        dogName: {
            type: String,
            required: [true, "Dog name can not be empty"]
        },
        dogBreed: {
            type: String,
            required: [true, "Dog breed can not be empty"]
        },
        date: {
            type: String,
            required: [true, "Date can not be empty"]
        },
        like: {
            type: Number,
            min: 0,
            max: 2
        }
    }
)

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;