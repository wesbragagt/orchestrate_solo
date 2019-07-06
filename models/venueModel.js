const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueSchema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: false },
        website: { type: String, required: false },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip_code: { type: String, required: true },
        country: { type: String, require: true },
        capacity: { type: String, required: false },
        created_by: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { autoCreate: true }
);

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
