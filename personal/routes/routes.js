const routes = require('express').Router();
const { home, lookup } = require('../controllers/maincontroller')

routes.get('/', home)
routes.get('/lookup', lookup)


module.exports = routes