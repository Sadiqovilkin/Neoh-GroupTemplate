const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        role: {
            type: String,
            enum: ['admin', 'super-admin', 'client'],
        },
        favorites: Array,
        basket: Array,
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = userSchema;