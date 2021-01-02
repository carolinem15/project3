//how we save their favourite hotels
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: { type: String, required: true, trim: true, },
    location: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now, required: true }
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;