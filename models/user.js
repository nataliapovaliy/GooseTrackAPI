const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const moment = require("moment");

const now = moment(Date.now()).format("YYYY/MM/DD");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      default: ''
    },
    avatarURL: {
      type: String,
      default: null,
    },
    skype: {
      type: String,
      default: ''
    },
    birthday: {
      type: String,
      default: `${now}`,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
const User = model("user", userSchema);

module.exports = {
  User,
};
