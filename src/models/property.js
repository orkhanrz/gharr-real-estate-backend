const { property } = require("../constants/messages");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: [true, "Latitude is required"]
  },
  longitude: {
    type: Number,
    required: [true, "Longitude is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  city: {
    type: String,
    required: [true, "City is required"]
  },
  country: {
    type: String,
    required: [true, "Country is required"]
  }
});

const PropertySchema = new Schema({
  title: {
    type: String,
    required: [true, property.titleRequired]
  },
  price: {
    type: Number,
    required: [true, property.priceRequired]
  },
  imageUrl: {
    type: String,
    required: [true, property.imageUrlRequired]
  },
  category: {
    type: String,
    required: [true, property.categoryRequired]
  },
  area: {
    type: Number,
    required: [true, property.areaRequired]
  },
  bedrooms: {
    type: Number,
    required: [true, property.bedroomsRequired]
  },
  bathrooms: {
    type: Number,
    required: [true, property.bathroomsRequired]
  },
  safetyRank: {
    type: Number,
    required: [true, property.safetyRankRequired]
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
    required: [true, property.location.required],
    type: LocationSchema
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, property.agent],
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
