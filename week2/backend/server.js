const express = require('express')
const cors = require('cors')
const { webRoutes } = require('./routes')

const app = express()
const port = process.env.port || 8080

app.use(cors())
app.use('/', webRoutes)
app.listen(port, () => {
    console.log(`App listening on ${port}`);
})
