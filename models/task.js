const { Schema, model, SchemaTypes } = require("mongoose");
const moment = require('moment');

const now = moment(Date.now()).format('YYYY/MM/DD')
const taskSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for task"],
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    createAt: {
      type: String,
      default: now,
      required: true,
    },
    year: {
      type: String,
    },
    month: {
      type: String,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "Hight"],
      default: "Low",
    },
  },
  { versionKey: false }
);

const Task = model("task", taskSchema);
module.exports = {
  Task,
};
