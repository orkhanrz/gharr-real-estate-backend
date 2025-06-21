const { customError } = require("../utils/error");
const { Property } = require("../models/property");

module.exports.getProperties = async (req, res, next) => {
  try {
    const properties = await Property.find();

    return res.status(200).json(properties);
  } catch (err) {
    next(customError(err));
  }
};

module.exports.getSingleProperty = async (req, res, next) => {
  const id = req.params.id;

  try {
    const property = await Property.findOne({ id });

    return res.status(200).json(property);
  } catch (err) {
    next(customError(err));
  }
};

module.exports.createProperty = async (req, res, next) => {
  const {
    title,
    price,
    imageUrl,
    category,
    area,
    bedrooms,
    bathrooms,
    safetyRank,
    facilities,
    images,
    location,
    agent,
    reviews
  } = req.body;

  try {
    const newProperty = new Property({
      title,
      price,
      imageUrl,
      category,
      area,
      bedrooms,
      bathrooms,
      safetyRank,
      facilities,
      images,
      location,
      agent,
      reviews
    });

    await newProperty.save();

    return res.status(201).json({ message: "Əlavə edildi!" });
  } catch (err) {
    next(customError(err));
  }
};

module.exports.deleteProperty = async (req, res, next) => {
  const id = req.params.id;

  try {
    const property = await Property.findById(id);

    if (!property) {
      throw new Error("Tapılmadı!");
    }

    await property.deleteOne({ id });

    res.status(200).json({ message: "Silindi!" });
  } catch (err) {
    next(customError(err));
  }
};
