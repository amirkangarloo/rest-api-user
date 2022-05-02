'use strict'

const express = require('express')
const app = express()

module.exports = (port) => {
    app.listen(port, () => {
        console.log(`App is runing on port: ${port}`);
    })
}