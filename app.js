require("dotenv").config();

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1", require("./app/routes"));

app.use("*", (req, res) => res.send({ navigate: "/api/v1/users" }));

app.listen(PORT, () => console.log(`**** Server is running in port ${PORT} ****`));
