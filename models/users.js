const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "User name can not be empty"]
        },
        email: {
            type: String,
            required: [true, "User email can not be empty"]
        },
        pwd: {
            type: String,
            minlength: 6,
            maxlength: 8,
            required: [true, "User password can not be empty"]
        },
        phone: {
            type: String,
            required: [true, "User phone number can not be empty"]
        },
        address: {
            type: String,
            required: [true, "User address can not be empty"]
        },
        city: {
            type: String,
            required: [true, "User city can not be empty"]
        },
        province: {
            type: String,
            required: [true, "User province can not be empty"]
        },
        zipcode: {
            type: String,
            required: [true, "User zipcode can not be empty"]
        },
        isAdmin: {
            type: Boolean,
            required: [true, "User admin status can not be empty"]
        }
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;