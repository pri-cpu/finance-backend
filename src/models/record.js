// src/models/record.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user");

const Record = sequelize.define("Record", {
  amount: { type: DataTypes.FLOAT, allowNull: false },
  type: DataTypes.STRING,
  category: DataTypes.STRING,
  date: DataTypes.DATE,
  notes: DataTypes.STRING
});

User.hasMany(Record);
Record.belongsTo(User);

module.exports = Record;