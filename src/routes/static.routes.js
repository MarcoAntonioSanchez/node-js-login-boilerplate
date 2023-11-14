const express = require("express");
const { Router } = require("express");
const { loadHome } = require("../controllers/staticController.js");

const router = express.Router();

router.get("/", loadHome);

module.exports = router;
