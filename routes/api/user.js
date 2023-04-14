const express = require("express");
const router = express.Router();
const { user: ctrl } = require('../../controller')
const { userInfoValidation, ctrlWrapper } = require('../../middleware')


router.get('/logout', ctrlWrapper(ctrl.logout))
router.get('/current', ctrlWrapper(ctrl.current))
router.patch('/info', userInfoValidation, ctrlWrapper(ctrl.updateUser))

module.exports = router;
