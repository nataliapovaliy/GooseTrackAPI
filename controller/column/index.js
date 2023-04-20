const { getAllColumns } = require('./getColumn')
const { updateColumn } = require('./updateColumn')
const { addColumn } = require('./addColumn')
const {deleteColumn} =require('./deleteColumn')


module.exports = {
    updateColumn,
    addColumn,
    deleteColumn,
    getAllColumns
}