const { Schema, model } = require("mongoose");

const columnSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        columnId:{
            type:String
        }
    },
    { versionKey: false }
);

const Column = model("column", columnSchema);
module.exports = {
    Column,
};
