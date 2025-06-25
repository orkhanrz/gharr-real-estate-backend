const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, path.join("src", "uploads")),
  filename: (_req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

module.exports.upload = multer({ storage });
