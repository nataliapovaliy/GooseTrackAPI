const { NotFoundError } = require("../../helpers/errors");
const { removeColumn } = require("../../services/column");

const deleteColumn = async (req, res, next) => {
  const id = req.params.id;
  const column = await removeColumn(id);

  if (!column) throw new NotFoundError(`Column not found`);
  res.json({ id, message: "column deleted" });
};

module.exports = { deleteColumn };
