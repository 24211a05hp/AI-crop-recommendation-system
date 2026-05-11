// disease.js
const express = require("express");
const router = express.Router();
const { detectDisease } = require("../controllers/diseaseController");

router.post("/detect-disease", detectDisease);
module.exports = router;