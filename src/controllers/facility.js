const { customError } = require("../utils/error");
const { Facility } = require("../models/facility");

module.exports.getFacilities = async (req, res, next) => {
  try {
    const facilities = await Facility.find();

    return res.status(200).json({ data: facilities });
  } catch (err) {
    next(customError(err));
  }
};

module.exports.createFacility = async (req, res, next) => {
  const { name, icon } = req.body;

  try {
    const newFacility = new Facility({ name, icon });

    await newFacility.save();

    return res.status(201).json({ message: "Əlavə edildi!" });
  } catch (err) {
    next(customError(err));
  }
};

module.exports.deleteFacility = async (req, res, next) => {
  const id = req.params.id;

  try {
    const facility = await Facility.findById(id);

    if (!facility) {
      throw new Error("Tapılmadı!");
    }

    await facility.deleteOne();

    res.status(200).json({ message: "Silindi!" });
  } catch (err) {
    next(customError(err));
  }
};
