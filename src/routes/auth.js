const { Router } = require("express");
const { signIn, signUp, refreshToken } = require("../controllers/auth");
const { upload } = require("../utils/file-upload");

const router = Router();

router.post("/signin", signIn);
router.post("/signup", upload.single("image"), signUp);
router.post("/refresh-token", refreshToken);

module.exports = router;
