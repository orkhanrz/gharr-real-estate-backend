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
		const tokenIsValid = verifyToken(token);

		if (!tokenIsValid) {
			throw new Error(messages.token.invalid);
		}

		next();
	} catch (err) {
		next(customError(err));
	}
};
