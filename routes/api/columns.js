const express = require("express");
const router = express.Router();
const { column: ctrl } = require('../../controller')

const { ctrlWrapper } = require('../../middleware')


router.get('/', ctrlWrapper(ctrl.getColumn))
router.post('/', ctrlWrapper(ctrl.addColumn))
router.patch('/:id', ctrlWrapper(ctrl.updateColumn))
router.delete('/:id', ctrlWrapper(ctrl.deleteColumn))


module.exports = router;
