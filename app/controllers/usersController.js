'use strict'

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

module.exports = {
    usersList
}