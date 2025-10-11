const express = require('express');
const app = express();
const cors = require('cors')
const { webRoutes, contactRoutes } = require('./routes')
const environment = require('dotenv').config();
const defaultPort = process.env.port || 8080

app.use(cors())
app.use('/', webRoutes)
app.use('/contacts', contactRoutes)
 
app.listen(defaultPort, () => {
  console.log('Web Server is listening at port ' + (defaultPort));
});










