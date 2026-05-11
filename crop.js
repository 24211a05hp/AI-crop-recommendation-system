// crop.js
const express = require("express");
const router = express.Router();
const { recommendCrop } = require("../controllers/cropController");

router.post("/recommend-crop", recommendCrop);
module.exports = router;