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
        
        // The number of users
        const countOfUserList = await userModel.count()

        // pagination
        const perPage = 1
        const page = req.query.page || 1
        const offset = (page - 1) * perPage
        const totalPages = Math.ceil(countOfUserList / perPage)

        // request for pages upper than total pages
        if (page > totalPages) {
            return res.status(404).send({
                code: 'Not found',
                status: 404,
                message: 'requested resource could not be found!'
            })
        }
        
        const nextPageUrl = () => {
            if (!(hasNextPage(page, totalPages))) {
                return null
            }
            if (!(req.query.hasOwnProperty("fields"))) {
                return `${process.env.APP_URL}/api/v1/users?page=${parseInt(page) + 1}`
            }
            return `${process.env.APP_URL}/api/v1/users?fields=${req.query.fields}&page=${parseInt(page) + 1}`
        }
        
        const prevPageUrl = () => {
            if (!(hasPrevPage(page))) {
                return null
            }
            if (!(req.query.hasOwnProperty("fields"))) {
                return `${process.env.APP_URL}/api/v1/users?page=${parseInt(page) - 1}`
            }
            return `${process.env.APP_URL}/api/v1/users?fields=${req.query.fields}&page=${parseInt(page) - 1}`
        }
        
        // Find users
        const users = await userModel.find({}, projection).limit(perPage).skip(offset)

        res.status(200).send({
            successes: true,
            message: `The users list has ${countOfUserList} user`,
            users,
            meta: {
                "total result": countOfUserList,
                next: nextPageUrl(),
                perv: prevPageUrl()
            }
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

const updateUser = async (req, res, next) => {
    try {
        // Find user
        const {id} = req.params
        const user = await userModel.findByIdAndUpdate(id, req.body)

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
            message: `User with userID: (${user._id}) updated.`
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    usersList,
    addUser,
    getUser,
    deleteUser,
    updateUser
}

// pagination methods

const hasNextPage = (page, totalPages) => {
    return page < totalPages
}

const hasPrevPage = (page) => {
    return page > 1
}