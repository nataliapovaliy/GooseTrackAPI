const { updateTaskById } = require("../../services/tasks");
const moment = require("moment");

const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;
  const body = req.body;
  
  const year = body.createAt ? moment(body.createAt).format("YYYY") : undefined;
  const month = body.createAt ? moment(body.createAt).format("MM") : undefined;

  const result = await updateTaskById(id, { ...body, year, month }, _id);
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
