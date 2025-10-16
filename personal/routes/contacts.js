const contactRoutes = require('express').Router();
const { getAllContacts, getContact, deleteContact, updateContact, createContact } = require('../controllers/contacts')

contactRoutes.get('/', getAllContacts)
contactRoutes.post('/', createContact)
contactRoutes.get('/:id', getContact)
contactRoutes.delete('/:id', deleteContact)
contactRoutes.put('/:id', updateContact)


module.exports = contactRoutes