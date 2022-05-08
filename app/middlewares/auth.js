'use strict'

const tokenService = require('../services/tokenService')

module.exports = (req, res, next) => {
    if (!('authorization' in req.headers)) {
        return res.status(401).send({
            code: "Unauthorized",
            status: 401,
            message: "You are not authorized!"
        })
    }
    const token = req.headers.authorization
    const validaion = tokenService.verify(token)
    if (!validaion) {
        return res.status(401).send({
            code: "Unauthorized",
            status: 401,
            message: "Your token is not valid!"
        })
    }
    next()
}