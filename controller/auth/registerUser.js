const { ConflictError } = require("../../helpers/errors");
const { findUserBy, regUser, createToken, login } = require("../../services/auth");
const { createColumn } = require("../../services/column");

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await findUserBy({ email });

  if (user) throw new ConflictError({ message: "Email in use" });

  const inRegUser = await regUser({ name, email, password });

  const defColumns = ["To do", "In progress", "Done"];
  for (const title of defColumns) {
    await createColumn({ title, owner: inRegUser._id });
  }

  const token = await createToken(inRegUser);
  const logUser = await login(inRegUser, token);

  res.status(201).json({
    token,
    user: {
      name: logUser.name,
      avatarURL: logUser.avatarURL,
    },
  });
};

module.exports = { registerUser };
