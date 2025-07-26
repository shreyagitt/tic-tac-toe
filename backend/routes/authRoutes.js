const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username });
  if (!user) user = await User.create({ username, password });
  res.json({ message: "Login successful", user });
});

module.exports = router;
