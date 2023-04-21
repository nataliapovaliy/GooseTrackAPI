const { WrongParamsError, NotFoundError } = require("../../helpers/errors");
const { updateUser } = require("../../services/user");

const update = async (req, res) => {
  const { id } = req.user;
  const bodyParam = req.body;
  let updateParam = { ...bodyParam };

  if (req.file) {
    const { path: avatarURL } = req.file;
    updateParam = { avatarURL, ...bodyParam };
  }

  if (!updateParam) throw new WrongParamsError({ message: `Missing field` });

  const user = await updateUser(id, updateParam);
  if (!user) throw new NotFoundError("User not found");

  res.json({
    status: "success",
    message: "User updated",
    user: updateParam,
  });
};

module.exports = { update };
