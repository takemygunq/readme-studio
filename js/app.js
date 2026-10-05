/* ============================================================
   README STUDIO — Main Application
   ============================================================ */

// ── State ────────────────────────────────────────────────────
const state = {
  identity: { name:'', username:'', title:'', bio:'', location:'', email:'' },
  socials: { github:'', twitter:'', linkedin:'', youtube:'', website:'', dev:'', instagram:'' },
  skills: [],
  stats: { enabled:true, theme:'radical', streak:true, langs:true, trophy:false },
  extras: { typingLines:'', views:true, waveHeader:true },
  template: 'pro',
  tab: 'source',
};

// ── DOM refs ─────────────────────────────────────────────────
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

let iconFilterCat = 'all';
let iconSearch = '';

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  bindInputs();
  renderIconGrid();
  bindIconSearch();
  bindTemplateCards();
  bindTabs();
  bindCopy();
  bindDownload();
  bindStatToggles();
  refresh();
});

// ── Input binding ─────────────────────────────────────────────
function bindInputs() {
  // Identity fields
  ['name','username','title','bio','location','email'].forEach(key => {
    const el = document.getElementById(`in-${key}`);
    if (!el) return;
    el.addEventListener('input', () => {
      state.identity[key] = el.value;
      if (key === 'bio') updateCharCount(el);
      refresh();
    });
  });

  // Social fields
  Object.keys(state.socials).forEach(key => {
    const el = document.getElementById(`soc-${key}`);
    if (!el) return;
    el.addEventListener('input', () => {
      state.socials[key] = el.value;
      refresh();
    });
  });

  // Extras
  const typingEl = document.getElementById('in-typing');
  if (typingEl) {
    typingEl.addEventListener('input', () => {
      state.extras.typingLines = typingEl.value;
      refresh();
    });
  }
  const viewsEl = document.getElementById('ex-views');
  if (viewsEl) {
    viewsEl.addEventListener('change', () => {
      state.extras.views = viewsEl.checked;
      refresh();
    });
  }

  // Stats theme
  const themeEl = document.getElementById('stat-theme');
  if (themeEl) {
    themeEl.addEventListener('change', () => {
      state.stats.theme = themeEl.value;
      refresh();
    });
  }
}

function updateCharCount(el) {
  const counter = el.parentElement.querySelector('.char-count');
  if (counter) counter.textContent = `${el.value.length} / 300`;
}

// ── Stats toggles ─────────────────────────────────────────────
function bindStatToggles() {
  ['stats-enabled','stats-streak','stats-langs','stats-trophy'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', () => {
      const key = id.replace('stats-','');
      if (key === 'enabled') state.stats.enabled = el.checked;
      else if (key === 'streak') state.stats.streak = el.checked;
      else if (key === 'langs') state.stats.langs = el.checked;
      else if (key === 'trophy') state.stats.trophy = el.checked;
      refresh();
    });
  });
}

// ── Icon grid ─────────────────────────────────────────────────
function renderIconGrid() {
  const grid = document.getElementById('icon-grid');
  if (!grid) return;

  const filtered = ICONS.filter(ico => {
    const matchCat = iconFilterCat === 'all' || ico.cat === iconFilterCat;
    const matchQ = !iconSearch || ico.name.toLowerCase().includes(iconSearch.toLowerCase()) ||
      (ico.label && ico.label.toLowerCase().includes(iconSearch.toLowerCase()));
    return matchCat && matchQ;
  });

  grid.innerHTML = filtered.map(ico => {
    const selected = state.skills.includes(ico.id);
    return `<button
      class="icon-chip${selected ? ' selected' : ''}"
      data-id="${ico.id}"
      title="${ico.label || ico.name}"
      style="--chip-color:#${ico.color}"
      onclick="toggleSkill('${ico.id}')">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@10/icons/${ico.logo}.svg"
           onerror="this.style.display='none'"
           width="16" height="16"
           style="filter:${needsDark(ico.color)?'invert(0)':'invert(1)'}; opacity:0.9">
      <span>${ico.label || ico.name}</span>
    </button>`;
  }).join('');
}

function needsDark(hex) {
  // Returns true if the background is dark (need light text/icon)
  const r = parseInt(hex.slice(0,2),16);
  const g = parseInt(hex.slice(2,4),16);
  const b = parseInt(hex.slice(4,6),16);
  return (r*299 + g*587 + b*114) / 1000 < 128;
}

function bindIconSearch() {
  const searchEl = document.getElementById('icon-search');
  if (searchEl) {
    searchEl.addEventListener('input', () => {
      iconSearch = searchEl.value;
      renderIconGrid();
    });
  }

  // Category tabs
  $$('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      iconFilterCat = btn.dataset.cat;
      renderIconGrid();
    });
  });
}

function toggleSkill(id) {
  const idx = state.skills.indexOf(id);
  if (idx === -1) state.skills.push(id);
  else state.skills.splice(idx, 1);
  renderIconGrid();
  renderSelectedSkills();
  refresh();
}

function renderSelectedSkills() {
  const el = document.getElementById('selected-skills');
  if (!el) return;
  if (!state.skills.length) {
    el.innerHTML = '<span class="empty-skills">No skills selected yet</span>';
    return;
  }
  el.innerHTML = state.skills.map(id => {
    const ico = getIcon(id);
    if (!ico) return '';
    return `<span class="skill-tag" style="background:#${ico.color}20;border-color:#${ico.color}50;color:#${needsDark(ico.color)?'fff':'000'}">
      ${ico.label || ico.name}
      <button onclick="toggleSkill('${id}')" class="skill-remove" title="Remove">×</button>
    </span>`;
  }).filter(Boolean).join('');
}

// ── Template cards ─────────────────────────────────────────────
function bindTemplateCards() {
  $$('.tpl-card').forEach(card => {
    card.addEventListener('click', () => {
      $$('.tpl-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.template = card.dataset.tpl;
      refresh();
    });
  });
}

// ── Tabs (source / rendered) ───────────────────────────────────
function bindTabs() {
  $$('.preview-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.preview-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.tab = tab.dataset.tab;
      const src = document.getElementById('preview-source');
      const ren = document.getElementById('preview-rendered');
      if (state.tab === 'source') {
        src.hidden = false; ren.hidden = true;
      } else {
        src.hidden = true; ren.hidden = false;
        renderHTML();
      }
    });
  });
}

// ── Refresh ───────────────────────────────────────────────────
function refresh() {
  const md = generateMarkdown(state);
  const src = document.getElementById('preview-source');
  if (src) src.textContent = md;
  if (state.tab === 'rendered') renderHTML(md);

  // Update live preview badge count
  const badge = document.getElementById('skills-count');
  if (badge) badge.textContent = state.skills.length;
}

// ── HTML preview (lightweight markdown → html) ────────────────
function renderHTML(md) {
  md = md || generateMarkdown(state);
  const el = document.getElementById('preview-rendered');
  if (!el) return;

  // Simple markdown to HTML transformer for README-style content
  let html = md
    // HTML passthrough (keep div/img tags)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // Undo escaping for actual HTML tags in markdown
    .replace(/&lt;(\/?(div|p|h1|h2|h3|img|br|em|strong|a|details|summary)([^&]*?))\s*\/?&gt;/g, '<$1>')
    // Headers
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Images (badge style)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="height:28px;margin:2px;vertical-align:middle">')
    // Links
    .replace(/\[([^\]]*)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    // HR
    .replace(/^---$/gm, '<hr>')
    // Blockquote
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    // List items
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>(\n|$))+/g, '<ul>$&</ul>')
    // Paragraphs
    .replace(/^(?!<[h1-9ulopbr]|$)(.*)\n?/gm, (m, p) => p.trim() ? `<p>${p}</p>` : '')
    // Clean up
    .replace(/<p><\/p>/g, '');

  el.innerHTML = `<div class="rendered-md">${html}</div>`;
}

// ── Copy ──────────────────────────────────────────────────────
function bindCopy() {
  const btn = document.getElementById('btn-copy');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const md = generateMarkdown(state);
    try {
      await navigator.clipboard.writeText(md);
      btn.textContent = '✓ Copied!';
      btn.classList.add('success');
    } catch {
      const ta = document.createElement('textarea');
      ta.value = md;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = '✓ Copied!';
      btn.classList.add('success');
    }
    setTimeout(() => {
      btn.textContent = 'Copy Markdown';
      btn.classList.remove('success');
    }, 2000);
  });
}

// ── Download ──────────────────────────────────────────────────
function bindDownload() {
  const btn = document.getElementById('btn-download');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const md = generateMarkdown(state);
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

// ── Mobile panel toggle ───────────────────────────────────────
function switchPanel(panel) {
  const builder = document.getElementById('builder-panel');
  const preview = document.getElementById('preview-panel');
  const btns = $$('.panel-toggle-btn');
  btns.forEach(b => b.classList.remove('active'));
  document.querySelector(`.panel-toggle-btn[data-panel="${panel}"]`)?.classList.add('active');
  if (panel === 'builder') {
    builder.hidden = false;
    preview.hidden = true;
  } else {
    builder.hidden = true;
    preview.hidden = false;
  }
}

// Expose globally for onclick attributes
window.toggleSkill = toggleSkill;
window.switchPanel = switchPanel;
