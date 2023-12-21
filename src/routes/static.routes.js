const express = require("express");
const { loadHome, loginIntent } = require("../controllers/staticController.js");

const router = express.Router();

router.get("/", loadHome);
router.post("/login", loginIntent);

module.exports = router;
