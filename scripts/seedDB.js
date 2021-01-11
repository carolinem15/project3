const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Favs collection and inserts seeds below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/favorites")

