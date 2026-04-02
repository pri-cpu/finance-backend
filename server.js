// server.js
require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/db");

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});