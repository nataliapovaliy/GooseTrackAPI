const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    avatarURL: {
        type: String,
        required: true
    },
    skype: {
        type: Number,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    token: {
        type: String,
        default: null
    },
});
userSchema.pre('save', async function () {
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 10)
    }
})
const User = model('user', userSchema)

module.exports = {
    User
}