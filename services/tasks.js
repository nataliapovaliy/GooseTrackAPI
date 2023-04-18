const { Task } = require("../models");
const { NotFoundError } = require('../helpers/errors')


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
const updateTask = async (id, body) => {
  const task = await Task.findByIdAndUpdate(id, body, { new: true })
  if (!task) {
    throw new NotFoundError(`Not found task id: ${id}`)
  }
}

module.exports = { findTasks, removeTask, addTask, updateTask };