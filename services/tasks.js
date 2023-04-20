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

const removeTask = async (Id) => {
  const task = await Task.findByIdAndRemove(Id);
  return task;
};

const createTask = async (body) => {
  const newTask = await Task.create(body);
  const result = await updateTaskById(newTask._id, {status: newTask.status});
  return result;
};

const updateTaskById = async (id, body) => {
  const { status } = body;
  const { _id } = await findColumn(status);

  const task = await Task.findByIdAndUpdate(
    id,
    { ...body, columnId: _id },
    { new: true }
  ).populate("owner", "_id name avatarURL");
  if (!task) {
    throw new NotFoundError(`Not found task id: ${id}`);
  }
  return task;
};

module.exports = { findTasks, removeTask, createTask, updateTaskById };
