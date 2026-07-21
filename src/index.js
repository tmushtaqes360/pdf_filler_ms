/**
 * index.js
 * Entry point for the PDF Form Microservice.
 * Starts the Express server with all middleware and routes.
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────

// Allow cross-origin requests (needed for n8n or any frontend calling this API)
app.use(cors());

// Parse incoming JSON bodies (up to 10mb to handle large payloads)
app.use(express.json({ limit: "10mb" }));

// Log every incoming request
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.path}`);
  next();
});

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/", routes);

// ── 404 Handler ───────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.path}`,
    availableRoutes: [
      "GET  /health",
      "POST /fill-form",
      "GET  /fields  (requires DEBUG_FIELDS=true)",
    ],
  });
});

// ── Global Error Handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("💥 Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

// ── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log("");
  console.log("╔══════════════════════════════════════╗");
  console.log("║   PDF Form Microservice  🚀           ║");
  console.log("╚══════════════════════════════════════╝");
  console.log(`  Server running on: http://localhost:${PORT}`);
  console.log(`  Health check:      http://localhost:${PORT}/health`);
  console.log(`  Fill form:         POST http://localhost:${PORT}/fill-form`);
  console.log("");
 
  console.log("  Debug fields:", process.env.DEBUG_FIELDS === "true" ? "✅ Enabled" : "❌ Disabled");
  console.log("");
});

module.exports = app;
