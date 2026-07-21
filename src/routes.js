/**
 * routes.js
 * Accepts the EXACT same JSON body that n8n sends to pdf.co:
 * {
 *   "name": "filename.pdf",
 *   "url": "template url",
 *   "fields": [
 *     { "fieldName": "FIELD NAME", "text": "value" },
 *     ...
 *   ]
 * }
 */

const express = require("express");
const router = express.Router();
const { fillFormFromFields } = require("./pdfFiller");

// ── Health check ──────────────────────────────────────────────────────────────
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "pdf-form-microservice",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// ── Main endpoint — exact pdf.co format ───────────────────────────────────────
// Accepts: { name, url, fields: [{ fieldName, text }] }
router.post("/v1/pdf/edit/add", async (req, res) => {
  try {
    const { name, url, fields } = req.body;

    if (!fields || !Array.isArray(fields)) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body. Expected { name, url, fields: [{ fieldName, text }] }",
      });
    }

    console.log(`📝 Filling form: ${name || "unnamed"} with ${fields.length} fields`);

    // Fill the PDF using the fields array directly
    // Use URL from request body first, fallback to .env
    const templateUrl = url || process.env.TEMPLATE_URL;
    const pdfBuffer = await fillFormFromFields(fields, templateUrl);

    // Use the name from the request as filename, fallback to generic name
    const filename = (name || "filled-form.pdf").replace(/[^\w\s.\-]/g, "");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Length", pdfBuffer.length);
    res.send(pdfBuffer);

    console.log(`✅ Done: ${filename}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fill PDF form",
      error: error.message,
    });
  }
});

// ── Debug: list all PDF field names ──────────────────────────────────────────
router.get("/fields", async (req, res) => {
  if (process.env.DEBUG_FIELDS !== "true") {
    return res.status(403).json({ message: "Set DEBUG_FIELDS=true in .env to enable this." });
  }
  try {
    const { PDFDocument } = require("pdf-lib");
    const fs = require("fs");
    const path = require("path");
    const localPath = path.join(__dirname, "../templates/159_form.pdf");
    if (!fs.existsSync(localPath)) {
      return res.status(400).json({ message: "Template not found." });
    }
    const pdfDoc = await PDFDocument.load(fs.readFileSync(localPath));
    const fields = pdfDoc.getForm().getFields().map(f => ({
      name: f.getName(),
      type: f.constructor.name,
    }));
    res.json({ count: fields.length, fields });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
