'use strict'

const express = require('express')
const router = express.Router()
const {
    usersList,
    addUser
} = require('../controllers/usersController')

router.get('/', usersList)
router.post('/', addUser)

module.exports = router