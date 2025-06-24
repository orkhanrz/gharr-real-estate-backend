const { Router } = require("express");
const auth = require("../middlewares/auth");
const {
  getUser,
  getFavorites,
  addToFavorites
} = require("../controllers/user");

const router = Router();

router.get("/:id/favorites", auth, getFavorites);
router.get("/:id", auth, getUser);
router.post("/:id/favorites/:propertyId", auth, addToFavorites);

module.exports = router;
