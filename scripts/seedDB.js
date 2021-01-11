const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Favs collection and inserts seeds below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/favorites");

const stuffSeeds = [
    {
        placeTitle: "The Eiffel Tower"
    },
    {
        placeTitle: "The Louvre Museum"
    },
    {
        placeTitle: "Pullman Pairs Tour Eiffel"
    },
    {
        placeTitle: "Epicure"
    },
    {
        placeTitle: "Four Seasons Hotel George V, Paris"
    }
]

db.Fav
    .remove({})
    .then(() => db.Fav.collection.insertMany(stuffSeeds))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })