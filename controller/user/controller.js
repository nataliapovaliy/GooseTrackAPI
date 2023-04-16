const { logoutUser, updateUser } = require("../../services/user");

const logout = async (req, res) => {
  const { id } = req.user;
  await logoutUser(id, { token: null });
  res.status(204).json();
};

const current = async (req, res) => {
  const { email, phone, avatarURL, birthday, skype, name } = req.user;
  res.status(200).json({
    user: {
      email,
      phone,
      avatarURL,
      birthday,
      skype,
      name,
    },
  });
};
const update = async (req, res) => {
  const { id } = req.user;
  const updateParam = req.body;

  if (req.file) {
    const { path: avatarURL } = req.file;
    await updateUser(id, { avatarURL, ...updateParam });
  } else {
    await updateUser(id, { ...updateParam });
  }

  res.json({
    status: "success",
    message: "User updated",
    code: 200,
  });
};
module.exports = {
  logout,
  current,
  update,
};
