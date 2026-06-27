// ─── Remy's Ritas ATX — Main JS ──────────────────────────────────────────
//
// SETUP: Paste your Google Apps Script web app URL below.
// See backend/google-apps-script.js for full setup instructions.
//
const APPS_SCRIPT_URL = "https://script.google.com/a/macros/remysritasatx.com/s/AKfycbzGKJh5-f49CezjNtpo-94W9-V7Y1bQXhCeXAW6wZefKs-lU6h1iTJYGici2H8BLC8H/exec";

// ── Package selector ──────────────────────────────────────────────────────
function pickPkg(el) {
  document.querySelectorAll('.pkg').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  const sel = document.getElementById('fpk');
  if (sel) sel.selectedIndex = parseInt(el.dataset.i);
}

// ── Occasion selector ─────────────────────────────────────────────────────
function pickEv(el) {
  document.querySelectorAll('.ev-btn').forEach(e => e.classList.remove('on'));
  el.classList.add('on');
}

// ── Form submission ───────────────────────────────────────────────────────
async function doSubmit() {
  const name  = document.getElementById('fn').value.trim();
  const email = document.getElementById('fe').value.trim();

  if (!name || !email) {
    alert('Name and email are needed so Remy can reach you!');
    return;
  }

  const btn      = document.getElementById('subBtn');
  const note     = document.getElementById('statusNote');
  const occasion = document.querySelector('.ev-btn.on')?.innerText?.trim() || '';

  btn.disabled      = true;
  btn.textContent   = 'Sending...';
  note.textContent  = 'Logging your request...';

  const payload = {
    occasion,
    name,
    email,
    phone:     document.getElementById('fp').value.trim(),
    eventDate: document.getElementById('fd').value,
    guests:    document.getElementById('fgu').value,
    package:   document.getElementById('fpk').value,
    promoCode: document.getElementById('fpc').value.trim(),
    notes:     document.getElementById('fnotes').value.trim(),
  };

  try {
    if (APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
      // Demo mode — simulate success until backend is configured
      await new Promise(r => setTimeout(r, 1000));
      showSuccess();
      return;
    }

    const res  = await fetch(APPS_SCRIPT_URL, { method: 'POST', body: JSON.stringify(payload) });
    const data = await res.json();
    data.success ? showSuccess() : showError();

  } catch (err) {
    showError();
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Send my quote request';
    note.textContent = '';
  }
}

function showSuccess() {
  document.getElementById('okBox').classList.add('show');
  document.getElementById('errBox').classList.remove('show');
  document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
  ['fn', 'fe', 'fp', 'fpc', 'fnotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function showError() {
  document.getElementById('errBox').classList.add('show');
  document.getElementById('okBox').classList.remove('show');
}
