'use strict'

const express = require('express')
const router = express.Router()
const {
    usersList,
    addUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/usersController')
const methodNotAllowed = require('../middlewares/405')
const auth = require('../middlewares/auth')

router.get('/', [auth], usersList)
router.post('/', addUser)
router.get('/:id', getUser)
router.delete('/:id', [auth], deleteUser)
router.patch('/:id', [auth], updateUser)

// Method Not Allowed (405 Error)
router.all('/', methodNotAllowed)
router.all('/:id', methodNotAllowed)

module.exports = router