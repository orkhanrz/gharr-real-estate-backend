const { Router } = require("express");
const { signIn, signUp, refreshToken } = require("../controllers/auth");

const router = Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post('/refresh-token', refreshToken)

module.exports = router;
