const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Schema to save favourites
const FavSchema = new Schema({
    placeTitle: { type: String, required: true },
});

const Fav = mongoose.model("Fav", FavSchema);

module.exports = Fav;