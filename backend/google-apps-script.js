// ─────────────────────────────────────────────────────────────────────────────
// Remy's Ritas ATX — Google Sheets Quote Form Backend
// ─────────────────────────────────────────────────────────────────────────────
//
// SETUP INSTRUCTIONS (5 minutes):
//
// 1. Go to sheets.google.com and create a new spreadsheet.
//    Name it: "Remy's Ritas ATX — Quote Requests"
//
// 2. In the first sheet, add these headers in Row 1 (one per column):
//    Timestamp | Occasion | Name | Email | Phone | Event Date |
//    Guests | Package | Promo Code | Notes
//
// 3. Click Extensions > Apps Script in the top menu.
//
// 4. Delete any existing code and paste ALL of this file in.
//
// 5. Update the two constants below:
//    - SHEET_ID: copy from your spreadsheet URL (the long string between /d/ and /edit)
//    - NOTIFY_EMAIL: your notification email address
//
// 6. Click Save (floppy disk icon), then click Deploy > New deployment.
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    Click Deploy, authorize when prompted, and COPY the web app URL.
//
// 7. Paste that web app URL into the APPS_SCRIPT_URL constant in the
//    website code (look for the comment "PASTE YOUR APPS SCRIPT URL HERE").
//
// 8. Done! Every quote request will now:
//    - Log a new row in your Google Sheet
//    - Send an email to NOTIFY_EMAIL with all the details
//
// ─────────────────────────────────────────────────────────────────────────────

const SHEET_ID    = "YOUR_GOOGLE_SHEET_ID_HERE";   // ← replace this
const NOTIFY_EMAIL = "bookings@remysritasatx.com";  // ← already set for you

// ─────────────────────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 1. Log to Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    sheet.appendRow([
      new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }),
      data.occasion   || "",
      data.name       || "",
      data.email      || "",
      data.phone      || "",
      data.eventDate  || "",
      data.guests     || "",
      data.package    || "",
      data.promoCode  || "",
      data.notes      || "",
    ]);

    // 2. Send notification email
    const subject = `New quote request — ${data.name} (${data.occasion})`;
    const body = `
New quote request from Remy's Ritas ATX website.

─────────────────────────────
CONTACT
─────────────────────────────
Name:        ${data.name}
Email:       ${data.email}
Phone:       ${data.phone || "Not provided"}

─────────────────────────────
EVENT DETAILS
─────────────────────────────
Occasion:    ${data.occasion}
Event date:  ${data.eventDate || "Not provided"}
Guests:      ${data.guests}
Package:     ${data.package}
Promo code:  ${data.promoCode || "None"}

─────────────────────────────
NOTES
─────────────────────────────
${data.notes || "None"}

─────────────────────────────
Reply directly to ${data.email} to follow up.
Logged in Google Sheet: https://docs.google.com/spreadsheets/d/${SHEET_ID}
    `.trim();

    GmailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight CORS requests from the browser
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Remy's Ritas ATX backend is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}
