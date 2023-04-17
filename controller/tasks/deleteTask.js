const { removeTask } = require("../../services/tasks");

const deleteTask = async (req, res, next) => {
  const tasks = await removeTask(req.params.Id);

  tasks
    ? res.json({ message: "tasks deleted" })
    : res.status(404).json({ massage: "Not found" });
};

module.exports = { deleteTask };
