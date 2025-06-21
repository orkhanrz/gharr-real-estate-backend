const { Router } = require("express");
const {
  getFacilities,
  createFacility,
  deleteFacility
} = require("../controllers/facility");

const router = Router();

router.get("/", getFacilities);
router.post("/", createFacility);
router.delete("/:id", deleteFacility);

module.exports = router;
