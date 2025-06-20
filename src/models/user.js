const mongoose = require("mongoose");
const messages = require("../constants/messages");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    required: [true, messages.username.required],
    unique: [true, messages.username.unique],
    type: String
  },
  password: {
    required: [true, messages.password.required],
    type: String
  },
  email: {
    required: [true, messages.email.required],
    unique: [true, messages.email.unique],
    type: String
  },
  fullName: {
    required: [true, messages.fullName.required],
    type: String
  },
  phoneNumber: {
    required: [true, messages.phoneNumber.required],
    unique: [true, messages.phoneNumber.unique],
    type: String
  },
  country: {
    required: [true, messages.country.required],
    type: String
  },
  type: {
    required: [true, messages.type.required],
    type: String,
    enum: ["user", "agent"],
    default: "user"
  },
  image: {
    type: String
  }
});

module.exports.User = mongoose.model("User", UserSchema);
