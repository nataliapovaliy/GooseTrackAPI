const { User } = require("../models");

const logoutUser = async (id, token) => {
  return await User.findByIdAndUpdate(id, token);
};

const updateUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
  logoutUser,
  updateUser,
};
