const { NotFoundError } = require("../../helpers/errors");
const { removeColumn } = require("../../services/column");

const deleteColumn = async (req, res, next) => {
  const column = await removeColumn(req.params.id);

  if (!column) throw new NotFoundError(`Column not found`);
  res.json({ message: "column deleted" });
};

module.exports = { deleteColumn };
