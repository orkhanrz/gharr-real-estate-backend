const mongoose = require("mongoose");
const messages = require("../constants/messages");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  user: {
    required: [true, messages.review.userRequired],
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  text: {
    required: [true, messages.review.textRequired],
    type: String
  }
});

module.exports.Review = mongoose.model("Review", ReviewSchema);
