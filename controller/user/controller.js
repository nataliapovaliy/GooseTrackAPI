const { user } = require('../../services')

const logout = async (req, res) => {
    const { id } = req.user
    await user.logout(id, { token: null })
    res.status(204).json()
}

const current = async (req, res) => {
    const { email, phone, birthday, skype, name } = req.user
    res.status(200).json({
        user: {
            email,
            phone,
            birthday,
            skype,
            name
        }


    })
}
const updateUser = async (req, res) => {
    const { id } = req.user;
    const { name, email, phone, skype, birthday } = req.body
    await user.updateUser(id, { name, email, phone, skype, birthday })
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