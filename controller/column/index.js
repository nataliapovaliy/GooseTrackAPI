const { getAllColumns } = require("./getColumn");
const { addColumn } = require("./addColumn");
const { updateColumn } = require("./updateColumn");
const { deleteColumn } = require("./deleteColumn");

module.exports = {
  addColumn,
  deleteColumn,
  updateColumn,
  getAllColumns,
};
