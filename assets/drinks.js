// ─── Remy's Ritas ATX — Drink Data & Pour List Renderer ──────────────────
// To add or edit a drink, update the DRINKS array below.

const DRINKS = [
  {
    id: 'lime',
    name: 'Classic lime rita',
    scene: 'scene-lime',
    tags: ['Signature', 'Most ordered'],
    quote: '"Tart, icy, perfect. The one that started it all. Salt rim mandatory."',
    hoverTags: ['Tequila', 'Salt rim', 'Signature'],
    svg: `
      <defs>
        <linearGradient id="g1a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#6ab820" stop-opacity=".9"/>
          <stop offset="100%" stop-color="#a8e040" stop-opacity=".85"/>
        </linearGradient>
      </defs>
      <polygon points="12,22 78,22 64,128 26,128" fill="url(#g1a)"/>
      <polygon points="12,22 78,22 70,56 20,56" fill="#c8f060" opacity=".55"/>
      <ellipse cx="45" cy="22" rx="33" ry="6" fill="#d8f880" opacity=".5"/>
      <rect x="40" y="128" width="10" height="18" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="146" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
      <ellipse cx="64" cy="48" rx="13" ry="7" fill="#b0e030" opacity=".6"/>
      <line x1="45" y1="12" x2="45" y2="-6" stroke="#e8a020" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="45" cy="-6" r="7" fill="#ffe040" opacity=".95"/>
    `
  },
  {
    id: 'straw',
    name: 'Strawberry swirl',
    scene: 'scene-straw',
    tags: ['Sweet', 'Crowd fave'],
    quote: '"Fresh strawberry blended frozen. Swirl with classic lime for a two-tone pour."',
    hoverTags: ['Tequila', 'Sweet', 'Swirl-able'],
    svg: `
      <defs>
        <linearGradient id="g2a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d03060" stop-opacity=".95"/>
          <stop offset="100%" stop-color="#f080a0" stop-opacity=".88"/>
        </linearGradient>
      </defs>
      <polygon points="12,22 78,22 64,128 26,128" fill="url(#g2a)"/>
      <polygon points="12,22 78,22 70,56 20,56" fill="#f8b0c8" opacity=".55"/>
      <rect x="40" y="128" width="10" height="18" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="146" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
      <ellipse cx="30" cy="55" rx="7" ry="10" fill="#e02050" opacity=".7"/>
      <circle cx="42" cy="47" r="4" fill="#c81840" opacity=".8"/>
      <ellipse cx="45" cy="-5" rx="9" ry="6" fill="#e02050" opacity=".95"/>
    `
  },
  {
    id: 'mango',
    name: 'Mango tajín',
    scene: 'scene-mango',
    tags: ['Best seller', 'Spiced'],
    quote: '"Sweet mango with a smoky tajín rim. Pure Mexico in a glass."',
    hoverTags: ['Tequila', 'Spiced', 'Tajín rim'],
    svg: `
      <defs>
        <linearGradient id="g3a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#c07010" stop-opacity=".95"/>
          <stop offset="100%" stop-color="#f0c040" stop-opacity=".9"/>
        </linearGradient>
      </defs>
      <polygon points="12,22 78,22 64,128 26,128" fill="url(#g3a)"/>
      <polygon points="12,22 78,22 70,56 20,56" fill="#ffe090" opacity=".55"/>
      <rect x="40" y="128" width="10" height="18" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="146" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
      <ellipse cx="45" cy="22" rx="20" ry="7" fill="#c04010" opacity=".8"/>
      <text x="45" y="27" text-anchor="middle" font-size="9" font-weight="bold" fill="rgba(255,255,255,.9)">TAJÍN</text>
    `
  },
  {
    id: 'pina',
    name: 'Piña colada',
    scene: 'scene-pina',
    tags: ['Tropical', 'Rum-based'],
    quote: '"Coconut cream, pineapple, frozen bliss. Swap tequila for rum and you\'re on a beach."',
    hoverTags: ['Rum', 'Tropical', 'Coconut rim'],
    svg: `
      <defs>
        <linearGradient id="g4a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffe898" stop-opacity=".9"/>
          <stop offset="100%" stop-color="#f8d040" stop-opacity=".8"/>
        </linearGradient>
      </defs>
      <ellipse cx="45" cy="105" rx="28" ry="36" fill="url(#g4a)"/>
      <ellipse cx="45" cy="90" rx="26" ry="20" fill="#fff8d0" opacity=".65"/>
      <path d="M45,58 C40,46 30,40 34,30 C38,21 49,29 45,22 C50,15 60,22 56,32 C61,26 68,33 59,40 C65,38 67,48 57,50" fill="#2a7030" opacity=".95"/>
      <rect x="41" y="56" width="8" height="20" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="141" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
    `
  },
  {
    id: 'coco',
    name: 'Coconut lime',
    scene: 'scene-coco',
    tags: ['Creamy', 'Big event pick'],
    quote: '"Toasted coconut rim, creamy lime base. Cancún resort in every sip."',
    hoverTags: ['Tequila', 'Creamy', 'Coconut rim'],
    svg: `
      <defs>
        <linearGradient id="g5a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#40c880" stop-opacity=".9"/>
          <stop offset="100%" stop-color="#90e8c0" stop-opacity=".85"/>
        </linearGradient>
      </defs>
      <polygon points="12,22 78,22 64,128 26,128" fill="url(#g5a)"/>
      <polygon points="12,22 78,22 70,56 20,56" fill="#c0f0d8" opacity=".55"/>
      <ellipse cx="45" cy="22" rx="33" ry="6" fill="#f0ead0" opacity=".55" stroke="#d0b870" stroke-width="1"/>
      <rect x="40" y="128" width="10" height="18" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="146" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
      <circle cx="45" cy="-6" r="7" fill="#40b870" opacity=".95"/>
    `
  },
  {
    id: 'spicy',
    name: 'Spicy lime',
    scene: 'scene-spicy',
    tags: ['Hot', 'Tajín rim'],
    quote: '"Classic lime with a habanero kick and a chili-salt rim. Not for the timid."',
    hoverTags: ['Tequila', 'Habanero', 'Tajín rim'],
    svg: `
      <defs>
        <linearGradient id="g6a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#c02008" stop-opacity=".95"/>
          <stop offset="100%" stop-color="#f06030" stop-opacity=".9"/>
        </linearGradient>
      </defs>
      <polygon points="12,22 78,22 64,128 26,128" fill="url(#g6a)"/>
      <polygon points="12,22 78,22 70,56 20,56" fill="#f8a070" opacity=".5"/>
      <ellipse cx="45" cy="22" rx="33" ry="6" fill="#c04010" opacity=".7"/>
      <rect x="40" y="128" width="10" height="18" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="146" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
      <path d="M32,18 Q38,6 34,-3 Q41,4 38,14" fill="#b03010" opacity=".95"/>
      <path d="M48,20 Q54,8 52,-1 Q59,6 56,16" fill="#b03010" opacity=".95"/>
    `
  },
  {
    id: 'water',
    name: 'Watermelon wave',
    scene: 'scene-water',
    tags: ['Summer', 'Kids love it'],
    quote: '"Sweet watermelon with a hint of mint and a tajín kiss on the rim. Summer\'s MVP."',
    hoverTags: ['Tequila', 'Mint', 'Summer'],
    svg: `
      <defs>
        <linearGradient id="g7a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#2090e0" stop-opacity=".9"/>
          <stop offset="100%" stop-color="#80d8f8" stop-opacity=".85"/>
        </linearGradient>
      </defs>
      <polygon points="12,22 78,22 64,128 26,128" fill="url(#g7a)"/>
      <polygon points="12,22 78,22 70,56 20,56" fill="#b0ecf8" opacity=".5"/>
      <ellipse cx="34" cy="76" rx="8" ry="12" fill="#e82060" opacity=".65"/>
      <ellipse cx="52" cy="88" rx="6" ry="9" fill="#e82060" opacity=".5"/>
      <rect x="40" y="128" width="10" height="18" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="146" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
      <ellipse cx="45" cy="-2" rx="10" ry="6" fill="#e03070" opacity=".95"/>
    `
  },
  {
    id: 'blood',
    name: 'Blood orange sunset',
    scene: 'scene-blood',
    tags: ['Citrus', 'Upscale'],
    quote: '"Deep citrus, a little bitter, gorgeous crimson color. The showstopper at any big event."',
    hoverTags: ['Tequila', 'Citrus', 'Upscale'],
    svg: `
      <defs>
        <linearGradient id="g8a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#b02808" stop-opacity=".95"/>
          <stop offset="100%" stop-color="#e86028" stop-opacity=".9"/>
        </linearGradient>
      </defs>
      <polygon points="12,22 78,22 64,128 26,128" fill="url(#g8a)"/>
      <polygon points="12,22 78,22 70,56 20,56" fill="#f09060" opacity=".5"/>
      <circle cx="45" cy="36" r="14" fill="#b02010" opacity=".85"/>
      <circle cx="45" cy="36" r="10" fill="#d03020" opacity=".6"/>
      <rect x="40" y="128" width="10" height="18" rx="2" fill="#7a5020" opacity=".8"/>
      <ellipse cx="45" cy="146" rx="18" ry="5" fill="#5a3a10" opacity=".5"/>
      <line x1="36" y1="22" x2="30" y2="6" stroke="#b02010" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="54" y1="22" x2="60" y2="6" stroke="#b02010" stroke-width="2.5" stroke-linecap="round"/>
    `
  }
];

// Render the pour list
function renderPourList() {
  const grid = document.getElementById('pourGrid');
  if (!grid) return;

  grid.innerHTML = DRINKS.map(d => `
    <div class="pour-card">
      <div class="p-scene ${d.scene}">
        <div class="sun"></div>
        <div class="glow"></div>
        <div class="glass-wrap">
          <svg width="90" height="160" viewBox="0 0 90 160">${d.svg}</svg>
        </div>
        <div class="p-scrim"></div>
      </div>
      <div class="p-hover">
        <div class="p-hover-quote">${d.quote}</div>
        <div class="p-hover-tags">${d.hoverTags.map(t => `<span class="htag">${t}</span>`).join('')}</div>
      </div>
      <div class="p-info">
        <div class="p-name">${d.name}</div>
        <div class="p-tags">${d.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

renderPourList();
