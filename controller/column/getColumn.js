const { getColumns } = require("../../services/column");

const getAllColumns = async (req, res, next) => {
    const { _id } = req.user
    const result = await getColumns(_id)
    res.json(result)
}
module.exports = {
    getAllColumns
}