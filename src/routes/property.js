const { Router } = require("express");
const auth = require("../middlewares/auth");
const {
  getProperties,
  createProperty,
  deleteProperty,
  getSingleProperty
} = require("../controllers/property");

const router = Router();

router.get("/:id", auth, getSingleProperty);
router.get("/", auth, getProperties);
router.post("/", auth, createProperty);
router.delete("/:id", auth, deleteProperty);

module.exports = router;
