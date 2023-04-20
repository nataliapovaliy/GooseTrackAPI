const { createColumn } = require("../../services/column");

const addColumn = async (req, res, next) => {
  const { title } = req.body;
  const { _id } = req.user;

  const result = await createColumn({ title, owner: _id });

  return res.json({
    date: {
      result,
    },
  });
};
module.exports = {
  addColumn,
};
