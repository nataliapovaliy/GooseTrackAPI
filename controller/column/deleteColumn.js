const column = require('../../services/column')


const deleteColumn = async (req, res, next) => {
    await column.remove
}
module.exports = {
    deleteColumn
}