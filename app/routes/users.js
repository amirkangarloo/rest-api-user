'use strict'

const express = require('express')
const router = express.Router()
const {
    usersList,
    addUser,
    getUser
} = require('../controllers/usersController')
const methodNotAllowed = require('../middlewares/405')

router.get('/', usersList)
router.post('/', addUser)
router.get('/:id', getUser)

// Method Not Allowed (405 Error)
router.all('/', methodNotAllowed)
router.all('/:id', methodNotAllowed)

module.exports = router