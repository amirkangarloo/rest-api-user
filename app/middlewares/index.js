'use strict'

const cors = require('cors')

module.exports = (app, express) => {
    app.use(cors())
    app.use(express.json())
}