require("dotenv/config");
const authRoute = require("./routes/auth");
const { connectToDb } = require("./db/connection");
const keys = require("./configs/keys");

const ENV = process.env.ENV;
const PROTOCOL = keys[ENV];
const HOSTNAME = keys[ENV];
const PORT = keys[ENV];

const express = require("express");

const app = express();

app.use(express.json());

app.use("/auth", authRoute);

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, HOSTNAME, () => {
  connectToDb();

  console.log(`App is running on: ${PROTOCOL}://${HOSTNAME}:${PORT}`);
});
