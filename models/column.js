const { Schema, model, SchemaTypes } = require("mongoose");

const columnSchema = Schema(
    {
        owner: {
            type: SchemaTypes.ObjectId,
            ref: "user",
        },
        column: {
            type: String,
            default: "To do"
        }
    },
    { versionKey: false }
);

const Column = model("column", columnSchema);
module.exports = {
    Column,
};
