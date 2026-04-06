---
layout: prompts-page
title: Prompts
permalink: /prompts/
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── TOKENS (mirrors blog-style.css) ───────────────────── */
.pl-root {
  --paper:           #f7f4ef;
  --paper-warm:      #f0ebe2;
  --paper-rule:      #e2dbd0;
  --ink:             #1c1917;
  --ink-mid:         #292524;
  --ink-soft:        #44403c;
  --ink-muted:       #78716c;
  --ink-faint:       #a8a29e;
  --accent:          #1e3a6e;
  --accent-bright:   #2d54a0;
  --accent-dim:      #152b52;
  --accent-ghost:    rgba(30,58,110,0.05);
  --accent-border:   rgba(30,58,110,0.16);
  --accent-border-m: rgba(30,58,110,0.35);
  --fd: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --fb: 'Source Serif 4', Georgia, serif;
  --fm: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}

/* ── Reset & scope ──────────────────────────────────────── */
.pl-root *, .pl-root *::before, .pl-root *::after {
  box-sizing: border-box;
}

/* ── Root container ─────────────────────────────────────── */
.pl-root {
  margin-left:  -2rem;
  margin-right: -2rem;
  margin-top:   -1rem;
  background:   var(--paper);
  color:        var(--ink-mid);
  font-family:  var(--fb);
  padding-bottom: 6rem;
}

/* ── Page header ────────────────────────────────────────── */
.pl-header {
  padding: 3.5rem 2.5rem 2.75rem;
  border-bottom: 2px solid var(--ink);
  background: var(--paper);
}

.pl-header-label {
  font-family: var(--fb);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.26em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.pl-header-label::before {
  content: '';
  display: block;
  width: 1.25rem;
  height: 1px;
  background: var(--accent);
}

.pl-header-title {
  font-family: var(--fd);
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 0.95;
  margin: 0 0 0.5rem;
}

.pl-header-subtitle {
  font-family: var(--fd);
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 400;
  color: var(--ink-soft);
  margin: 0 0 2rem;
}

.pl-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--paper-rule);
}

.pl-stat-number {
  font-family: var(--fd);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent);
  display: block;
  line-height: 1;
}

.pl-stat-label {
  font-family: var(--fb);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-top: 0.2rem;
  display: block;
}

/* ── Sticky controls ────────────────────────────────────── */
.pl-controls {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247,244,239,0.97);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--paper-rule);
  padding: 0.85rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.pl-search {
  flex: 1;
  min-width: 200px;
  background: var(--paper-warm);
  border: 1px solid var(--paper-rule);
  color: var(--ink);
  padding: 0.55rem 1rem;
  font-family: var(--fb);
  font-size: 0.97rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-appearance: none;
}

.pl-search:focus {
  border-color: var(--accent-border-m);
  box-shadow: 0 0 0 2px rgba(30,58,110,0.08);
}

.pl-search::placeholder {
  color: var(--ink-faint);
  font-style: italic;
}

.pl-count {
  font-family: var(--fb);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
  white-space: nowrap;
}

/* ── Category tabs ──────────────────────────────────────── */
.pl-tabs {
  background: var(--paper-warm);
  border-bottom: 1px solid var(--paper-rule);
  padding: 0 2.5rem;
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
  color: var(--ink-faint);
  padding: 0.8rem 1.25rem;
  font-family: var(--fb);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: -1px;
}

.pl-tab:hover { color: var(--ink-soft); }

.pl-tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
  font-weight: 600;
}

/* ── Content + grid ─────────────────────────────────────── */
.pl-content {
  padding: 2.5rem 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.pl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1px;
  background: var(--paper-rule);
  border: 1px solid var(--paper-rule);
}

/* ── Card ───────────────────────────────────────────────── */
.pl-card {
  background: var(--paper);
  padding: 2rem 2.25rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: background 0.2s;
  position: relative;
  overflow: hidden;
}

.pl-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.28s ease;
}

.pl-card:hover {
  background: var(--paper-warm);
}

.pl-card:hover::after {
  transform: scaleX(1);
}

.pl-card-cat {
  font-family: var(--fb);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.75;
  margin-bottom: 0.5rem;
}

.pl-card-title {
  font-family: var(--fd);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: 0.85rem;
  transition: color 0.18s;
}

.pl-card:hover .pl-card-title {
  color: var(--accent);
}

.pl-card-excerpt {
  font-family: var(--fb);
  font-size: 0.92rem;
  line-height: 1.8;
  color: var(--ink-soft);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.pl-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  border-top: 1px solid var(--paper-rule);
  padding-top: 0.9rem;
  margin-top: auto;
}

.pl-card-credit {
  font-family: var(--fb);
  font-size: 0.78rem;
  font-style: italic;
  color: var(--ink-faint);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pl-card-cta {
  font-family: var(--fb);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  background: none;
  border: 1px solid var(--accent-border-m);
  padding: 0.3rem 0.85rem;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.18s, border-color 0.18s, color 0.18s;
}

.pl-card-cta:hover {
  background: var(--accent-ghost);
  border-color: var(--accent);
  color: var(--accent-bright);
}

/* ── Empty state ────────────────────────────────────────── */
.pl-empty {
  display: none;
  padding: 5rem 2rem;
  text-align: center;
  font-family: var(--fd);
  font-size: 1.2rem;
  font-style: italic;
  color: var(--ink-faint);
  line-height: 2;
}

/* ── Modal overlay ──────────────────────────────────────── */
.pl-overlay {
  position: fixed;
  inset: 0;
  background: rgba(28,25,23,0.75);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.pl-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.pl-modal {
  background: var(--paper);
  border: 1px solid var(--paper-rule);
  border-top: 2px solid var(--accent);
  max-width: 700px;
  width: 100%;
  height: min(88vh, 740px);
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 24px 80px rgba(28,25,23,0.22), 0 4px 24px rgba(28,25,23,0.1);
  transform: translateY(14px);
  transition: transform 0.32s cubic-bezier(0.32, 0.72, 0, 1);
  overflow: hidden;
}

.pl-overlay.open .pl-modal { transform: translateY(0); }

.pl-modal-head {
  flex-shrink: 0;
  padding: 2rem 2.75rem 1.25rem;
  border-bottom: 1px solid var(--paper-rule);
  position: relative;
}

.pl-modal-close {
  position: absolute;
  top: 1.25rem; right: 1.5rem;
  background: none;
  border: 1px solid var(--paper-rule);
  color: var(--ink-faint);
  width: 2rem; height: 2rem;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  transition: border-color 0.18s, color 0.18s;
}

.pl-modal-close:hover {
  border-color: var(--accent-border-m);
  color: var(--accent);
}

.pl-modal-cat {
  font-family: var(--fb);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.26em;
  color: var(--accent);
  text-transform: uppercase;
  opacity: 0.75;
  margin-bottom: 0.35rem;
}

.pl-modal-title {
  font-family: var(--fd);
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.1;
  padding-right: 2.5rem;
}

.pl-modal-rule {
  display: none;
}

.pl-modal-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 1.75rem 2.75rem 1rem;
  mask-image: linear-gradient(180deg, black 86%, transparent 100%);
  -webkit-mask-image: linear-gradient(180deg, black 86%, transparent 100%);
  scrollbar-width: thin;
  scrollbar-color: var(--paper-rule) transparent;
}

.pl-modal-scroll::-webkit-scrollbar { width: 3px; }
.pl-modal-scroll::-webkit-scrollbar-track { background: transparent; }
.pl-modal-scroll::-webkit-scrollbar-thumb { background: var(--paper-rule); border-radius: 2px; }

/* ── Modal body prose ───────────────────────────────────── */
.pl-modal-body {
  font-family: var(--fb);
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--ink-soft);
  letter-spacing: 0.005em;
}

.pl-modal-body p { margin: 0 0 1em; }

.pl-modal-body h1,
.pl-modal-body h2,
.pl-modal-body h3,
.pl-modal-body h4 {
  font-family: var(--fd);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.2;
}

.pl-modal-body h1 { font-size: 1.4em; margin: 1.6em 0 0.5em; }
.pl-modal-body h2 { font-size: 1.2em; margin: 1.4em 0 0.45em; }
.pl-modal-body h3 { font-size: 1.05em; margin: 1.2em 0 0.4em; }

.pl-modal-body h4 {
  font-family: var(--fb);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 1.2em 0 0.4em;
}

.pl-modal-body ul,
.pl-modal-body ol {
  margin: 0.5em 0 1em 1.5em;
  padding: 0;
}

.pl-modal-body li { margin-bottom: 0.35em; }
.pl-modal-body ul li::marker { color: var(--accent); }
.pl-modal-body ol li::marker {
  color: var(--accent);
  font-family: var(--fd);
  font-weight: 600;
  font-size: 0.85rem;
}

.pl-modal-body code {
  font-family: var(--fm);
  background: var(--paper-warm);
  color: var(--accent-dim);
  font-size: 0.82em;
  padding: 0.14em 0.4em;
  border: 1px solid var(--paper-rule);
  border-radius: 2px;
}

.pl-modal-body pre {
  background: var(--ink);
  border: none;
  border-left: 3px solid var(--accent);
  color: rgba(247,244,239,0.88);
  font-size: 0.85em;
  line-height: 1.6;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 1em 0;
}

.pl-modal-body pre code {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  border-radius: 0;
}

.pl-modal-body blockquote {
  border-left: 2px solid var(--accent);
  background: var(--accent-ghost);
  color: var(--ink-soft);
  margin: 1em 0;
  padding: 0.75em 1.25em;
  font-family: var(--fd);
  font-style: italic;
  font-size: 1.05em;
}

.pl-modal-body hr {
  border: none;
  border-top: 1px solid var(--paper-rule);
  margin: 1.5em 0;
}

/* ── Modal footer ───────────────────────────────────────── */
.pl-modal-footer {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1rem 2.75rem 1.5rem;
  border-top: 1px solid var(--paper-rule);
  background: var(--paper-warm);
}

.pl-modal-credit-txt {
  font-family: var(--fb);
  font-size: 0.82rem;
  font-style: italic;
  color: var(--ink-faint);
}

.pl-modal-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.pl-modal-share,
.pl-modal-copy {
  font-family: var(--fb);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.5rem 1.1rem;
  border: 1px solid var(--accent-border-m);
  background: none;
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s, color 0.18s;
}

.pl-modal-share {
  color: var(--ink-soft);
}

.pl-modal-share:hover {
  background: var(--accent-ghost);
  border-color: var(--accent-border-m);
  color: var(--accent);
}

.pl-modal-copy {
  color: var(--paper);
  background: var(--accent);
  border-color: var(--accent);
}

.pl-modal-copy:hover {
  background: var(--accent-bright);
  border-color: var(--accent-bright);
}

/* ── Toast ──────────────────────────────────────────────── */
.pl-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: var(--accent);
  color: var(--paper);
  font-family: var(--fb);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.55rem 1.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 2000;
  white-space: nowrap;
}

.pl-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 640px) {
  .pl-root { margin-left: -1rem; margin-right: -1rem; }

  .pl-header { padding: 2rem 1.25rem 1.75rem; }
  .pl-header-title { font-size: 2.8rem; }
  .pl-header-subtitle { font-size: 0.95rem; margin-bottom: 1.25rem; }
  .pl-stats { gap: 1rem 2rem; }
  .pl-stat-number { font-size: 1.5rem; }

  .pl-controls { padding: 0.75rem 1.25rem; gap: 0.5rem; }
  .pl-search { min-width: 0; font-size: 1rem; padding: 0.6rem 0.85rem; }
  .pl-count  { font-size: 0.65rem; }

  .pl-tabs { padding: 0 0.75rem; }
  .pl-tab  { padding: 0.65rem 0.85rem; font-size: 0.62rem; letter-spacing: 0.12em; }

  .pl-content { padding: 1.25rem; }
  .pl-grid    { grid-template-columns: 1fr; gap: 1px; }
  .pl-card    { padding: 1.5rem 1.25rem; }
  .pl-card-title   { font-size: 1.15rem; }
  .pl-card-excerpt { font-size: 0.88rem; -webkit-line-clamp: 3; }

  .pl-overlay { padding: 0; align-items: flex-end; }

  .pl-modal {
    max-width: 100%;
    width: 100%;
    height: 92vh;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: 2px solid var(--accent);
    transform: translateY(100%);
  }

  .pl-overlay.open .pl-modal { transform: translateY(0); }

  .pl-modal-head::before {
    content: '';
    display: block;
    width: 36px;
    height: 3px;
    background: var(--paper-rule);
    border-radius: 2px;
    margin: 0 auto 1.25rem;
  }

  .pl-modal-head   { padding: 1rem 1.25rem 1rem; }
  .pl-modal-title  { font-size: 1.35rem; padding-right: 2rem; }

  .pl-modal-scroll { padding: 1rem 1.25rem 0.75rem; }

  .pl-modal-footer {
    padding: 0.85rem 1.25rem 1.25rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .pl-modal-actions { display: flex; gap: 0.5rem; }
  .pl-modal-share,
  .pl-modal-copy {
    flex: 1;
    text-align: center;
    padding: 0.65rem 0.5rem;
    font-size: 0.68rem;
  }

  .pl-modal-close { width: 2.25rem; height: 2.25rem; top: 1rem; right: 1rem; }
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
      <span style="font-size:0.85rem;color:var(--ink-faint)">Try a different term or category.</span>
    </div>
  </div>

</div>

<!-- MODAL -->
<div class="pl-overlay" id="plOverlay">
  <div class="pl-modal">
    <div class="pl-modal-head">
      <button class="pl-modal-close" id="plModalClose" aria-label="Close">&#x2715;</button>
      <div class="pl-modal-cat"   id="plModalCat"></div>
      <div class="pl-modal-title" id="plModalTitle"></div>
      <div class="pl-modal-rule"></div>
    </div>
    <div class="pl-modal-scroll">
      <div class="pl-modal-body" id="plModalBody"></div>
    </div>
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
const cats    = [...new Set(PROMPTS.map(p => p.category))].sort();
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

// Search
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
  pushParams({ id: null });
}

document.getElementById('plModalClose').addEventListener('click', closeModal);
document.getElementById('plOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('plOverlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

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

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('plToast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

function esc(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

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
    if (target) openModal(target, false);
  }
})();
</script>
