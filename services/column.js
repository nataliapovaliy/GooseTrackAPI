const { Column, Task } = require('../models')
const {NotFoundError} = require('../middleware')

const get = async (owner, status) => {
    return await Task.find({ owner, status })
}
const add = async (body) => {
    return await Column.create(body)
}

const update = async (id, body) => {
    const task = await Task.findByIdAndUpdate(id, body, { new: true }).populate(
        "owner",
        "_id status"
    );
    if (!task) {
        throw new NotFoundError(`Not found task id: ${id}`);
    }
    return task;
}
const remove = async (body) => {

}
module.exports = {
    get,
    add,
    update,
    remove
}