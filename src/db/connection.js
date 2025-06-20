const mongoose = require("mongoose");
const keys = require("../configs/keys");

const env = process.env.ENV;

module.exports.connectToDb = async function connectToDb() {
  try {
    await mongoose.connect(keys[env].db_uri, {
      dbName: keys[env].db_collection_name
    });

    console.log("Db connected!");
  } catch (err) {
    throw new Error(err);
  }
};
