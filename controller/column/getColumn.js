const { findColumn } = require("../../services/column");


const getColumn = async (req, res, next) => {

    const result = await findColumn(req.body);
    res.json(result[0]._id)
}
module.exports = {
    getColumn
}