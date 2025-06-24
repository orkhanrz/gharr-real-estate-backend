module.exports.propertiesQueryBuilder = (query) => {
  const queryObj = {};

  for (const [key, value] of Object.entries(query)) {
    switch (key) {
      case "minPrice":
        queryObj.price = { ...queryObj.price, $gte: Number(value) };
        break;
      case "maxPrice":
        queryObj.price = { ...queryObj.price, $lte: Number(value) };
        break;
      case "bedrooms":
      case "bathrooms":
      case "area":
      case "safetyRank":
      case "rating":
        queryObj[key] = Number(value);
        break;
      case "category":
      case "city":
      case "country":
        // Nested fields inside location
        if (key === "city" || key === "country") {
          queryObj[`location.${key}`] = value;
        } else {
          queryObj[key] = value;
        }
        break;
      default:
        queryObj[key] = value; // catch-all for other flat fields
    }
  }

  return queryObj;
};
