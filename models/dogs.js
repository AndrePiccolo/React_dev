const mongoose = require("mongoose")

const dogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Dog name can not be empty"]
        },
        image: {
            type: String,
            required: [true, "Dog photo link can not be empty"]
        },
        breed: {
            type: String,
            required: [true, "Dog breed can not be empty"]
        },
        description: {
            type: String,
            required: [true, "Dog description can not be empty"]
        }
    }
)

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;