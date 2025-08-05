# 📦 File-Upload-Data-Display

A full-stack TypeScript application to **upload CSV/JSON files** containing asset data and **view the uploaded data** by company with pagination and filtering.

---

## 🚀 Getting Started

### 🖥️ Frontend

```bash
cd apps/frontend
npm install
npm run dev
```

🛠️ Backend

```bash
cd apps/backend
npm install
npm run dev
```

After starting both apps, open `http://localhost:5173` in your browser.

# Features

Upload CSV or JSON files with asset data

Normalize and validate uploaded asset fields

View uploaded data by company ID

Paginated table view for assets

Display list of available companies

Error messaging and file validation

Built using React, Express, TypeScript, and Material UI

# 🌱 Future Improvements

Validate and sanitize companyId input

Add loading indicators to improve UX

Add search/filter to asset and company views

Separate CSS styling for cleaner UI management

Support .xlsx Excel file upload

End-to-end & integration testing (Cypress, Playwright, etc.)

Use data-testid attributes for testing selectors

Combine frontend and backend startup via root-level script (e.g. npm run dev with concurrently)

Enable backend pagination and filters

# 📦 Tech Stack

Layer Tools
Frontend React, TypeScript, Material UI
Backend Node.js, Express, TypeScript
File Parsing csv-parse, multer

# 🧠 Assumptions

The uploaded files may be large, so future backend-side pagination and filtering is assumed.

Company IDs are passed via query params and used to filter uploaded data.

The frontend and backend are separate apps but communicate over HTTP.
