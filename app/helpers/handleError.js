const httpError = (res, err, next) => {
	res.status(500);
	res.send({ error: "Not found 500"});
};

module.exports = { httpError };
