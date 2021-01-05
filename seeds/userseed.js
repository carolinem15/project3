const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const UserSeed = [
    {
        username: "TaylorEdwards",
        password: "password1"
    },
    {
        username: "VictoriaSmith",
        password: "password2"
    },
    {
        username: "CarolineManson",
        password: "password3"
    },
    {
        username: "PhilRobbins",
        password: "password4",
    },
    {
        username: "CamiloAlvarez",
        password: "password5"
    }
];
