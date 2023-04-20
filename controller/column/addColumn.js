const columns = require('../../services/column')

const addColumn = async (req, res, next) => {
    const { title } = req.body
    const result = await columns.add({ title })
    return res.json({
        date: {
            result
        }
    })
}
module.exports = {
    addColumn
}
