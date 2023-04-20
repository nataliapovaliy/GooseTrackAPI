const { Task } = require("../models");
const { NotFoundError } = require("../helpers/errors");

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
  return Task.create(body);
};
const updateTaskById = async (id, body) => {
  const task = await Task.findByIdAndUpdate(id, body, { new: true })
    .populate("owner", "_id name avatarURL")
  if (!task) {
    throw new NotFoundError(`Not found task id: ${id}`);
  }
  return task;
};

module.exports = { findTasks, removeTask, createTask, updateTaskById };
