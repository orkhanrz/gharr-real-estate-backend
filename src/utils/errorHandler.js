module.exports.customError = (err) => {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(({ path, message }) => ({
      path,
      message
    }));

    return {
      type: "validationError",
      message: "Validasiya xətası baş verdi.",
      errors
    };
  }

  if (err.name === "CastError") {
    return {
      type: "castError",
      message: `Yanlış ${err.path}: '${err.value}' dəyəri.`,
      errors: [
        {
          path: err.path,
          message: "Uyğun olmayan dəyər verildi."
        }
      ]
    };
  }

  if (err.code === 11000) {
    const duplicatedField = Object.keys(err.keyValue)[0];

    return {
      type: "duplicateKey",
      message: `${duplicatedField} artıq mövcuddur.`,
      errors: [
        {
          path: duplicatedField,
          message: "Bu dəyər artıq istifadə olunub."
        }
      ]
    };
  }

  return err;
};
