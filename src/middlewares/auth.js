const { customError } = require("../utils/error");
const { verifyToken } = require("../services/user");
const messages = require("../constants/messages");

module.exports = (req, _res, next) => {
	const authHeader = req.headers.authorization;
	const isNotAuthorizedError = new Error(messages.token.invalid);

	if (!authHeader) {
		return next(customError(isNotAuthorizedError));
	}

	const token = authHeader.split(" ")[1];

	const tokenIsValid = verifyToken(token);

	if (!tokenIsValid) {
		return next(customError(isNotAuthorizedError));
	}

	next();
};
