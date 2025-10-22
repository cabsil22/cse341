const routes = require('express').Router();
const { home, lookup } = require('../controllers/maincontroller')

routes.get('/', home)
routes.get('/lookup', lookup)

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes