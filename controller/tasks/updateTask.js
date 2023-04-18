const task = require("../../services/tasks");
const moment = require("moment");

const updateTask = async (req, res, next) => {
  const { id: _id } = req.params;
  const body = req.body;
  const year = body.createAt ? moment(body.createAt).format("YYYY") : undefined;
  const month = body.createAt ? moment(body.createAt).format("MM") : undefined;

  const result = await task.updateTask(_id, {...body, year, month});
  res.json({
    status: "success",
    message: "Task updated",
    code: 200,
    data: result,
  });
};

module.exports = {
  updateTask,
};
