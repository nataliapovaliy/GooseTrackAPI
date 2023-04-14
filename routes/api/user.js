const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../middleware")
const { user: logout, current, updateUser } = require('../../controller')
const { userInfoValidation } = require('../../middleware')


router.get('/logout', ctrlWrapper(logout))
router.get('/current', ctrlWrapper(current))
router.patch('/info', userInfoValidation, ctrlWrapper(updateUser))

module.exports = router;
