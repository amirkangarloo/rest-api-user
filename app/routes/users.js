'use strict'

const express = require('express')
const router = express.Router()
const {
    usersList,
    addUser,
    getUser
} = require('../controllers/usersController')

router.get('/', usersList)
router.post('/', addUser)
router.get('/:id', getUser)

module.exports = router