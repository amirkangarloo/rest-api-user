'use strict'

const userModel = require('../models/userModel')
const tokenService = require('../services/tokenService')

const newSession = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body
        const user = await userModel.findOne({email})
        // if email is not valid
        if (!user) {
            return res.status(404).send({
                code: 'Not found',
                status: 404,
                message: 'Email or Password is not correct'
            })
        }
        // make token (jwt)
        const token = tokenService.sing({id: user._id})
        
        // send token for client
        res.status(200).send({
            status: "Success",
            token: `Bearer ${token}`
        })

    } catch (error) {
        next(error)
    }

}

module.exports = {newSession}