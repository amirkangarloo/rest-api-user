'use strict'

const usersList = async (req, res, next) => {
    res.status(200).send({
        successes: true,
        message: "List of users"
    })
}

module.exports = {
    usersList
}