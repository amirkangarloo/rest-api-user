'use strict'

const mongoose = require('mongoose')
const {
    MONGO_URL,
    MONGO_DB_NAME
} = process.env


module.exports = () => {
    mongoose.connect(`${MONGO_URL}/${MONGO_DB_NAME}`)
}