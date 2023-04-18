const task = require('../../services/tasks')

const addTask = async (req, res, next) => {
    const { _id } = req.user;
    const result = await task.addTask({ ...req.body, owner: _id })
    return res.status(201).json({
        status: 'success',
        code: '201',
        data: {
            result
        }
    })
};

module.exports = { addTask };
