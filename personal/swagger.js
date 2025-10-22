const swaggerAutogen = require('swagger-autogen')();
const environment = require("dotenv").config();
const HOST_PATH = process.env.HOST_PATH;

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: HOST_PATH,
  schemes: ['https', 'http'],
  basePath: '/contacts'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/contacts.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);