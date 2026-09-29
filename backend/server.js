const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    service: "service-health-backend",
    status: "running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "backend",
    environment: process.env.ENVIRONMENT || "local"
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    application: "Service Health Dashboard",
    version: process.env.APP_VERSION || "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = app;