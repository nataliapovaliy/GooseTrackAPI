const express = require("express");
const router = express.Router();
const { user: ctrl } = require("../../controller");
const {
  userInfoValidation,
  ctrlWrapper,
  authMiddleware,
  uploadCloud,
} = require("../../middleware");

router.get("/logout", authMiddleware, ctrlWrapper(ctrl.logout));
router.get("/current", authMiddleware, ctrlWrapper(ctrl.current));
router.patch(
  "/info",
  authMiddleware,
  uploadCloud.single("avatar"),
  userInfoValidation,
  ctrlWrapper(ctrl.update)
);

module.exports = router;
