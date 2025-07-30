const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model("latest_users", userSchema);


module.exports = UserModel;