const { Schema, model } = require('mongoose');
const Joi = require("joi");

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
})

const createContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
})

const updateContactSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
})

const schemas = {
    createContactSchema,
    updateContactSchema,
}

const Contact = model('contact', contactSchema);

module.exports = {
    Contact,
    schemas
}