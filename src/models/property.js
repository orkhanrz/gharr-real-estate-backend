const mongoose = require("mongoose");
const messages = require("../constants/messages");
const { Schema } = mongoose;

const PropertySchema = new Schema({
  title: {
    type: String,
    required: [true, "Mecburid"]
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
      image: { type: String },
      title: { type: String }
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
    latitude: { type: Number },
    longitude: { type: Number },
    address: { type: String }
  },
  agent: {
    fullName: {
      type: String
    },
    image: {
      type: String
    },
    email: {
      type: String
    },
    phoneNumber: {
      type: String
    }
  },
  reviews: [
    {
      user: {
        fullName: {
          type: String
        },
        image: {
          type: String
        },
        email: {
          type: String
        },
        phoneNumber: {
          type: String
        }
      },
      text: {
        type: String
      }
    }
  ]
});

module.exports.Property = mongoose.model("Property", PropertySchema);
