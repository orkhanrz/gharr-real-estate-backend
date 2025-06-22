module.exports.customError = (err) => {
	if (err.name === "ValidationError") {
		const errors = Object.values(err.errors).map(({ path, message }) => ({
			path,
			message,
		}));

		return {
			type: "Validasiya xətası",
			message: "Validasiya xətası baş verdi.",
			status: 400,
			errors,
		};
	}

	if (err.name === "CastError") {
		return {
			type: "Yanlış dəyər",
			message: `Yanlış ${err.path}: '${err.value}' dəyəri.`,
			status: 400,
			errors: [
				{
					path: err.path,
					message: "Uyğun olmayan dəyər verildi.",
				},
			],
		};
	}

	if (err.name === "JsonWebTokenError") {
		return {
			type: "Imza xətası",
			message: "Düzgün imza göndərin.",
			status: 401,
		};
	}

	if (err.name === "TokenExpiredError") {
		return {
			type: "Autentikasiya xətası",
			message: "Bu əməliyyatı aparmaq üçün sistemə daxil olmalısız.",
			status: 401,
		};
	}

	if (err.code === 11000) {
		const duplicatedField = Object.keys(err.keyValue)[0];

		return {
			type: "Duplikat dəyər",
			message: `${duplicatedField} artıq mövcuddur.`,
			status: 400,
			errors: [
				{
					path: duplicatedField,
					message: "Bu dəyər artıq istifadə olunub.",
				},
			],
		};
	}

	return err;
};
