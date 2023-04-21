const { Task } = require("../models");
const { NotFoundError } = require("../helpers/errors");
const { findColumn } = require("./column");

const findTasks = async (owner, year, month) => {
  const tasks = await Task.find({ owner, year, month }).populate(
    "owner",
    "_id name avatarURL"
  );
  return tasks;
};

const removeTask = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  if (!task) {
    throw new NotFoundError(`Not found task id: ${id}`);
  }
  return task;
};

const createTask = async (body) => {
  const newTask = await Task.create(body);
  const result = await updateTaskById(newTask._id, { status: newTask.status });
  return result;
};

const updateTaskById = async (id, body) => {
  const { status } = body;
  const columnId = await findColumn(status);
  if (!columnId) {
    throw new NotFoundError(`You can create a column first.`);
  }

  const task = await Task.findByIdAndUpdate(
    id,
    { ...body, columnId: columnId._id },
    { new: true }
  ).populate("owner", "_id name avatarURL");
  if (!task) {
    throw new NotFoundError(`Not found task id: ${id}`);
  }
  return task;
};

module.exports = { findTasks, removeTask, createTask, updateTaskById };
