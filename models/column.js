const { Schema, model, SchemaTypes } = require("mongoose");

const columnSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: SchemaTypes.ObjectId,
        ref: "user",
      required: true
    },
  },
  { versionKey: false }
);

const Column = model("column", columnSchema);
module.exports = {
    Column,
};
