const { Column } = require("../models");


const findColumn = async (name) => {
  return await Column.findOne({ name });
};
const getColumns = async (owner) => {
  const columns = await Column.find({ owner }).populate("owner", "_id title")
  return columns
}
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
const remove = async (body) => { };
module.exports = {
  findColumn,
  add,
  addTaskByColumn,
  remove,
  getColumns
};
