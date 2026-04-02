// src/routes/dashboard.routes.js
const express = require("express");
const router = express.Router();
const Record = require("../models/record");

const auth = require("../middleware/auth");
const { getSummary, categoryBreakdown, monthlyTrends } = require("../services/dashboard.service");

router.get("/summary", auth, async (req, res) => {
  const records = await Record.findAll({ where: { UserId: req.user.id } });
  res.json(getSummary(records));
});

router.get("/categories", auth, async (req, res) => {
  const records = await Record.findAll({ where: { UserId: req.user.id } });
  res.json(categoryBreakdown(records));
});

router.get("/trends", auth, async (req, res) => {
  const records = await Record.findAll({ where: { UserId: req.user.id } });
  res.json(monthlyTrends(records));
});

module.exports = router;