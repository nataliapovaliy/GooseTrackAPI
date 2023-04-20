const { Schema, model } = require("mongoose");

const columnSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        tasksId:{
            type:Array
        }
    },
    { versionKey: false }
);

const Column = model("column", columnSchema);
module.exports = {
    Column,
};
