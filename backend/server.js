const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const ratingRoutes = require("./routes/ratingRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/tictactoe")
.then(() => console.log("MongoDB Connected"));

app.use("/api/auth", authRoutes);
app.use("/api/rating", ratingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
