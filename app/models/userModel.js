'use strict'

const mongoos = require('mongoose')

const userSchema = new mongoos.Schema({
    first_name: String,
    last_name: String,
    mobile: String,
    email: String,
    wallet: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const userModel = mongoos.model('User', userSchema)

module.exports = userModel