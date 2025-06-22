module.exports.notFound = (_req, res) => {
	return res.status(404).json({ message: "Tapılmadı." });
};
