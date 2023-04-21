const { getColumns } = require("../../services/column");
const { NotFoundError } = require("../../helpers/errors");

const getAllColumns = async (req, res, next) => {
  const { _id } = req.user;
  const result = await getColumns({ owner: _id });

  if (!result) throw new NotFoundError(`Columns not found`);
  res.json(result);
};

module.exports = {
  getAllColumns,
};
