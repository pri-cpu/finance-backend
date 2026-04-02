const express = require("express");
const app = express();

app.use(express.json());

// 👇 Add this
app.get("/", (req, res) => {
  res.send("🚀 Finance Backend API is running");
});

app.use("/auth", require("./routes/auth.routes"));
app.use("/records", require("./routes/record.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

module.exports = app;