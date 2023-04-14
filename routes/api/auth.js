const express = require('express');
const router = express.Router();
const { ctrlWrapper } = require("../../middlewares/ctrlWrraper");
const { authMiddleware } = require('../../middlewares/authMiddleware');

router.post("/register", ctrlWrapper());
router.post("/login",  ctrlWrapper());



module.exports = router