const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    start_date: { type: Date, required: true },
    end_date: { type: Date },
    title: { type: String, required: true },
    description: { type: String },
    event_type: { type: String },
    artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
    created_by: { type: Schema.Types.ObjectId, ref: 'User'}

}, { "autoCreate": true });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
