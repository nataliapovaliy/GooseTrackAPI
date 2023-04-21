const { Column } = require("../models");
const { NotFoundError } = require("../helpers/errors");



const findColumn = async (title) => {
  return await Column.findOne({ title });
};
const getColumns = async (owner) => {
  const columns = await Column.find({ owner }).populate("owner", "_id title")
  return columns
}
const add = async (body) => {
  return await Column.create(body);
};


const remove = async (id) => {
  const column = await Column.findByIdAndRemove(id);
  if (!column) {
    throw new NotFoundError(`Not found column id: ${id}`);
  }
  return column;
};
module.exports = {
  findColumn,
  add,
  remove,
  getColumns
};
