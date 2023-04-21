const { PersonalError } = require("../../helpers/errors")

const errorHandler = (error, req, res, next) => {
    if (error instanceof PersonalError) {
        return res.status(error.status).json({ message: error.message })
    }
    res.status(500).json({ message: error.message })
}

module.exports = {
    errorHandler
}