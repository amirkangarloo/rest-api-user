'use strict'

const userModel = require('../models/userModel')

const usersList = async (req, res, next) => {
    try {
        res.status(200).send({
            successes: true,
            message: "List of users"
        })
    } catch (error) {
        next(error)
    }
}

const addUser = async (req, res, next) => {
    try {
        const {first_name, last_name, mobile, email} = req.body
        const user = new userModel({
            first_name,
            last_name,
            mobile,
            email
        })
        await user.save()

        res.status(201).send({
            successes: true,
            message: "Created new user",
            userId: user._id
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    usersList,
    addUser
}