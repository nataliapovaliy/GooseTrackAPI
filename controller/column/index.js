const { getAllColumns } = require('./getColumn')
const { addColumn } = require('./addColumn')
const {deleteColumn} =require('./deleteColumn')


module.exports = {
    addColumn,
    deleteColumn,
    getAllColumns
}