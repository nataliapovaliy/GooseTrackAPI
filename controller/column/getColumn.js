const column = require('../../services/column')


const getColumn = async (req, res, next) => {
    const { _id } = req.user;
    const { status } = req.body;

    const result = await column.get(_id, status)
    res.json(result)
}
module.exports = {
    getColumn
}