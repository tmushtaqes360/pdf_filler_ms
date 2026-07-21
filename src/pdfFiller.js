/**
 * pdfFiller.js
 * Downloads PDF template from URL (no local file needed)
 * and fills all form fields from the fields array.
 */

const { PDFDocument, StandardFonts } = require("pdf-lib");
const fetch = require("node-fetch");
const {
  APPLICANT_FIELDS,
  HOUSEHOLD_MEMBER_FIELDS_P1,
  HOUSEHOLD_MEMBER_FIELDS_P2,
  ADDRESS_ROW_FIELDS,
} = require("./fieldMap");

// ── Download template fresh every time — no disk storage ─────────────────────
async function getTemplate(templateUrl) {
  const url = templateUrl || process.env.TEMPLATE_URL;
  if (!url) {
    throw new Error("No template URL provided. Send 'url' in request body or set TEMPLATE_URL in .env");
  }
  console.log("⬇️  Downloading PDF template...");
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download template: ${response.statusText}`);
  return await response.buffer();
}

// ── Safe field setters ────────────────────────────────────────────────────────
function safeSetText(form, fieldName, value, font, fontSize = 9) {
  try {
    const textField = form.getTextField(fieldName);
    textField.setText(value || "");
    textField.updateAppearances(font); // ensure fixed font
    textField.setFontSize(fontSize);   // fix font size
  } catch (e) {
    if (process.env.DEBUG_FIELDS === "true") {
      console.warn(`⚠️  Text field not found: "${fieldName}"`);
    }
  }
}

function safeSetCheckbox(form, fieldName, value) {
  try {
    const field = form.getCheckBox(fieldName);
    const shouldCheck = value === "True" || value === true || value === "true";
    shouldCheck ? field.check() : field.uncheck();
  } catch (e) {
    if (process.env.DEBUG_FIELDS === "true") {
      console.warn(`⚠️  Checkbox not found: "${fieldName}"`);
    }
  }
}

// ── Mode 1: Fill from pdf.co fields array ─────────────────────────────────────
// Called when n8n hits /v1/pdf/edit/add
// fields = [{ fieldName: "LAST NAMEAPPLICANT", text: "Doe" }, ...]
async function fillFormFromFields(fields, templateUrl) {
  const templateBytes = await getTemplate(templateUrl);
  const pdfDoc = await PDFDocument.load(templateBytes);
  const form = pdfDoc.getForm();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  if (process.env.DEBUG_FIELDS === "true") {
    console.log("📋 All PDF fields:");
    form.getFields().forEach(f => console.log(` - ${f.getName()} [${f.constructor.name}]`));
  }

  fields.forEach(({ fieldName, text }) => {
  const isCheckbox = fieldName.toLowerCase().startsWith("check box") ||
                     fieldName.toLowerCase().startsWith("checkbox");
  if (isCheckbox) {
    safeSetCheckbox(form, fieldName, text);
  } else {
    safeSetText(form, fieldName, text, font, 9); // 12 = fixed font size
  }
});

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

// ── Mode 2: Fill from structured JSON ────────────────────────────────────────
function splitDate(dob) {
  const parts = (dob || "").split("/");
  return { month: parts[0] || "", day: parts[1] || "", year: parts[2] || "" };
}

function getToday() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${mm}/${dd}/${d.getFullYear()}`;
}

async function fillForm(body, templateUrl) {
  const content        = body?.message?.content || body;
  const applicant      = content.applicant         || {};
  const householdMembers = content.household_members || [];
  const householdCount = content.household_family_members ?? householdMembers.length;
  const addresses      = content.addresses         || [];

  const templateBytes = await getTemplate(templateUrl);
  const pdfDoc = await PDFDocument.load(templateBytes);
  const form = pdfDoc.getForm();

  const today    = getToday();
  const fullName = `${applicant.first_name || ""} ${applicant.last_name || ""}`.trim();
  const addr     = applicant.current_address || {};

  safeSetText(form, APPLICANT_FIELDS.dateSubmitted, today);
  safeSetCheckbox(form, APPLICANT_FIELDS.checkBoxNoHousehold, householdCount === 0 ? "True" : "False");
  safeSetCheckbox(form, APPLICANT_FIELDS.checkBox2, "False");
  safeSetText(form, APPLICANT_FIELDS.lastName,  applicant.last_name);
  safeSetText(form, APPLICANT_FIELDS.firstName, applicant.first_name);
  safeSetText(form, APPLICANT_FIELDS.sex,       applicant.sex);
  safeSetText(form, APPLICANT_FIELDS.dob,       applicant.dob);
  safeSetText(form, APPLICANT_FIELDS.dob2,      applicant.dob);
  safeSetText(form, APPLICANT_FIELDS.dob3,      applicant.dob);
  safeSetText(form, APPLICANT_FIELDS.street,    addr.street);
  safeSetText(form, APPLICANT_FIELDS.apt,       addr.apt || "");
  safeSetText(form, APPLICANT_FIELDS.city,      addr.city);
  safeSetText(form, APPLICANT_FIELDS.state,     addr.state);
  safeSetText(form, APPLICANT_FIELDS.zip,       addr.zip);

  const curFrom = splitDate(addr.start_date);
  const curTo   = splitDate(addr.end_date);
  safeSetText(form, APPLICANT_FIELDS.fromMonth, curFrom.month);
  safeSetText(form, APPLICANT_FIELDS.fromYear,  curFrom.year);
  safeSetText(form, APPLICANT_FIELDS.toMonth,   curTo.month);
  safeSetText(form, APPLICANT_FIELDS.toYear,    curTo.year);

  const prev1 = addresses[0] || {};
  safeSetText(form, APPLICANT_FIELDS.prevStreet1, prev1.street);
  safeSetText(form, APPLICANT_FIELDS.prevCity1,   prev1.city);
  safeSetText(form, APPLICANT_FIELDS.prevState1,  prev1.state);
  safeSetText(form, APPLICANT_FIELDS.prevZip1,    prev1.zip);

  const prev2 = addresses[1] || {};
  safeSetText(form, APPLICANT_FIELDS.prevStreet2, prev2.street);
  safeSetText(form, APPLICANT_FIELDS.prevCity2,   prev2.city);
  safeSetText(form, APPLICANT_FIELDS.prevState2,  prev2.state);
  safeSetText(form, APPLICANT_FIELDS.prevZip2,    prev2.zip);

  addresses.slice(2).forEach((address, i) => {
    const row = ADDRESS_ROW_FIELDS[i];
    if (!row) return;
    const from = splitDate(address.start_date);
    const to   = splitDate(address.end_date);
    safeSetText(form, row.street,    address.street);
    safeSetText(form, row.city,      address.city);
    safeSetText(form, row.state,     address.state);
    safeSetText(form, row.zip,       address.zip);
    safeSetText(form, row.fromMonth, from.month);
    safeSetText(form, row.fromYear,  from.year);
    safeSetText(form, row.toMonth,   to.month);
    safeSetText(form, row.toYear,    to.year);
  });

  householdMembers.slice(0, 5).forEach((member, i) => {
    const row = HOUSEHOLD_MEMBER_FIELDS_P1[i];
    if (!row) return;
    const dob = splitDate(member.dob);
    safeSetText(form, row.relationship, member.relationship);
    safeSetText(form, row.lastName,     member.last_name);
    safeSetText(form, row.firstName,    member.first_name);
    safeSetText(form, row.sex,          member.sex);
    safeSetText(form, row.dobMonth,     dob.month);
    safeSetText(form, row.dobDay,       dob.day);
    safeSetText(form, row.dobYear,      dob.year);
  });

  householdMembers.slice(5).forEach((member, i) => {
    const row = HOUSEHOLD_MEMBER_FIELDS_P2[i];
    if (!row) return;
    const dob = splitDate(member.dob);
    safeSetText(form, row.relationship, member.relationship);
    safeSetText(form, row.lastName,     member.last_name);
    safeSetText(form, row.firstName,    member.first_name);
    safeSetText(form, row.sex,          member.sex);
    safeSetText(form, row.dobMonth,     dob.month);
    safeSetText(form, row.dobDay,       dob.day);
    safeSetText(form, row.dobYear,      dob.year);
  });

  safeSetText(form, APPLICANT_FIELDS.signature1,    fullName);
  safeSetText(form, APPLICANT_FIELDS.signatureDate1, today);
  safeSetText(form, APPLICANT_FIELDS.signature2,    fullName);
  safeSetText(form, APPLICANT_FIELDS.signatureDate2, today);
  safeSetText(form, APPLICANT_FIELDS.signatureDate3, today);
  safeSetText(form, APPLICANT_FIELDS.applicantName,  fullName);
  safeSetText(form, APPLICANT_FIELDS.applicantName2, fullName);

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

module.exports = { fillFormFromFields, fillForm };
