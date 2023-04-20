const { Column } = require("../models");


const findColumn = async (title) => {
  return await Column.findOne({ title });
};

const getColumns = async (owner) => {
  const columns = await Column.find({ owner }).populate("owner", "_id title")
  return columns
}
const createColumn = async (body) => {
  return await Column.create(body);
};



const remove = async (body) => { };

module.exports = {
  findColumn,
  createColumn,
  remove,
  getColumns,
};
