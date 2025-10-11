const contactRoutes = require('express').Router();
const { all, person } = require('../controllers/contacts')

contactRoutes.get('/', all)
contactRoutes.get('/person/:id', person)


module.exports = contactRoutes