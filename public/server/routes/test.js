const express = require("express");
const router = express.Router();
const test = require("../controllers/test");

router.get("/", test.getData);

module.exports = router;
