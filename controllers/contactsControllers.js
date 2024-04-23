const contactsService = require("../services/contactsServices");
const { HttpError } = require("../helpers/HttpError");

const { Contact } = require('../models/contact')

const getAllContacts = async (req, res, next) => {
    try {
        const result = await Contact.find();
        res.json(result);
    } catch (error) {
        next(error)
    }
};

const getOneContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Contact.findById(id);
        if (!result) {
            throw HttpError(404, "Not found")
        }
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};

// const deleteContact = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await contactsService.removeContact(id);
//         if (!result) {
//             throw HttpError(404, "Not found")
//         }
//         res.json(result);
//     } catch (error) {
//         next(error)
//     }
// };

// const createContact = async (req, res, next) => {
//     try {
//         const result = await contactsService.addContact(req.body);
//         res.status(201).json(result)
//     } catch (error) {
//         next(error)
//     }
// };

// const updateContact = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { data } = req.body
//         const result = await contactsService.updateContact(id, data);

//         if (!result) {
//             throw HttpError(404, "Not found")
//         }

//         if (!data || Object.keys(data).length === 0) {
//             throw HttpError(400, "Body must have at least one field")
//         }

//         res.json(result)
//     } catch (error) {
//         next(error)
//     }
// };

module.exports = {
    getAllContacts,
    getOneContact,
    // deleteContact,
    // createContact,
    // updateContact
}