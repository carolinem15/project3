//how we save user profiles
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;