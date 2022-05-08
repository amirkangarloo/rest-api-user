'use strict'

const usersRouter = require('./users')
const auth = require('../middlewares/auth')

module.exports = (app) => {
    app.use('/api/v1/users', [auth], usersRouter)
}