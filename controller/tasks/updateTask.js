const task = require("../../services/tasks");


const updateTask = async (req, res, next) => {
    const { id: _id } = req.params
    const result = await task.updateTask(_id, req.body)
    res.json({
        status: 'success',
        message: "Task updated",
        code: 200,
        data: result,
    })
}


module.exports = {
    updateTask
}