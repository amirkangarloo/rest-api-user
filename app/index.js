'use strict'

const express = require('express')
const app = express()

// DataBase (connection to MongoDB)
require('./database/connection')()

// middleware
require('./middlewares')(app, express)

// router
require('./routes')(app)

// Not found handler
require('./middlewares/404')(app)

// exception (Error) handler
require('./middlewares/exception')(app)

module.exports = (port) => {
    app.listen(port, () => {
        console.log(`App is runing on port: ${port}`);
    })
}