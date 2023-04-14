const { findUserBy, regUser } = require("../../services/auth");

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await findUserBy({ email });

  user
    ? res.status(409).json({ message: "Email in use" })
    : await regUser({ name, email, password });

  res.status(201).json({
    user: {
      name,
      email,
    },
  });
};

module.exports = { registerUser };
