const mongoose = require("mongoose");
const db = require("../models");
const {userSeed} = require("./userseed");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


