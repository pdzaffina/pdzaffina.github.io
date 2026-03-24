---
layout: page
title: Prompts
permalink: /prompts/
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

<style>
/* ── Reset & scope ──────────────────────────────── */
.pl-root *, .pl-root *::before, .pl-root *::after {
  box-sizing: border-box;
}

/* ── Root container — bleed to edges ───────────── */
.pl-root {
  margin-left:  -2rem;
  margin-right: -2rem;
  margin-top:   -1rem;
  background:   #111;
  color:        #e8e0d0;
  font-family:  'Lora', Georgia, serif;
  padding-bottom: 5rem;
}

/* ── Page header ────────────────────────────────── */
.pl-header {
  padding: 3rem 2rem 2.5rem;
  border-bottom: 1px solid #2a2a2a;
  background: linear-gradient(180deg, #161616 0%, #111 100%);
}

.pl-header-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  color: #b8914a;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.pl-header-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.8rem, 7vw, 5rem);
  letter-spacing: 0.05em;
  color: #f0e8d8;
  line-height: 1;
  margin: 0 0 0.6rem;
}

.pl-header-subtitle {
  font-family: 'Lora', serif;
  font-size: 1rem;
  font-style: italic;
  color: #7a7060;
  margin: 0 0 2rem;
}

.pl-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 3rem;
}
.pl-stat-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  color: #b8914a;
  display: block;
  line-height: 1;
}
.pl-stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #5a5040;
}

/* ── Sticky controls ────────────────────────────── */
.pl-controls {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #161616;
  border-bottom: 1px solid #2a2a2a;
  padding: 0.85rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.pl-search {
  flex: 1;
  min-width: 200px;
  background: #1c1c1c;
  border: 1px solid #333;
  color: #e8e0d0;
  padding: 0.5rem 0.9rem;
  font-family: 'Lora', serif;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.pl-search:focus {
  border-color: #b8914a;
  box-shadow: 0 0 0 2px rgba(184,145,74,0.15);
}
.pl-search::placeholder { color: #4a4030; font-style: italic; }

.pl-count {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  color: #5a5040;
  white-space: nowrap;
}

/* ── Category tabs ──────────────────────────────── */
.pl-tabs {
  background: #141414;
  border-bottom: 1px solid #222;
  padding: 0 2rem;
  display: flex;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
}
.pl-tabs::-webkit-scrollbar { display: none; }

.pl-tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: #5a5040;
  padding: 0.75rem 1.25rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: -1px;
}
.pl-tab:hover { color: #e8e0d0; }
.pl-tab.active {
  color: #b8914a;
  border-bottom-color: #b8914a;
}

/* ── Content + grid ─────────────────────────────── */
.pl-content {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.pl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* ── Card ───────────────────────────────────────── */
.pl-card {
  background: #161616;
  border: 1px solid #252525;
  padding: 1.75rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
  position: relative;
  overflow: hidden;
}
.pl-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 2px; height: 100%;
  background: #b8914a;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.25s;
}
.pl-card:hover {
  border-color: #3a3020;
  background: #1a1a1a;
  transform: translateY(-2px);
}
.pl-card:hover::after { transform: scaleY(1); }

.pl-card-cat {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #b8914a;
  margin-bottom: 0.6rem;
}

.pl-card-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  color: #f0e8d8;
  line-height: 1.2;
  margin-bottom: 0.85rem;
}

.pl-card-excerpt {
  font-family: 'Lora', serif;
  font-size: 0.88rem;
  line-height: 1.7;
  color: #7a7060;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1.25rem;
}

.pl-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  border-top: 1px solid #222;
  padding-top: 0.9rem;
  margin-top: auto;
}

.pl-card-credit {
  font-family: 'Lora', serif;
  font-size: 0.78rem;
  font-style: italic;
  color: #4a4030;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pl-card-cta {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b8914a;
  background: none;
  border: 1px solid #3a3020;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.pl-card-cta:hover {
  background: rgba(184,145,74,0.1);
  border-color: #b8914a;
  color: #d4a85a;
}

/* ── Empty state ────────────────────────────────── */
.pl-empty {
  display: none;
  padding: 5rem 2rem;
  text-align: center;
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: #4a4030;
  line-height: 2;
}

/* ── Modal overlay ──────────────────────────────── */
.pl-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.88);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s;
  backdrop-filter: blur(3px);
}
.pl-overlay.open {
  opacity: 1;
  pointer-events: all;
}

/* Fixed-height chrome — nothing scrolls on the outer shell */
.pl-modal {
  background: #161616;
  border: 1px solid #3a3020;
  border-top: 2px solid #b8914a;
  max-width: 700px;
  width: 100%;
  /* Fixed viewport height so header + scroll area + footer are all visible */
  height: min(88vh, 720px);
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0 80px rgba(0,0,0,0.9);
  transform: translateY(14px);
  transition: transform 0.32s cubic-bezier(0.32, 0.72, 0, 1);
  overflow: hidden; /* clip children, never scroll the modal itself */
}
.pl-overlay.open .pl-modal { transform: translateY(0); }

/* Sticky header inside modal */
.pl-modal-head {
  flex-shrink: 0;
  padding: 2rem 3rem 0;
  position: relative;
}

.pl-modal-close {
  position: absolute;
  top: 1.25rem; right: 1.5rem;
  background: none;
  border: 1px solid #333;
  color: #5a5040;
  width: 2rem; height: 2rem;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  font-size: 0.85rem;
  transition: border-color 0.2s, color 0.2s;
}
.pl-modal-close:hover { border-color: #b8914a; color: #e8e0d0; }

.pl-modal-cat {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  color: #b8914a;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.pl-modal-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.04em;
  color: #f0e8d8;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  padding-right: 2.5rem; /* don't underrun close button */
}

.pl-modal-rule {
  width: 48px; height: 1px;
  background: linear-gradient(90deg, #b8914a, transparent);
  margin-bottom: 0;
}

/* Scrollable content window — this is the only thing that scrolls */
.pl-modal-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem 3rem 1rem;
  /* subtle fade at the bottom edge to hint scrollability */
  mask-image: linear-gradient(180deg, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(180deg, black 85%, transparent 100%);
  scrollbar-width: thin;
  scrollbar-color: #3a3020 transparent;
}
.pl-modal-scroll::-webkit-scrollbar { width: 4px; }
.pl-modal-scroll::-webkit-scrollbar-track { background: transparent; }
.pl-modal-scroll::-webkit-scrollbar-thumb { background: #3a3020; border-radius: 2px; }

/* rendered markdown */
.pl-modal-body {
  font-family: 'Lora', serif;
  font-size: 0.97rem;
  line-height: 1.8;
  color: #c8c0b0;
}
.pl-modal-body p { margin: 0 0 0.9em; }
.pl-modal-body h1,
.pl-modal-body h2,
.pl-modal-body h3,
.pl-modal-body h4 {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.06em;
  color: #d4a85a;
  margin: 1.4em 0 0.5em;
  font-weight: 400;
}
.pl-modal-body h1 { font-size: 1.3em; }
.pl-modal-body h2 { font-size: 1.15em; }
.pl-modal-body h3 { font-size: 1.05em; }
.pl-modal-body ul,
.pl-modal-body ol { margin: 0.5em 0 0.9em 1.5em; padding: 0; }
.pl-modal-body li { margin-bottom: 0.35em; }
.pl-modal-body code {
  background: #1e1e1e;
  color: #c9a96e;
  font-size: 0.85em;
  padding: 0.15em 0.4em;
  border-radius: 2px;
  font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
}
.pl-modal-body pre {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  color: #c8c0b0;
  font-size: 0.85em;
  line-height: 1.55;
  padding: 1rem 1.25rem;
  overflow-x: auto;
  margin: 0.9em 0;
  border-radius: 2px;
}
.pl-modal-body pre code { background: none; padding: 0; color: inherit; }
.pl-modal-body blockquote {
  border-left: 2px solid #b8914a;
  color: #7a7060;
  margin: 0.9em 0;
  padding: 0 1em;
  font-style: italic;
}
.pl-modal-body hr { border: none; border-top: 1px solid #252525; margin: 1em 0; }

/* Always-visible footer with Copy button */
.pl-modal-footer {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1rem 3rem 1.5rem;
  border-top: 1px solid #222;
  background: #161616;
}

.pl-modal-credit-txt {
  font-family: 'Lora', serif;
  font-size: 0.85rem;
  font-style: italic;
  color: #4a4030;
}

.pl-modal-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.pl-modal-share,
.pl-modal-copy {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.5rem 1.1rem;
  border: 1px solid #3a3020;
  background: none;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.pl-modal-share {
  color: #7a7060;
}
.pl-modal-share:hover {
  background: rgba(184,145,74,0.06);
  border-color: #5a5040;
  color: #c8c0b0;
}

.pl-modal-copy {
  color: #b8914a;
}
.pl-modal-copy:hover {
  background: rgba(184,145,74,0.1);
  border-color: #b8914a;
}

/* ── Toast ──────────────────────────────────────── */
.pl-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: #b8914a;
  color: #111;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding: 0.5rem 1.4rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 2000;
  white-space: nowrap;
}
.pl-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ── Responsive ─────────────────────────────────── */
@media (max-width: 640px) {

  /* Root bleed */
  .pl-root { margin-left: -1rem; margin-right: -1rem; }

  /* Header */
  .pl-header { padding: 2rem 1.25rem 1.75rem; }
  .pl-header-title { font-size: 2.8rem; }
  .pl-header-subtitle { font-size: 0.9rem; margin-bottom: 1.25rem; }
  .pl-stats { gap: 1rem 2rem; }
  .pl-stat-number { font-size: 1.25rem; }

  /* Controls: search full-width, count inline */
  .pl-controls {
    padding: 0.75rem 1.25rem;
    gap: 0.5rem;
  }
  .pl-search { min-width: 0; font-size: 1rem; padding: 0.6rem 0.85rem; }
  .pl-count  { font-size: 0.75rem; }

  /* Tabs: smaller text, tighter padding */
  .pl-tabs  { padding: 0 0.75rem; }
  .pl-tab   { padding: 0.65rem 0.85rem; font-size: 0.7rem; letter-spacing: 0.12em; }

  /* Cards: single column, slightly less padding */
  .pl-content { padding: 1.25rem; }
  .pl-grid    { grid-template-columns: 1fr; gap: 1rem; }
  .pl-card    { padding: 1.25rem; }
  .pl-card-title   { font-size: 1.05rem; }
  .pl-card-excerpt { font-size: 0.85rem; -webkit-line-clamp: 3; }

  /* Modal: full-screen bottom sheet on mobile */
  .pl-overlay {
    padding: 0;
    align-items: flex-end;
  }

  .pl-modal {
    max-width: 100%;
    width: 100%;
    /* Take up most of the screen height but leave a gap at top */
    height: 92vh;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: 2px solid #b8914a;
    /* Slide in from bottom */
    transform: translateY(100%);
  }
  .pl-overlay.open .pl-modal { transform: translateY(0); }

  /* Drag handle hint at top of sheet */
  .pl-modal-head::before {
    content: '';
    display: block;
    width: 36px;
    height: 3px;
    background: #3a3020;
    border-radius: 2px;
    margin: 0 auto 1.25rem;
  }

  /* Tighter header padding */
  .pl-modal-head   { padding: 1rem 1.25rem 0; }
  .pl-modal-title  { font-size: 1.25rem; margin-bottom: 0.9rem; padding-right: 2rem; }
  .pl-modal-cat    { font-size: 0.65rem; }

  /* Scroll area takes remaining height comfortably */
  .pl-modal-scroll { padding: 1rem 1.25rem 0.75rem; }

  /* Footer: stack vertically on very small screens */
  .pl-modal-footer {
    padding: 0.85rem 1.25rem 1.25rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  .pl-modal-credit-txt { font-size: 0.78rem; }
  .pl-modal-actions    { display: flex; gap: 0.5rem; }
  .pl-modal-share,
  .pl-modal-copy {
    flex: 1;
    text-align: center;
    padding: 0.65rem 0.5rem;
    font-size: 0.72rem;
  }

  /* Close button slightly larger tap target */
  .pl-modal-close {
    width: 2.25rem;
    height: 2.25rem;
    top: 1rem;
    right: 1rem;
  }

  /* Toast sits higher so it clears the modal footer */
  .pl-toast { bottom: 5.5rem; }
}
</style>

<div class="pl-root">

  <!-- HEADER -->
  <div class="pl-header">
    <div class="pl-header-label">Tested &amp; Curated</div>
    <h1 class="pl-header-title">Prompt Library</h1>
    <p class="pl-header-subtitle">A working collection organized by use case</p>
    <div class="pl-stats" id="plStats"></div>
  </div>

  <!-- CONTROLS -->
  <div class="pl-controls">
    <input class="pl-search" id="plSearch" type="text" placeholder="Search prompts…">
    <span class="pl-count" id="plCount"></span>
  </div>

  <!-- TABS -->
  <div class="pl-tabs" id="plTabs"></div>

  <!-- GRID -->
  <div class="pl-content">
    <div class="pl-grid"  id="plGrid"></div>
    <div class="pl-empty" id="plEmpty">
      No prompts match your search.<br>
      <span style="font-size:0.85rem;color:#333">Try a different term or category.</span>
    </div>
  </div>

</div>

<!-- MODAL -->
<div class="pl-overlay" id="plOverlay">
  <div class="pl-modal">
    <!-- fixed header -->
    <div class="pl-modal-head">
      <button class="pl-modal-close" id="plModalClose" aria-label="Close">&#x2715;</button>
      <div class="pl-modal-cat"   id="plModalCat"></div>
      <div class="pl-modal-title" id="plModalTitle"></div>
      <div class="pl-modal-rule"></div>
    </div>
    <!-- scrollable prompt content -->
    <div class="pl-modal-scroll">
      <div class="pl-modal-body" id="plModalBody"></div>
    </div>
    <!-- always-visible footer -->
    <div class="pl-modal-footer">
      <span class="pl-modal-credit-txt" id="plModalCredit"></span>
      <div class="pl-modal-actions">
        <button class="pl-modal-share" id="plModalShare">Share &#x2197;</button>
        <button class="pl-modal-copy"  id="plModalCopy">Copy Prompt</button>
      </div>
    </div>
  </div>
</div>

<div class="pl-toast" id="plToast">Copied to clipboard</div>

<script>
const PROMPTS = [
  {% assign all_prompts = site.prompts | where: "published", true %}
  {% for prompt in all_prompts %}
  {
    title:       {{ prompt.title       | jsonify }},
    category:    {{ prompt.category    | jsonify }},
    credit:      {{ prompt.credit      | default: "" | jsonify }},
    description: {{ prompt.description | default: "" | jsonify }},
    html:        {{ prompt.content     | markdownify | jsonify }},
    raw:         {{ prompt.content     | strip_html  | strip_newlines | jsonify }}
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

let query     = '';
let activeTab = 'All';
let openPrompt = null;

// Stats
const cats   = [...new Set(PROMPTS.map(p => p.category))].sort();
const statsEl = document.getElementById('plStats');
function mkStat(n, lbl) {
  const d = document.createElement('div');
  d.innerHTML = `<span class="pl-stat-number">${n}</span><span class="pl-stat-label">${esc(lbl)}</span>`;
  return d;
}
statsEl.appendChild(mkStat(PROMPTS.length, 'Prompts'));
cats.forEach(c => statsEl.appendChild(mkStat(PROMPTS.filter(p => p.category === c).length, c)));

// Tabs
const tabsEl = document.getElementById('plTabs');
['All', ...cats].forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'pl-tab' + (cat === 'All' ? ' active' : '');
  btn.textContent = cat;
  btn.addEventListener('click', () => {
    activeTab = cat;
    tabsEl.querySelectorAll('.pl-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  });
  tabsEl.appendChild(btn);
});

// Search — push ?search= param as user types
const searchEl = document.getElementById('plSearch');
searchEl.addEventListener('input', e => {
  query = e.target.value.toLowerCase();
  pushParams({ search: e.target.value.trim() || null });
  render();
});

function filtered() {
  return PROMPTS.filter(p => {
    if (activeTab !== 'All' && p.category !== activeTab) return false;
    if (!query.trim()) return true;
    const hay = `${p.title} ${p.raw} ${p.category} ${p.credit} ${p.description}`.toLowerCase();
    return query.split(/\s+/).filter(Boolean).every(t => hay.includes(t));
  });
}

function render() {
  const list  = filtered();
  const grid  = document.getElementById('plGrid');
  const empty = document.getElementById('plEmpty');
  document.getElementById('plCount').textContent = `${list.length} / ${PROMPTS.length}`;

  if (!list.length) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = list.map(p => {
    const idx     = PROMPTS.indexOf(p);
    const excerpt = p.description || p.raw.trim().slice(0, 220).replace(/\s+/g, ' ');
    return `
      <div class="pl-card" data-idx="${idx}">
        <div class="pl-card-cat">${esc(p.category)}</div>
        <div class="pl-card-title">${esc(p.title)}</div>
        <div class="pl-card-excerpt">${esc(excerpt)}${!p.description && p.raw.length > 220 ? '\u2026' : ''}</div>
        <div class="pl-card-footer">
          <span class="pl-card-credit">${p.credit ? 'Credit: ' + esc(p.credit) : ''}</span>
          <button class="pl-card-cta" data-idx="${idx}">View &rarr;</button>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.pl-card').forEach(card => {
    const idx = +card.dataset.idx;
    card.addEventListener('click', e => {
      if (e.target.classList.contains('pl-card-cta')) return;
      openModal(PROMPTS[idx]);
    });
    card.querySelector('.pl-card-cta').addEventListener('click', e => {
      e.stopPropagation();
      openModal(PROMPTS[idx]);
    });
  });
}

// ── URL param helpers ───────────────────────────────────────
function pushParams(overrides) {
  const url = new URL(window.location.href);
  Object.entries(overrides).forEach(([k, v]) => {
    if (v == null || v === '') { url.searchParams.delete(k); }
    else { url.searchParams.set(k, v); }
  });
  history.replaceState(null, '', url.toString());
}

function shareUrl(promptIdx) {
  const url = new URL(window.location.href);
  url.searchParams.set('id', promptIdx);
  if (query.trim()) { url.searchParams.set('search', query.trim()); }
  else { url.searchParams.delete('search'); }
  return url.toString();
}

// ── Modal ───────────────────────────────────────────────────
function openModal(p, pushHistory = true) {
  openPrompt = p;
  const idx = PROMPTS.indexOf(p);
  document.getElementById('plModalCat').textContent    = p.category;
  document.getElementById('plModalTitle').textContent  = p.title;
  document.getElementById('plModalBody').innerHTML     = p.html;
  document.getElementById('plModalCredit').textContent = p.credit ? 'Credit: ' + p.credit : '';
  document.getElementById('plOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.querySelector('.pl-modal-scroll').scrollTop = 0;
  if (pushHistory) pushParams({ id: idx });
}

function closeModal() {
  document.getElementById('plOverlay').classList.remove('open');
  document.body.style.overflow = '';
  openPrompt = null;
  pushParams({ id: null }); // remove id param, keep search
}

document.getElementById('plModalClose').addEventListener('click', closeModal);
document.getElementById('plOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('plOverlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Share button ────────────────────────────────────────────
document.getElementById('plModalShare').addEventListener('click', () => {
  if (!openPrompt) return;
  const url = shareUrl(PROMPTS.indexOf(openPrompt));
  navigator.clipboard.writeText(url).then(() => showToast('Link copied!')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = url;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Link copied!');
  });
});

// ── Copy prompt ─────────────────────────────────────────────
document.getElementById('plModalCopy').addEventListener('click', () => {
  if (!openPrompt) return;
  navigator.clipboard.writeText(openPrompt.raw).then(() => showToast('Copied!')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = openPrompt.raw;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied!');
  });
});

// ── Toast ───────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('plToast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ── Util ────────────────────────────────────────────────────
function esc(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Init from URL params ────────────────────────────────────
(function init() {
  const params = new URLSearchParams(window.location.search);

  const searchParam = params.get('search');
  if (searchParam) {
    query = searchParam.toLowerCase();
    searchEl.value = searchParam;
  }

  render();

  const idParam = params.get('id');
  if (idParam !== null) {
    const idx = parseInt(idParam, 10);
    const target = PROMPTS[idx];
    if (target) openModal(target, false); // don't re-push the param we just read
  }
})();
</script>
