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
router.delete("/:id", deleteProperty);
router.get("/", auth, getProperties);
router.post("/", createProperty);

module.exports = router;
