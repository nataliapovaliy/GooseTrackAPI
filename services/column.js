const { Column, Task } = require("../models");
const { NotFoundError } = require("../middleware");

const findColumn = async (title) => {
  return await Column.findOne({ title });
};
const add = async (body) => {
  return await Column.create(body);
};

const addTaskByColumn = async (id, title, task) => {
  const result = Column.findByIdAndUpdate(
    id,
    { tasksId: { task } },
    { new: true }
  );
  return result;
};
const remove = async (body) => {};
module.exports = {
  findColumn,
  add,
  addTaskByColumn,
  remove,
};
