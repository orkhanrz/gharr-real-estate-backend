require("dotenv/config");
const cors = require("cors");
const express = require("express");
const cookieSession = require("cookie-session");
const keys = require("./configs/keys");
const path = require("path");
const authRoute = require("./routes/auth");
const facilityRoute = require("./routes/facility");
const propertyRoute = require("./routes/property");
const userRoute = require("./routes/user");
const { connectToDb } = require("./db/connection");
const { errorHandler } = require("./controllers/error");
const { notFound } = require("./controllers/not-found");

const ENV = process.env.ENV;
const PROTOCOL = keys[ENV].protocol;
const HOSTNAME = keys[ENV].hostname;
const PORT = keys[ENV].port;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "refreshToken",
    secret: "cookieValidationKey",
    maxAge: +process.env.REFRESH_TOKEN_EXPIRATION_TIME * 1000
  })
);
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/auth", authRoute);
app.use("/facilities", facilityRoute);
app.use("/properties", propertyRoute);
app.use("/user", userRoute);

// Not found route
app.use(notFound);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  connectToDb();

  console.log(`App is running on: ${PROTOCOL}://${HOSTNAME}:${PORT}`);
});
