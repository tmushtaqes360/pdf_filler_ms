# 📄 PDF Form Microservice

A lightweight Node.js microservice that fills the **159 Form** PDF with applicant data. Built as a free, self-hosted replacement for the **PDF.co** paid API — just change the URL in your n8n workflow and nothing else.

---

## 🧠 How It Works

```
n8n sends JSON  →  API downloads PDF template  →  Fills all fields  →  Returns filled PDF
```

The API accepts the **exact same JSON body** that was previously sent to PDF.co — zero changes needed in your n8n workflow except the URL.

---

## 🗂 Project Structure

```
pdf-microservice/
  src/
    index.js        ← Server entry point
    routes.js       ← API endpoints
    pdfFiller.js    ← Core PDF filling logic
    fieldMap.js     ← All 300+ PDF field name mappings
  .env.example      ← Environment variable template
  Dockerfile        ← For Railway/Docker deployment
  package.json      ← Dependencies
  test-request.json ← Sample request for testing
  README.md
```

---

## 🚀 API Endpoints

### `GET /health`
Check if the service is running.

**Response:**
```json
{
  "status": "ok",
  "service": "pdf-form-microservice",
  "version": "1.0.0",
  "timestamp": "2026-02-27T10:00:00.000Z"
}
```

---

### `POST /v1/pdf/edit/add`
Fills the 159 Form PDF and returns it as a downloadable file.

This endpoint accepts the **exact same body** that was sent to PDF.co:

```json
{
  "name": "159 Form John Doe.pdf",
  "url": "https://drive.google.com/uc?id=YOUR_FILE_ID",
  "fields": [
    { "fieldName": "LAST NAMEAPPLICANT", "text": "Doe" },
    { "fieldName": "FIRST NAMEAPPLICANT", "text": "John" },
    { "fieldName": "Check Box1", "text": "False" }
  ]
}
```

**Response:** PDF file download (`application/pdf`)

---

### `GET /fields` *(debug only)*
Lists all field names found in the PDF template.
Enable by setting `DEBUG_FIELDS=true` in `.env`.

---

## ⚙️ Environment Variables

Create a `.env` file by copying `.env.example`:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Server port (default: 3000) |
| `TEMPLATE_URL` | No | Fallback PDF template URL if not sent in request body |
| `DEBUG_FIELDS` | No | Set `true` to enable the `/fields` debug endpoint |

---

## 🖥️ Run Locally

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Start in development mode (auto-restart on changes)
npm run dev

# Start in production mode
npm start
```

Server runs at `http://localhost:3000`

---

## 🧪 Testing

**Health check:**
```bash
# Windows PowerShell
Invoke-RestMethod -Uri "http://localhost:3000/health"
```

**Fill a form:**
```powershell
$body = Get-Content -Raw test-request.json
Invoke-RestMethod -Uri "http://localhost:3000/v1/pdf/edit/add" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body `
  -OutFile "filled-form.pdf"
```

---

## 🔗 n8n Integration

In your n8n HTTP Request node, change **only the URL**:

| | Value |
|---|---|
| **Old (PDF.co)** | `https://api.pdf.co/v1/pdf/edit/add` |
| **New (your API)** | `https://your-service-url/v1/pdf/edit/add` |

Everything else — the JSON body, headers, field mappings — stays exactly the same.

---

## 🐳 Docker

```bash
# Build image
docker build -t pdf-microservice .

# Run container
docker run -p 3000:3000 pdf-microservice
```

---

## 🚂 Deploy to Railway

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) → **Login with GitHub**
3. Click **New Project** → **Deploy from GitHub repo**
4. Select this repository
5. Go to **Variables** tab → add `TEMPLATE_URL` if needed
6. Go to **Settings** → **Generate Domain**
7. Copy the URL and update it in n8n

---

## 📦 Tech Stack

| Package | Purpose |
|---|---|
| `express` | HTTP server |
| `pdf-lib` | PDF form filling |
| `node-fetch` | Download PDF template |
| `cors` | Cross-origin requests |
| `dotenv` | Environment variables |

---

## 🔒 Security Notes

- Never commit your `.env` file — it is listed in `.gitignore`
- The PDF template is downloaded fresh on every request — nothing is stored on disk
- Add API key authentication before exposing this service publicly
