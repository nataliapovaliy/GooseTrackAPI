const { errorHandler } = require('./errorHandler')
const { ctrlWrapper } = require('./ctrlWrapper')
const { authMiddleware } = require('./authMiddleware')
const { loginValidation, registerValidation, addTaskValidation, userInfoValidation } = require('./validationMiddleware')


module.exports = {
    errorHandler,
    ctrlWrapper,
    authMiddleware,
    loginValidation,
    registerValidation,
    addTaskValidation,
    userInfoValidation
}