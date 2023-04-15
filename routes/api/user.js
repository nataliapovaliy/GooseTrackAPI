const express = require("express");
const router = express.Router();
const { user: ctrl } = require('../../controller')
const { userInfoValidation, ctrlWrapper,authMiddleware } = require('../../middleware')


router.get('/logout',authMiddleware, ctrlWrapper(ctrl.logout))
router.get('/current',authMiddleware, ctrlWrapper(ctrl.current))
router.patch('/info',authMiddleware, userInfoValidation, ctrlWrapper(ctrl.updateUser))

module.exports = router;
