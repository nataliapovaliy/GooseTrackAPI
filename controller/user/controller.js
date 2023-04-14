const { user } = require('../../services')

const logout = async (req, res) => {
    const { id } = req.user
    await user.logout(id, { token: null })
    res.status(204).json()
}

const current = async (req, res) => {
    const { token } = req.user;
    const { email, phone, skype, birthday, name } = await user.current(token)
    res.status(200).json({
        user: {
            email,
            phone,
            skype,
            birthday,
            name
        }
    })
}
const updateUser = async (req, res) => {
    const { contactId } = req.params;
    const { name, email, phone, skype, birthday } = req.body
    await user.updateUser(contactId, { name, email, phone, skype, birthday})
    res.json({
        status: 'success',
        message: "User updated",
        code: 200,
    })
}
module.exports = {
    logout,
    current,
    updateUser
}