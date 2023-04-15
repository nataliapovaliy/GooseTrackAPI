const { errorHandler } = require("./errorHandler");
const { ctrlWrapper } = require("./ctrlWrapper");
const { authMiddleware } = require("./authMiddleware");
const {
  loginValidation,
  registerValidation,
  addTaskValidation,
} = require("./validationMiddleware");
const { userInfoValidation } = require('./userInfoValidation')

module.exports = {
  errorHandler,
  ctrlWrapper,
  authMiddleware,
  loginValidation,
  registerValidation,
  addTaskValidation,
  userInfoValidation,
};
