const { Task } = require("../models");

const findTasks = async (owner, year, month) => {
  console.log(year, month);
  const tasks = await Task.find({ owner, year, month });
  return tasks
}

const removeTask = async (Id) => {
  const task = await Task.findByIdAndRemove(Id);
  return task;
};

const addTask = async (body) => {
  return Task.create(body)
}

module.exports = { findTasks, removeTask, addTask };