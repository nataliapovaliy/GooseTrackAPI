const express = require("express");
const router = express.Router();
const { user: ctrl } = require("../../controller");
const {userInfoValidation, ctrlWrapper, authMiddleware, uploadCloud,} = require("../../middleware");

router.use(authMiddleware);

router.delete("/logout", ctrlWrapper(ctrl.logout));
router.get("/current", ctrlWrapper(ctrl.currentUser));
router.patch(
  "/info",
  uploadCloud.single("avatar"),
  userInfoValidation,
  ctrlWrapper(ctrl.update)
);

module.exports = router;
