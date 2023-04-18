const { findTasks } = require("../../services/tasks");

const taskPerMth = async (req, res, next) => {
  const { _id } = req.user;
  const dateAt = req._startTime;

  const year = dateAt.getFullYear();
  const month = dateAt.getUTCMonth() + 1;
  const { y = year, m = month } = req.query;

  const tasks = await findTasks(_id, +y, +m);

  res.json(tasks);
};

module.exports = { taskPerMth };
