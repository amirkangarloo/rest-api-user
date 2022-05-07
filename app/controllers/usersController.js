'use strict'

const userModel = require('../models/userModel')

const usersList = async (req, res, next) => {
    try {
        // Filter for user fields
        let projection = {}
        if (req.query.hasOwnProperty("fields")) {
            projection = req.query.fields.split(',').reduce((total, current) => {
                return {
                    [current]: 1,
                    ...total
                }
            },{})
        }
        
        // Find users
        const users = await userModel.find({}, projection)

        // The number of users
        const countOfUserList = await userModel.count()
        
        res.status(200).send({
            successes: true,
            message: `The users list has ${countOfUserList} user`,
            users
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

const getUser = async (req, res, next) => {
    try {
        // Filter for user fields
        let projection = {}
        if (req.query.hasOwnProperty("fields")) {
            projection = req.query.fields.split(',').reduce((total, current) => {
                return {
                    [current]: 1,
                    ...total
                }
            },{})
        }

        // Find user
        const {id} = req.params
        const user = await userModel.findById(id, projection)

        // The user id is not valid
        if (!user) {
            return res.status(404).send({
                code: 'Not found',
                status: 404,
                message: 'requested resource could not be found!'
            })
        }

        // The user id is valid
        res.status(200).send({
            successes: true,
            user
        })
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        // Find user
        const {id} = req.params
        const user = await userModel.findByIdAndDelete(id)

        // The user id is not valid
        if (!user) {
            return res.status(404).send({
                code: 'Not found',
                status: 404,
                message: 'requested resource could not be found!'
            })
        }

        // The user id is valid
        res.status(202).send({
            successes: true,
            message: `User with userID: (${user._id}) deleted.`
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    usersList,
    addUser,
    getUser,
    deleteUser
}