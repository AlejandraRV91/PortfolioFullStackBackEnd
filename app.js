/** @format */

const express = require("express");
const cors = require("cors");
const app = express();

// Middleware to remove "X-Powered-By" header
app.use((req, res, next) => {
	res.removeHeader("X-Powered-By");
	next();
});

app.use(cors());
app.use(express.json());

// Welcome message for root endpoint
app.get("/", (req, res) => {
	res.send("Welcome to the app");
});

// 404 Route
app.use((req, res, next) => {
	res.status(404).send("404 Page Not Found");
});

module.exports = app;
