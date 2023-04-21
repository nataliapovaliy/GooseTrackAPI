const { WrongParamsError } = require("../../helpers/errors");
const { createColumn } = require("../../services/column");

const addColumn = async (req, res, next) => {
  const { title } = req.body;
  const { _id } = req.user;

  if (!title) throw new WrongParamsError("Missing field title");

  const result = await createColumn({ title, owner: _id });

  return res.status(201).json({ date: { result } });
};

module.exports = {
  addColumn,
};
