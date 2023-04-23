const { Task } = require("../models");
const { NotFoundError } = require("../helpers/errors");
const { getColumns } = require("./column");

const findTasks = async (owner, year, month) => {
  const tasks = await Task.find({ owner, year, month }).populate(
    "owner",
    "_id name avatarURL"
  );
  if (!tasks) throw new NotFoundError(`Not found task`);

  return tasks;
};

const removeTask = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  if (!task) throw new NotFoundError(`Not found task id: ${id}`);

  return task;
};

const createTask = async (body) => {
  const newTask = await Task.create(body);
  const { _id, status, owner } = newTask;

  const result = await updateTaskById(_id, { status }, owner);
  return result;
};

const updateTaskById = async (id, body, owner) => {
  const { status } = body;
  let columnId = status;

  if (status) columnId = await findColumn(status, owner);

  const task = await Task.findByIdAndUpdate(
    id,
    { ...body, columnId },
    { new: true }
  ).populate("owner", "_id name avatarURL");

  if (!task) throw new NotFoundError(`Not found task id: ${id}`);
  return task;
};

const findColumn = async (title, owner) => {
  const columnId = await getColumns({ owner, title });

  if (!columnId[0]) throw new NotFoundError(`You must create a column first.`);
  return columnId[0]._id;
};

module.exports = { findTasks, removeTask, createTask, updateTaskById };
