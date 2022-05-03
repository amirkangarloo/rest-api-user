'use strict'

const express = require('express')
const app = express()

// middleware
require('./middlewares')(app, express)

// router
require('./routes')(app)

module.exports = (port) => {
    app.listen(port, () => {
        console.log(`App is runing on port: ${port}`);
    })
}