'use strict'

const express = require('express')
const router = express.Router()
const {usersList} = require('../controllers/usersController')

router.get('/',usersList)

module.exports = router