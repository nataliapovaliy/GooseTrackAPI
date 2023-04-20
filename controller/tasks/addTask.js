const { findColumn, addTaskByColumn } = require("../../services/column");
const { createTask } = require("../../services/tasks");
const moment = require("moment");


const addTask = async (req, res, next) => {
  const { _id } = req.user;
  const { createAt } = req.body;
  const year = moment(createAt).format("YYYY");
  const month = moment(createAt).format("MM");

  const result = await createTask({ ...req.body, year, month, owner: _id, });
  
  const column = await findColumn(result.status);
  const added = await addTaskByColumn(column._id, result.title, result._id);
  console.log(added);
  
  return res.status(201).json({
    status: "success",
    code: "201",
    data: {
      result,
    },
  });
};
module.exports = { addTask };
