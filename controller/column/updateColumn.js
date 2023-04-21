const { WrongParamsError, NotFoundError } = require("../../helpers/errors");
const { chengeColumn } = require("../../services/column");

const updateColumn = async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) throw new WrongParamsError("Missing field title");

  const updatedColumn = await chengeColumn(id, title);

  if (!updatedColumn) throw new NotFoundError("Column not found");
  res.json(updatedColumn);
};

module.exports = { updateColumn };
