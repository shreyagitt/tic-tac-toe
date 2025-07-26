const express = require("express");
const Rating = require("../models/Rating");
const router = express.Router();

router.post("/", async (req, res) => {
  const { user, rating } = req.body;
  const newRating = await Rating.create({ user, rating });
  res.json(newRating);
});

router.get("/", async (req, res) => {
  const ratings = await Rating.find();
  res.json(ratings);
});

module.exports = router;
