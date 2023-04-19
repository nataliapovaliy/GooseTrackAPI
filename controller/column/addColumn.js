const column = require('../../services/column')

const addColumn = async (req, res, next) => {
    const { _id } = req.user
    const result = await column.add({ ...req.body, owner: _id })
    return res.json({
        date: {
            result
        }
    })
}
module.exports = {
    addColumn
}