'se strict'

const express = require('express')
const router = express.Router()

const {
    newSession
} = require('../controllers/sessionController')


router.post('/new', newSession)

module.exports = router