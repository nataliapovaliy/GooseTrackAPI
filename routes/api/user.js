const express = require("express");
const router = express.Router();
const { user: ctrl } = require("../../controller");
const {
  userInfoValidation,
  ctrlWrapper,
  authMiddleware,
  uploadCloud,
} = require("../../middleware");

router.use(authMiddleware);
router.get("/logout", ctrlWrapper(ctrl.logout));
router.get("/current", ctrlWrapper(ctrl.current));
router.patch(
  "/info",
  uploadCloud.single("avatar"),
  userInfoValidation,
  ctrlWrapper(ctrl.update)
);

module.exports = router;
