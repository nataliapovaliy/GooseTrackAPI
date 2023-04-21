const express = require("express");
const router = express.Router();
const { column: ctrl } = require('../../controller')
const { ctrlWrapper, authMiddleware } = require('../../middleware')

router.use(authMiddleware);

router.get('/', ctrlWrapper(ctrl.getAllColumns))
router.post('/', ctrlWrapper(ctrl.addColumn))
router.patch("/:id", ctrlWrapper(ctrl.updateColumn));
router.delete('/:id', ctrlWrapper(ctrl.deleteColumn))


module.exports = router;
