const mongoose = require("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema({
  title: {
    type: String,
    required: [true, "Mecburi"]
  },
  price: {
    type: Number
  },
  imageUrl: {
    type: String
  },
  category: {
    type: String
  },
  area: {
    type: Number
  },
  bedrooms: {
    type: Number
  },
  bathrooms: {
    type: Number
  },
  safetyRank: {
    type: Number
  },
  facilities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility"
    }
  ],
  images: [
    {
      imageUrl: {
        type: String
      }
    }
  ],
  location: {
    required: [true, "Ünvan əlavə edilməyib."],
    latitude: { type: Number },
    longitude: { type: Number },
    address: { type: String }
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Satıcı əlavə edilməyib."],
    ref: "User"
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

module.exports.Property = mongoose.model("Property", PropertySchema);
