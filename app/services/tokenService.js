'use strict'

const jwt = require('jsonwebtoken')

const sing = (data) => {
    return jwt.sign(data, process.env.APP_SECRET)
}

const verify = (token) => {
    try {
        jwt.verify(token, process.env.APP_SECRET)        
        return true
    } catch (error) {
        return false
    }
}

module.exports = {
    sing,
    verify
}