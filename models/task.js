const { Schema, model, SchemaTypes } = require("mongoose");

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
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    status: {
      type: String,
      enum: ["To do", "In progress", "Done"],
      default: "To do",
    },
    columnId: {
      type: SchemaTypes.ObjectId,
      ref: "column",
    },
  },
  { versionKey: false }
);

const Task = model("task", taskSchema);
module.exports = {
  Task,
};
