const column = require('../../services/column')


const deleteColumn = async (req, res, next) => {
    await column.remove(req.params.id)
    res.json({ message: "column deleted" })
}
module.exports = {
    deleteColumn
}