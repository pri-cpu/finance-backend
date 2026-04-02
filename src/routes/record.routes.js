// src/routes/record.routes.js
const express = require("express");
const router = express.Router();
const Record = require("../models/record");

const auth = require("../middleware/auth");
const role = require("../middleware/role");
const { validateRecord } = require("../utils/validator");

// CREATE
router.post("/", auth, role("admin"), async (req, res) => {
  try {
    const error = validateRecord(req.body);
    if (error) return res.status(400).json({ message: error });

    const record = await Record.create({
      ...req.body,
      UserId: req.user.id
    });

    res.json(record);
  } catch {
    res.status(500).json({ message: "Error creating record" });
  }
});

// GET (user-based restriction 🔥)
router.get("/", auth, async (req, res) => {
  try {
    const { type, category, page = 1, limit = 10 } = req.query;

    const where = { UserId: req.user.id };
    if (type) where.type = type;
    if (category) where.category = category;

    const records = await Record.findAll({
      where,
      limit: Number(limit),
      offset: (page - 1) * limit
    });

    res.json(records);
  } catch {
    res.status(500).json({ message: "Error fetching records" });
  }
});

// UPDATE
router.patch("/:id", auth, role("admin"), async (req, res) => {
  try {
    const record = await Record.findByPk(req.params.id);
    if (!record) return res.status(404).json({ message: "Not found" });

    await record.update(req.body);
    res.json(record);
  } catch {
    res.status(500).json({ message: "Error updating" });
  }
});

// DELETE
router.delete("/:id", auth, role("admin"), async (req, res) => {
  try {
    await Record.destroy({ where: { id: req.params.id } });
    res.json({ message: "Deleted" });
  } catch {
    res.status(500).json({ message: "Error deleting" });
  }
});

module.exports = router;