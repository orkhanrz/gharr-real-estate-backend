const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { customError } = require("../utils/error");
const {
  generateToken,
  comparePasswords,
  hashPassword,
  verifyToken,
  decodeToken
} = require("../services/user");
const messages = require("../constants/messages");

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

    const tokenPayload = {
      _id: user._id,
      username: user.username,
      email: user.email,
      image: user.image
    };

    const accessToken = generateToken(tokenPayload);
    req.session.refreshToken = generateToken(tokenPayload, true);

    return res.status(200).json({ token: accessToken, user: tokenPayload });
  } catch (err) {
    next(customError(err));
  }
};

const signUp = async (req, res, next) => {
  const { username, password, email, fullName, phoneNumber, country } =
    req.body;

  const hashedPassword = await hashPassword(password, 10);

  try {
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      fullName,
      phoneNumber,
      country
    });

    const savedUser = await newUser.save();

    const tokenPayload = {
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      image: savedUser.image
    };

    const accessToken = generateToken(tokenPayload);
    req.session.refreshToken = generateToken(tokenPayload, true);

    res.status(201).json({ token: accessToken, user: tokenPayload });
  } catch (err) {
    next(customError(err));
  }
};

const refreshToken = async (req, res, next) => {
  const refreshToken = req.session.refreshToken;

  if (!refreshToken) {
    throw new Error(messages.token.invalid);
  }

  try {
    const isValid = verifyToken(refreshToken, true);

    if (!isValid) {
      req.session.refreshToken = null;
      throw new Error(messages.token.invalid);
    }

    const decodedToken = decodeToken(refreshToken);

    const tokenPayload = {
      _id: decodedToken._id,
      username: decodedToken.username,
      email: decodedToken.email,
      image: decodedToken.image
    };

    const newToken = generateToken(tokenPayload);

    res.status(200).json({ token: newToken, user: tokenPayload });
  } catch (err) {
    next(customError(err));
  }
};

module.exports = {
  signIn,
  signUp,
  refreshToken
};
