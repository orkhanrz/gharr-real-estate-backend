module.exports.errorHandler = (err, _req, res, _next) => {
	const errObject = { message: err.message };

	if (err.type) {
		errObject.type = err.type;
	}

	if (err.errors) {
		errObject.errors = err.errors;
	}

	if (err.status) {
		errObject.status = err.status;
	}

	res.status(err.status || 500).json(errObject);
};
