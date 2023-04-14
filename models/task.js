// const { Schema, model, SchemaTypes } = require('mongoose');


// const taskSchema = Schema({
//     title: {
//         type: String,
//         required: [true, 'Set name for task'],
//     },
//     start: {
//         type: TimeRanges,
//     },
//     end: {
//         type: TimeRanges,
//     },
//     owner: {
//         type: SchemaTypes.ObjectId,
//         ref: 'user',
//     },
//     priority: {
//         type: String,
//         enum: ["Low", "Medium", "Hight"],
//         default: "Low"
//     },
// });

// const Task = model('task', taskSchema)
// module.exports = {
//     Task
// }