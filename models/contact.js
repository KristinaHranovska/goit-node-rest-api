const { Schema, model } = require('mongoose');

const phoneRegExp = /^\(\d{3}\) \d{3}-\d{4}$/;


const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        match: phoneRegExp,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}
)

const Contact = model('contact', contactSchema);

module.exports = { Contact }