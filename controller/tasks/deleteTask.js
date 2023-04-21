const { removeTask } = require("../../services/tasks");

const deleteTask = async (req, res, next) => {
  await removeTask(req.params.Id);
  res.json({ message: "task deleted" })
};

module.exports = { deleteTask };
