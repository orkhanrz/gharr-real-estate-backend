const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
	const token = jwt.sign(
		{
			id: user.id,
			username: user.username,
		},
		process.env.JWT_SECRET_KEY,
		{
			expiresIn: +process.env.JWT_EXPIRATION_TIME,
		}
	);

	return token;
};

const verifyToken = (token) => {
	const isValid = jwt.verify(token, process.env.JWT_SECRET_KEY);

	return isValid;
};

const comparePasswords = async (password, encryptedPassword) => {
	const passwordsMatch = await bcrypt.compare(password, encryptedPassword);

	return passwordsMatch;
};

const hashPassword = async (password, saltRounds) => {
	const hashedPassword = await bcrypt.hash(password, saltRounds);

	return hashedPassword;
};

module.exports = {
	generateToken,
	verifyToken,
	comparePasswords,
	hashPassword,
};
