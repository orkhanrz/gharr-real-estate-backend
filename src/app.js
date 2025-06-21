require("dotenv/config");
const cors = require("cors");
const keys = require("./configs/keys");
const path = require("path");
const authRoute = require("./routes/auth");
const facilityRoute = require("./routes/facility");
const { connectToDb } = require("./db/connection");
const { errorHandler } = require("./controllers/error");

const ENV = process.env.ENV;
const PROTOCOL = keys[ENV].protocol;
const HOSTNAME = keys[ENV].hostname;
const PORT = keys[ENV].port;

const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/auth", authRoute);
app.use("/facilities", facilityRoute);

app.use(errorHandler);

app.listen(PORT, HOSTNAME, () => {
  connectToDb();

  console.log(`App is running on: ${PROTOCOL}://${HOSTNAME}:${PORT}`);
});
