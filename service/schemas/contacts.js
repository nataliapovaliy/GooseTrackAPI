const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contacts = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    }
})

const Contacts = mongoose.model("contact", contacts);
module.exports = Contacts;