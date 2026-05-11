const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cropRoutes = require("./routes/crop");
const diseaseRoutes = require("./routes/disease");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/agri-ai");

app.use("/api", cropRoutes);
app.use("/api", diseaseRoutes);

app.listen(5000, () => console.log("Server running"));