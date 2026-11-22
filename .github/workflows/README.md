# My Medicine Check — graduation thesis website

A bilingual (English/Arabic), static GitHub Pages implementation of the Gluten-Related Excipient Information Tool.

## What is included
- Searchable database seeded with all 111 entries extracted from the Pharmacist Quick-Reference and Counseling Guide v1.0.
- Search by brand, generic/active ingredient, strength/form, or recorded excipient wording.
- Filters for A/Green, C/Amber, B/Red, and D/Blue.
- Record detail view, category explanations, FAQs, research scope, and patient-facing warnings.
- Google Forms link/embed configuration for surveys and question submissions.
- Moderated community feed: only rows marked `Approved` in a published Google Sheet CSV are displayed.
- Optional published Google Sheets CSV source for live medicine-data updates.
- English/Arabic language toggle and responsive layout.
- No AI functionality is included, as requested.

## Deploy to GitHub Pages
1. Create a public GitHub repository, for example `my-medicine-check`.
2. Upload the contents of this folder to the repository root (not the containing folder).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site. The URL will look like `https://YOUR-USERNAME.github.io/my-medicine-check/`.

## Configure Google Forms
- Create the survey in Google Forms. Copy its responder URL into `surveyUrl` in `config.js`.
- For an inline survey, choose **Send → Embed HTML** and copy only the iframe `src` URL into `surveyEmbedUrl`.
- Create a separate Google Form for questions/contributions and put its responder URL in `questionFormUrl`.
- Avoid collecting names, contact details, diagnoses, medicine regimens, or other identifying/health information unless the approved research protocol and consent process explicitly require them.

## Connect Google Sheets for medicine updates
1. Create a Google Sheet with a tab named `Medicines`.
2. Use the exact headers: `id, brand, generic, strength_form, excipient, category, color`.
3. Import `data/medicines-template.csv` as a starting point, then paste/edit the 111 research rows from `data/medicines.json` or the supplied original dataset.
4. Choose **File → Share → Publish to web**, select the Medicines tab and CSV format, and publish.
5. Copy the published CSV URL into `medicinesCsvUrl` in `config.js`.
6. The website will fetch the published CSV when loaded. If no URL is configured, it uses the local JSON snapshot.
7. Restrict editing rights to the research administrator(s). Verify every change against an appropriate package leaflet/manufacturer source before publishing, and keep a dated backup/version record.

The published CSV is publicly readable. Do not put private or unpublished research data in this sheet.

## Moderated community workflow
1. Use the separate Google Form for general questions or community contributions.
2. A researcher reviews submissions offline/in the restricted response sheet.
3. A moderator writes approved, de-identified contributions into a separate `Community` Google Sheet.
4. Publish that tab as CSV and configure `communityCsvUrl`.
5. The page filters to `status=Approved`; pending/rejected rows are not displayed.
6. Do not publish personal health information or identifying details. The static site does not provide login, private messaging, or real-time comments.

## Important source and clinical limitations
- The classification describes what the package/leaflet documents. It is not a laboratory result and does not establish whether a product is safe or unsafe.
- A/Green and D/Blue do not prove a product is gluten-free; B/Red does not quantify gluten; C/Amber reflects incomplete/ambiguous documentation, not proof of gluten.
- Do not advise users to stop essential medicine. Direct medicine-specific decisions to a pharmacist/prescriber.
- Dataset version 1.0: 111 oral medicines, supplements and herbal products collected from community pharmacies in Tripoli, Libya in August–September 2026.
- Source guide recommends rechecking entries every 6–12 months and whenever a new presentation is dispensed.
- The website is an educational/research prototype, not a validated clinical decision-support system.

## Spreadsheet update schema
Medicine sheet columns:
`id | brand | generic | strength_form | excipient | category | color`

Valid category values: `A`, `B`, `C`, `D`.
Community sheet columns:
`status | topic | question | answer | date`
Only rows with `status` exactly `Approved` (case-insensitive) appear publicly.

## Local preview
Open `index.html` directly for a basic preview. For a local web server, run:
`python -m http.server 8000`
Then visit `http://localhost:8000`.

## Files
- `index.html` — site structure
- `styles.css` — responsive design
- `app.js` — search, filtering, language toggle, FAQ, CSV integration
- `config.js` — public integration URLs
- `data/medicines.json` — initial 111-record dataset
- `data/medicines-template.csv` — spreadsheet headers
- `data/community-template.csv` — approved discussion feed headers
