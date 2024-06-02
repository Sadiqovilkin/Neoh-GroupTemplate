const mongoose = require("mongoose");
const userSchema = require('../schemas/user.schema');

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;