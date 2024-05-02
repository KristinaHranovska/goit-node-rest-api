const getAllContacts = require("./contacts/getAllContacts");
const getOneContact = require("./contacts/getOneContact");
const deleteContact = require("./contacts/deleteContact");
const createContact = require("./contacts/createContact");
const updateContact = require("./contacts/updateContact");
const updateStatusContact = require("./contacts/updateContact");

module.exports = { getAllContacts, getOneContact, deleteContact, createContact, updateContact, updateStatusContact };