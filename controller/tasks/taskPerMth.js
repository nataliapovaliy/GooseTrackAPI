const { findTasks } = require("../../services/tasks");

const taskPerMth = async (req, res, next) => {
  const { _id } = req.user;
  const { y, m } = req.query;

  const tasks = await findTasks(_id, y, m);

  res.json(tasks);
};

module.exports = { taskPerMth };
