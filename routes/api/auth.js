const express = require("express");
const router = express.Router();
const { registerValidation, loginValidation, ctrlWrapper } = require("../../middleware");
const { auth: ctrl } = require("../../controller");

router.post("/register", registerValidation, ctrlWrapper(ctrl.registerUser));
router.post("/login", loginValidation, ctrlWrapper(ctrl.loginUser));

module.exports = router;
