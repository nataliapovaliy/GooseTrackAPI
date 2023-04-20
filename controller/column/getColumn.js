const { findColumn, getColumns } = require("../../services/column");


const getColumn = async (req, res, next) => {

    const result = await findColumn(req.body);
    res.json(result[0]._id)
}

const getAllColumns = async (req, res, next) => {
    const { _id } = req.user
    const result = await getColumns(_id)
    res.json(result)
}
module.exports = {
    getColumn,
    getAllColumns
}