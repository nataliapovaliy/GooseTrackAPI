const { Schema, model, SchemaTypes } = require("mongoose");

const taskSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for task"],
    },
    start: {
      type: Number,
      required: true,
    },
    end: {
      type: Number,
      required: true,
    },
    createAt: {
      type: Date,
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
