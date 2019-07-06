const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
    first_name: String,
    last_name: String,
    phone: String,
    venue: String,
    address: String,
    email: String,
    note: String,
    created_by: { type: Schema.Types.ObjectId, ref: "User" }
    // address: {
    //     street: String,
    //     city: String,
    //     state: String,
    //     zip_code: String
    // },
    // email: [
    //     {
    //         email_type: String,
    //         email: { type: String, required: true },
    //         isPrimary: Boolean
    //     }
    // ],

    // phone: [{ phone_type: String, phone_num: String, isPrimary: Boolean }]
    // time_zone: String,
    // gender: String,
    // dob: Date,
    // social_accounts: {
    //     facebook: String,
    //     twitter: String,
    //     instagram: String
    // },
    // isUser: Boolean,
    // lastLogin: Date,
    // position: String,
    // profile_img: String
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
