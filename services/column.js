const { Column } = require("../models");

const createColumn = async (body) => {
  return await Column.create(body);
};

const getColumns = async (body) => {
  return await Column.find(body).populate("owner", "_id title");
};

const chengeColumn = async (id, title) => {
  return await Column.findByIdAndUpdate(id, { title }, { new: true });
};

const removeColumn = async (id) => {
  return await Column.findByIdAndRemove(id);
};

module.exports = {
  createColumn,
  removeColumn,
  chengeColumn,
  getColumns,
};
