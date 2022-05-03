'use strict'

module.exports = (app) => {
    app.use((error, req, res, next) => {
        const status = error.status || 500

        res.status(status).send({
            code: error.name,
            status,
            message: error.message
        })
    })
}