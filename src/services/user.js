const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (payload, isRefresh = false) => {
	let expiresIn = Number(process.env.ACCESS_TOKEN_EXPIRATION_TIME);
	let secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

	if (isRefresh) {
		expiresIn = Number(process.env.REFRESH_TOKEN_EXPIRATION_TIME);
		secretKey = process.env.REFRESH_TOKEN_SECRET_KEY;
	}

	const token = jwt.sign({ id: payload._id }, secretKey, {
		expiresIn,
	});

	return token;
};

const verifyToken = (token, isRefresh = false) => {
	let secretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

	if (isRefresh) {
		secretKey = process.env.REFRESH_TOKEN_SECRET_KEY;
	}

	const isValid = jwt.verify(token, secretKey);

	return isValid;
};

const decodeToken = (token) => {
	const decodedToken = jwt.decode(token);

	return decodedToken;
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
	decodeToken,
};
