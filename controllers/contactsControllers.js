const contactsService = require("../services/contactsServices");
const { HttpError } = require("../helpers/HttpError");

const getAllContacts = async (req, res) => {
    const result = await contactsService.listContacts();
    res.json(result);
};

const getOneContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await contactsService.getContactById(id);
        if (!result) {
            throw HttpError(404, "Not found")
        }
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};

const deleteContact = async (req, res) => {
    const { id } = req.params;
    const result = await contactsService.removeContact(id);
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result);
};

const createContact = async (req, res) => {
    const result = await contactsService.addContact(req.body);
    res.status(201).json(result)
};

const updateContact = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body
    const result = await contactsService.updateContact(id, data);

    if (!data || Object.keys(data).length === 0) {
        throw HttpError(400, "Body must have at least one field")
    }

    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result)
};

module.exports = {
    getAllContacts,
    getOneContact,
    deleteContact,
    createContact,
    updateContact
}