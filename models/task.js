const { Schema, model, SchemaTypes } = require('mongoose');


const taskSchema = Schema({
    title: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    start: ,
    end:
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'auth',
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "Hight"],
        default: "to do"
    },
});

const Task = model('task', taskSchema)
module.exports = {
    Task
}