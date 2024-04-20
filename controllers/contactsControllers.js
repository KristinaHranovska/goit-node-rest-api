const contactsService = require("../services/contactsServices");
const { HttpError } = require("../helpers/HttpError");
const contacts = require('../db/contacts')

const getAllContacts = async (req, res) => {
    const result = await contactsService.listContacts();
    res.json(result);
};

const getOneContact = (req, res) => { };

const deleteContact = (req, res) => { };

const createContact = (req, res) => { };

const updateContact = (req, res) => { };

module.exports = {
    getAllContacts,
    getOneContact,
    deleteContact,
    createContact,
    updateContact
}