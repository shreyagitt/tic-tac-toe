const mongoose = require("mongoose");
const ratingSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Rating", ratingSchema);
