const express = require("express");
const router = express.Router();
const fs = require("fs");

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
	return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
	const fixFileName = removeExtension(file);
	const skip = ["index"].includes(fixFileName);

	if(!skip){
		router.use(`/${fixFileName}`, require(`./${fixFileName}`));
	};
});

router.get("*", (req, res) => {
	res.status(404);
	res.send({ error: "Not found"});
});

module.exports = router;
