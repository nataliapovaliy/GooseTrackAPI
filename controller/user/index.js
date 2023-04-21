const { update } = require("./update");
const { currentUser } = require("./currentUser");
const { logout } = require("./logout");

module.exports = {
  logout,
  currentUser,
  update,
};
