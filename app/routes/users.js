const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/guardAuth");

const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/users");

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", checkAuth, createItem);

router.put("/", updateItem);

router.delete("/", deleteItem);


module.exports = router;
