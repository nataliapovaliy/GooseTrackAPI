const { User } = require('../../models')
const { NotFoundError } = require('../../helpers/errors')

const logout = async (id, token) => {
    return await User.findByIdAndUpdate(id, token)
}

const updateUser = async (id, body) => {
    const user = await User.findByIdAndUpdate(id, body, { new: true })
    if (!user) {
        throw new NotFoundError(`Not found contact id: ${id}`)
    }
    return user;
}
module.exports = {
    logout,
    updateUser
}