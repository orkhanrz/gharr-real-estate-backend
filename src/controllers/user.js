const { User } = require("../models/user");
const { customError } = require("../utils/error");

module.exports.getUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "İstifadəçi tapılmadı." });
    }

    res.status(200).json(user);
  } catch (err) {
    next(customError(err));
  }
};

module.exports.addToFavorites = async (req, res, next) => {
  const { id, propertyId } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "İstifadəçi tapılmadı." });
    }

    const propertyIndex = user.favorites.findIndex(
      (property) => property._id == propertyId
    );

    if (propertyIndex != -1) {
      user.favorites.push(propertyId);
    } else {
      user.favorites.splice(propertyIndex, 1);
    }

    await user.save();

    res.status(201).json({ message: "Ev yaddasda saxlanildi." });
  } catch (err) {
    next(customError(err));
  }
};

module.exports.getFavorites = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("favorites");

    if (!user) {
      return res.status(404).json({ message: "İstifadəçi tapılmadı." });
    }

    const favorites = user.favorites;

    console.log(favorites);

    res.status(200).json(favorites);
  } catch (err) {
    next(customError(err));
  }
};
