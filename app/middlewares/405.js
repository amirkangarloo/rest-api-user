'use strict'

module.exports = (req, res, next) => {
    res.status(405).send({
        code: 'Method Not Allowed',
        status: 405,
        message: 'The requested method is not allowed!'
    })
}