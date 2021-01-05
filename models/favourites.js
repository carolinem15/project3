const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Schema to save favourites
const FavSchema = new Schema({
    //hotel vs food vs attraction
    resultId: { type: String },
    category: { type: String },
    placeTitle: { type: String, required: true },
    //where in the world this is, may be based off initial search field
    location: { type: String, required: true, trim: true }
});

const Fav = mongoose.model("Fav", FavSchema);

module.exports = Fav;