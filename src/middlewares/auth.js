const { customError } = require("../utils/error");
const { verifyToken } = require("../services/user");
const messages = require("../constants/messages");

module.exports = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error(messages.token.invalid);
  }

  const token = authHeader.split(" ")[1];

  try {
    const verifiedToken = verifyToken(token);

    if (!verifiedToken) {
      throw new Error(messages.token.invalid);
    }

    req.userId = verifiedToken.id;

    next();
  } catch (err) {
    next(customError(err));
  }
};
