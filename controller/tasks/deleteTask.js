const { removeTask } = require("../../services/tasks");

const deleteTask = async (req, res, next) => {
  const id = req.params.id;
  await removeTask(id);

  res.json({ id, message: "task deleted" });
};

module.exports = { deleteTask };
