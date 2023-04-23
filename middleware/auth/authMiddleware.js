const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { Unauthorized } = require("../../helpers/errors");

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer" || !token) next(new Unauthorized("Not authorized"));

    const { id } = jwt.decode(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(id);

    if (!user || !user.token) next(new Unauthorized("Not authorized"));

    req.user = user;
    next();
  } catch (error) {
    next(new Unauthorized("Invalid token"));
  }
};

module.exports = {
  authMiddleware,
};
