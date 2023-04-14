const express = require('express');
const router = express.Router();
const { ctrlWrapper } = require("../../middleware");

router.post("/register", ctrlWrapper());
router.post("/login",  ctrlWrapper());



module.exports = router