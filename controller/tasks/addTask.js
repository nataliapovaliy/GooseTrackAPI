const { createTask } = require("../../services/tasks");
const moment = require("moment");

const addTask = async (req, res, next) => {
  const { _id } = req.user;
  const { createAt } = req.body;
  const year = moment(createAt).format("YYYY");
  const month = moment(createAt).format("MM");

  const result = await createTask({ ...req.body, year, month, owner: _id });

  return res.status(201).json({
    status: "success",
    code: "201",
    data: {
      result,
    },
  });
};
module.exports = { addTask };
