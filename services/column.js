const { Column, Task } = require('../models')
const { NotFoundError } = require('../middleware')

const get = async () => {
        return await Column.find({title:"Done"})
}
const add = async (body) => {
    return await Column.create(body)
}

const update = async (id, body) => {
    const task = await Task.findByIdAndUpdate(id, body, { new: true });
    if (!task) {
        throw new NotFoundError(`Not found task id: ${id}`);
    }
    const result = Column.findByIdAndUpdate(id, task, { new: true })
    return result
}
const remove = async (body) => {

}
module.exports = {
    get,
    add,
    update,
    remove
}