const { Router } = require("express");
const { User } = require("../models/user");
const { customError } = require("../utils/errorHandler");
const auth = require("../middlewares/auth");
const {
  generateToken,
  comparePasswords,
  hashPassword
} = require("../services/user");

const router = Router();

router.post("/signin", auth, async (req, res, next) => {
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

    const token = generateToken(user);

    return res.status(200).json({ token });
  } catch (err) {
    next(customError(err));
  }
});

router.post("/signup", async (req, res, next) => {
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

    const token = generateToken(savedUser);

    res.status(201).json({ token });
  } catch (err) {
    next(customError(err));
  }
});

module.exports = router;
