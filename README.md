# Remy's Ritas ATX

Austin's resort-style frozen margarita machine rental website.

**Live site:** remysritasatx.com
**Phone:** (512) 791-0990
**Email:** bookings@remysritasatx.com

---

## Repo structure

```
remys-ritas-atx/
├── index.html              # Main website
├── assets/
│   ├── style.css           # All styles
│   ├── drinks.js           # Drink data + pour list renderer
│   └── main.js             # Form logic + Google Sheets backend
├── backend/
│   └── google-apps-script.js  # Paste into Google Apps Script (see below)
└── README.md
```

---

## Local development

No build step needed. Just open `index.html` in a browser, or run:

```bash
npx serve .
```

---

## Deploying to GitHub Pages

1. Push this repo to GitHub (see steps below)
2. Go to your repo on github.com
3. Click **Settings > Pages**
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch, **/ (root)** folder
6. Click Save — your site will be live at `https://mcuellar24.github.io/remys-ritas-atx`

To use your custom domain `remysritasatx.com`:
- Add a file called `CNAME` to this repo containing just: `remysritasatx.com`
- In your domain registrar, point your DNS to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

---

## Google Sheets backend setup

1. Create a new Google Sheet named **"Remy's Ritas ATX — Quote Requests"**
2. Add these headers in Row 1:
   `Timestamp | Occasion | Name | Email | Phone | Event Date | Guests | Package | Promo Code | Notes`
3. Click **Extensions > Apps Script**
4. Paste the contents of `backend/google-apps-script.js`
5. Update `SHEET_ID` with your sheet's ID (from the URL)
6. Click **Deploy > New deployment** (Web app, execute as Me, anyone can access)
7. Copy the web app URL
8. Paste it into `assets/main.js` where it says `YOUR_APPS_SCRIPT_URL_HERE`
9. Commit and push

---

## Adding or editing drinks

Open `assets/drinks.js` and edit the `DRINKS` array. Each drink has:
- `name` — display name
- `scene` — CSS class for the background scene color
- `tags` — small pills shown on the card
- `quote` — shown on hover
- `hoverTags` — shown on hover
- `svg` — the glass illustration

---

## Launch promo

The **FIRSTRITA** promo code gives 20% off all July bookings.
To remove the banner after July, delete the `.promo` block in `index.html`.
