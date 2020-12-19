//how we save their favourite attractions
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: { type: String, required: true},
    location : { type: String, required: true },
    hotel: [
        {
            type: Schema.Types.ObjectId,
            ref: "Hotel"
        }
    ]
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;