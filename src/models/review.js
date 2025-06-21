const mongoose = require("mongoose");
const { review } = require("../constants/messages");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  user: {
    required: [true, review.user.required],
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  text: {
    required: [true, review.text.required],
    type: String
  }
});

module.exports.Review = mongoose.model("Review", ReviewSchema);
