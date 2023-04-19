const { findUserBy, regUser, createToken, login } = require("../../services/auth");

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await findUserBy({ email });

  if (user) return res.status(409).json({ message: "Email in use" });

  const inRegUser = await regUser({ name, email, password });

  const token = await createToken(inRegUser);
  const logUser =  await login(inRegUser._id, token);

  res.status(201).json({
    token,
    user: {
      name: logUser.name,
      avatarURL: logUser.avatarURL,
    },
  });
};

module.exports = { registerUser };
