const mongoose = require("mongoose");
const { user } = require("../constants/messages");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    required: [true, user.username.required],
    unique: [true, user.username.unique],
    type: String
  },
  password: {
    required: [true, user.password.required],
    type: String
  },
  email: {
    required: [true, user.email.required],
    unique: [true, user.email.unique],
    type: String
  },
  fullName: {
    required: [true, user.fullName.required],
    type: String
  },
  phoneNumber: {
    required: [true, user.phoneNumber.required],
    unique: [true, user.phoneNumber.unique],
    type: String
  },
  country: {
    required: [true, user.country.required],
    type: String
  },
  type: {
    required: [true, user.type.required],
    type: String,
    enum: ["user", "agent"],
    default: "user"
  },
  image: {
    type: String,
    default: "assets/images/user.png"
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property"
    }
  ]
});

module.exports.User = mongoose.model("User", UserSchema);
