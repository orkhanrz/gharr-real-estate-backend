const messages = require("../constants/messages");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
  name: {
    type: String,
    required: [true, messages.facility.nameRequired]
  },
  icon: {
    type: String,
    required: [true, messages.facility.iconRequired]
  }
});

module.exports.Facility = mongoose.model("Facility", FacilitySchema);
