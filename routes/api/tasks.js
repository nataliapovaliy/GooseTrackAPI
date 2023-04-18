const express = require("express");
const router = express.Router();
const { authMiddleware, ctrlWrapper, addTaskValidation } = require("../../middleware");
const { tasks: ctrl } = require("../../controller");

router.use(authMiddleware);
router.get("/", ctrlWrapper(ctrl.taskPerMth));
router.post("/",addTaskValidation,ctrlWrapper(ctrl.addTask));
router.patch("/:id",);
router.delete("/:id", ctrlWrapper(ctrl.deleteTask));

module.exports = router;
