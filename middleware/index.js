const { errorHandler } = require("./errorHandler");
const { ctrlWrapper } = require("./ctrlWrapper");
const { authMiddleware } = require("./authMiddleware");
const { uploadCloud } = require("./uploadCloud");
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
  uploadCloud,
  loginValidation,
  registerValidation,
  addTaskValidation,
  userInfoValidation,
};
