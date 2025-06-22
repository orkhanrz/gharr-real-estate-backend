const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { customError } = require("../utils/error");
const {
	generateToken,
	comparePasswords,
	hashPassword,
	verifyToken,
	decodeToken,
} = require("../services/user");

const signIn = async (req, res, next) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(404).json({ message: "İstifadəçi tapılmadı." });
		}

		const isPasswordValid = await comparePasswords(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Şifrə səhvdir." });
		}

		const accessToken = generateToken(user);
		req.session.refreshToken = generateToken(user, true);

		return res.status(200).json({ token: accessToken });
	} catch (err) {
		next(customError(err));
	}
};

const signUp = async (req, res, next) => {
	const { username, password, email, fullName, phoneNumber, country } = req.body;

	const hashedPassword = await hashPassword(password, 10);

	try {
		const newUser = await User.create({
			username,
			password: hashedPassword,
			email,
			fullName,
			phoneNumber,
			country,
		});

		const savedUser = await newUser.save();

		const accessToken = generateToken(savedUser);
		req.session.refreshToken = generateToken(savedUser, true);

		res.status(201).json({ token: accessToken });
	} catch (err) {
		next(customError(err));
	}
};

const refreshToken = async (req, res) => {};

module.exports = {
	signIn,
	signUp,
	refreshToken,
};
