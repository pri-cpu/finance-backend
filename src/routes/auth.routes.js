// src/routes/auth.routes.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashed, role });

    res.json({ message: "User registered" });
  } catch {
    res.status(400).json({ message: "Error registering user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({ token });
  } catch {
    res.status(500).json({ message: "Login error" });
  }
});

module.exports = router;