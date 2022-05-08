'use strict'

const usersRouter = require('./users')
const sessionRouter = require('./session')

module.exports = (app) => {
    app.use('/api/v1/users', usersRouter)
    app.use('/api/v1/session', sessionRouter)
}