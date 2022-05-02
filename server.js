"use strict"

require('dotenv').config()
const bootApp = require('./app')

bootApp(process.env.APP_PORT)