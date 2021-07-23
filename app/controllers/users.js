const { httpError } = require("../helpers/handleError");

const getItems = (req, res) => {
	res.send({ list: [1,2,3] });
};

const getItem = (req, res) => {
	res.send({ running: true});
};

const createItem = (req, res) => {
	try {
		res.send({ requestBody: req.body });
	} catch (e) {
		httpError(res, e);
	};
};

const updateItem = (req, res) => {
	try {
		res.send({ requestBody: req.body });
	} catch (e) {
		httpError(res, e);
	};
};

const deleteItem = (req, res) => {
	try {
		res.send({ requestBody: req.body });
	} catch (e) {
		httpError(res, e);
	};
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
