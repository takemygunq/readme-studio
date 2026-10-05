/* ================================================================
   README Studio — Visual Block Editor
   ================================================================ */

// ── Block Registry ───────────────────────────────────────────────
const BLOCK_REGISTRY = {

  banner: {
    label: 'Wave Banner',
    cat: 'header',
    thumb: `<div class="thumb-banner">▓▓ WAVE ▓▓</div>`,
    defaults: () => ({ bannerType:'waving', colors:'6,11,20', text:'Your Name', size:42, fontColor:'fff', height:180, anim:'twinkling' }),
    html(b) {
      const url = `https://capsule-render.vercel.app/api?type=${b.bannerType}&color=gradient&customColorList=${b.colors}&height=${b.height}&text=${encodeURIComponent(b.text)}&fontSize=${b.size}&fontColor=${b.fontColor}&animation=${b.anim}`;
      return `<img src="${url}" style="width:100%;display:block;border-radius:0" alt="banner">`;
    },
    md(b) {
      return `<img src="https://capsule-render.vercel.app/api?type=${b.bannerType}&color=gradient&customColorList=${b.colors}&height=${b.height}&section=header&text=${encodeURIComponent(b.text)}&fontSize=${b.size}&fontColor=${b.fontColor}&animation=${b.anim}" width="100%" />`;
    },
    controls: [
      { type:'select', k:'bannerType', label:'Style', opts:['waving','shark','rect','cylinder','soft','egg','venom','slice'] },
      { type:'text',   k:'text',   label:'Text' },
      { type:'range',  k:'size',   label:'Font Size', min:20, max:80 },
      { type:'range',  k:'height', label:'Height',    min:80, max:320 },
      { type:'text',   k:'fontColor', label:'Text Color (hex, no #)' },
      { type:'select', k:'anim',   label:'Animation', opts:['twinkling','fadeIn','blink','blinking','scaleIn'] },
      { type:'text',   k:'colors', label:'Color Preset (0–30 comma list)' },
    ]
  },

  heading: {
    label: 'Heading',
    cat: 'text',
    thumb: `<div class="thumb-heading"><div class="thumb-h1"></div><div class="thumb-h2"></div></div>`,
    defaults: () => ({ text:'Hi there', emoji:'👋', level:'h1', align:'left', color:'' }),
    html(b) {
      const s = `text-align:${b.align};${b.color?`color:${b.color};`:''}font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;`;
      return `<${b.level} style="${s}">${b.text}${b.emoji?' '+b.emoji:''}</${b.level}>`;
    },
    md(b) {
      const pre = {h1:'# ',h2:'## ',h3:'### ',h4:'#### '}[b.level]||'# ';
      const txt = `${b.text}${b.emoji?' '+b.emoji:''}`;
      return b.align!=='left' ? `<${b.level} align="${b.align}">${txt}</${b.level}>` : `${pre}${txt}`;
    },
    controls: [
      { type:'text',   k:'text',  label:'Text' },
      { type:'text',   k:'emoji', label:'Emoji' },
      { type:'select', k:'level', label:'Level', opts:['h1','h2','h3','h4'] },
      { type:'select', k:'align', label:'Align', opts:['left','center','right'] },
      { type:'color',  k:'color', label:'Color' },
    ]
  },

  bio: {
    label: 'Paragraph',
    cat: 'text',
    thumb: `<div class="thumb-bio"><div class="thumb-line" style="width:90%"></div><div class="thumb-line" style="width:75%"></div><div class="thumb-line" style="width:82%"></div></div>`,
    defaults: () => ({ text:'A passionate developer who loves building things that matter.', align:'left', bold:false, italic:false }),
    html(b) {
      let t = escHtml(b.text);
      if (b.bold) t = `<strong>${t}</strong>`;
      if (b.italic) t = `<em>${t}</em>`;
      return `<p style="text-align:${b.align};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.6;margin:8px 0">${t}</p>`;
    },
    md(b) {
      let t = b.text;
      if (b.bold) t = `**${t}**`;
      if (b.italic) t = `*${t}*`;
      return b.align!=='left' ? `<p align="${b.align}">${t}</p>` : t;
    },
    controls: [
      { type:'textarea', k:'text',   label:'Text', rows:4 },
      { type:'select',   k:'align',  label:'Align', opts:['left','center','right'] },
      { type:'toggle',   k:'bold',   label:'Bold' },
      { type:'toggle',   k:'italic', label:'Italic' },
    ]
  },

  typing: {
    label: 'Typing Animation',
    cat: 'header',
    thumb: `<div class="thumb-typing">| Full Stack Dev_</div>`,
    defaults: () => ({ lines:'Full Stack Developer;Open Source;Building cool things', color:'5B6CF9', font:'Fira+Code', width:435, pause:1000, align:'center' }),
    html(b) {
      const url = `https://readme-typing-svg.demolab.com?font=${b.font}&pause=${b.pause}&color=${b.color}&center=true&vCenter=true&width=${b.width}&lines=${encodeURIComponent(b.lines)}`;
      return `<div style="text-align:${b.align};padding:4px 0"><img src="${url}" alt="Typing SVG" style="max-width:100%"></div>`;
    },
    md(b) {
      const url = `https://readme-typing-svg.demolab.com?font=${b.font}&pause=${b.pause}&color=${b.color}&center=true&vCenter=true&width=${b.width}&lines=${encodeURIComponent(b.lines)}`;
      return b.align==='center'
        ? `<div align="center">\n  <img src="${url}" alt="Typing SVG" />\n</div>`
        : `![Typing SVG](${url})`;
    },
    controls: [
      { type:'textarea', k:'lines', label:'Lines (semicolons)', rows:3 },
      { type:'color',    k:'color', label:'Text Color' },
      { type:'select',   k:'font',  label:'Font', opts:['Fira+Code','JetBrains+Mono','Source+Code+Pro','Courier+New','Roboto+Mono'] },
      { type:'range',    k:'width', label:'SVG Width', min:200, max:700 },
      { type:'select',   k:'align', label:'Align', opts:['left','center','right'] },
    ]
  },

  skills: {
    label: 'Tech Stack',
    cat: 'content',
    thumb: `<div class="thumb-skills"><div class="thumb-badge" style="width:28px"></div><div class="thumb-badge" style="width:22px"></div><div class="thumb-badge" style="width:32px"></div><div class="thumb-badge" style="width:24px"></div></div>`,
    defaults: () => ({ icons:['javascript','typescript','react','nodejs','python'], style:'for-the-badge', align:'left', gap:4 }),
    html(b) {
      const badges = (b.icons||[]).map(id => {
        const ico = (typeof ICONS !== 'undefined' ? ICONS : []).find(i=>i.id===id);
        if (!ico) return '';
        const lbl = ico.label || ico.name;
        const url = `https://img.shields.io/badge/${encodeURIComponent(lbl)}-${ico.color}?style=${b.style}&logo=${ico.logo}&logoColor=${ico.logoColor}`;
        return `<img src="${url}" alt="${lbl}" style="margin:${b.gap||3}px;vertical-align:middle">`;
      }).join('');
      return `<div style="text-align:${b.align};padding:4px 0">${badges}</div>`;
    },
    md(b) {
      const badges = (b.icons||[]).map(id => {
        const ico = (typeof ICONS !== 'undefined' ? ICONS : []).find(i=>i.id===id);
        if (!ico) return '';
        const lbl = ico.label || ico.name;
        const url = `https://img.shields.io/badge/${encodeURIComponent(lbl)}-${ico.color}?style=${b.style}&logo=${ico.logo}&logoColor=${ico.logoColor}`;
        return `[![${lbl}](${url})](https://shields.io)`;
      }).filter(Boolean).join('\n');
      return b.align==='center' ? `<div align="center">\n${badges}\n</div>` : badges;
    },
    controls: [
      { type:'icon-picker', k:'icons',  label:'Technologies' },
      { type:'select',      k:'style',  label:'Badge Style', opts:['for-the-badge','flat','flat-square','plastic'] },
      { type:'select',      k:'align',  label:'Align', opts:['left','center','right'] },
    ]
  },

  stats: {
    label: 'GitHub Stats',
    cat: 'stats',
    thumb: `<div class="thumb-stats"><div class="thumb-stat"></div><div class="thumb-stat"></div></div>`,
    defaults: () => ({ username:'', theme:'radical', showIcons:true, hideBorder:true, countPrivate:true, width:49, align:'center' }),
    html(b) {
      if (!b.username) return placeholder('Enter GitHub username in properties');
      const url = `https://github-readme-stats.vercel.app/api?username=${b.username}&show_icons=${b.showIcons}&theme=${b.theme}&hide_border=${b.hideBorder}&count_private=${b.countPrivate}`;
      return `<div style="text-align:${b.align}"><img src="${url}" alt="GitHub Stats" style="width:${b.width}%;border-radius:6px;max-width:100%"></div>`;
    },
    md(b) {
      const url = `https://github-readme-stats.vercel.app/api?username=${b.username}&show_icons=true&theme=${b.theme}&hide_border=true&count_private=true`;
      return `<div align="${b.align}">\n  <img src="${url}" width="${b.width}%" />\n</div>`;
    },
    controls: [
      { type:'text',   k:'username',    label:'GitHub Username' },
      { type:'select', k:'theme',       label:'Theme', opts:STAT_THEMES() },
      { type:'range',  k:'width',       label:'Width %', min:20, max:100 },
      { type:'select', k:'align',       label:'Align', opts:['left','center','right'] },
      { type:'toggle', k:'hideBorder',  label:'Hide Border' },
      { type:'toggle', k:'countPrivate',label:'Count Private' },
    ]
  },

  streak: {
    label: 'Streak Stats',
    cat: 'stats',
    thumb: `<div class="thumb-stats"><div class="thumb-stat" style="flex:2"></div></div>`,
    defaults: () => ({ username:'', theme:'radical', hideBorder:true, width:60, align:'center' }),
    html(b) {
      if (!b.username) return placeholder('Enter GitHub username in properties');
      const url = `https://streak-stats.demolab.com?user=${b.username}&theme=${b.theme}&hide_border=${b.hideBorder}`;
      return `<div style="text-align:${b.align}"><img src="${url}" alt="Streak" style="width:${b.width}%;border-radius:6px;max-width:100%"></div>`;
    },
    md(b) {
      const url = `https://streak-stats.demolab.com?user=${b.username}&theme=${b.theme}&hide_border=true`;
      return `<div align="${b.align}">\n  <img src="${url}" width="${b.width}%" />\n</div>`;
    },
    controls: [
      { type:'text',   k:'username',   label:'GitHub Username' },
      { type:'select', k:'theme',      label:'Theme', opts:STAT_THEMES() },
      { type:'range',  k:'width',      label:'Width %', min:20, max:100 },
      { type:'select', k:'align',      label:'Align', opts:['left','center','right'] },
      { type:'toggle', k:'hideBorder', label:'Hide Border' },
    ]
  },

  langs: {
    label: 'Top Languages',
    cat: 'stats',
    thumb: `<div class="thumb-stats"><div class="thumb-stat"></div><div class="thumb-stat"></div><div class="thumb-stat"></div></div>`,
    defaults: () => ({ username:'', theme:'radical', layout:'compact', hideBorder:true, width:49, align:'center' }),
    html(b) {
      if (!b.username) return placeholder('Enter GitHub username in properties');
      const url = `https://github-readme-stats.vercel.app/api/top-langs/?username=${b.username}&layout=${b.layout}&theme=${b.theme}&hide_border=${b.hideBorder}`;
      return `<div style="text-align:${b.align}"><img src="${url}" alt="Top Langs" style="width:${b.width}%;border-radius:6px;max-width:100%"></div>`;
    },
    md(b) {
      const url = `https://github-readme-stats.vercel.app/api/top-langs/?username=${b.username}&layout=${b.layout}&theme=${b.theme}&hide_border=true`;
      return `<div align="${b.align}">\n  <img src="${url}" width="${b.width}%" />\n</div>`;
    },
    controls: [
      { type:'text',   k:'username',   label:'GitHub Username' },
      { type:'select', k:'theme',      label:'Theme', opts:STAT_THEMES() },
      { type:'select', k:'layout',     label:'Layout', opts:['compact','normal','donut','donut-vertical','pie'] },
      { type:'range',  k:'width',      label:'Width %', min:20, max:100 },
      { type:'select', k:'align',      label:'Align', opts:['left','center','right'] },
    ]
  },

  trophy: {
    label: 'Trophy Cabinet',
    cat: 'stats',
    thumb: `<div style="font-size:20px;display:flex;gap:3px;padding:6px">🏆🥈🥉</div>`,
    defaults: () => ({ username:'', theme:'radical', row:1, col:6, align:'center' }),
    html(b) {
      if (!b.username) return placeholder('Enter GitHub username in properties');
      const url = `https://github-profile-trophy.vercel.app/?username=${b.username}&theme=${b.theme}&no-frame=true&row=${b.row}&column=${b.col}`;
      return `<div style="text-align:${b.align}"><img src="${url}" alt="Trophies" style="max-width:100%"></div>`;
    },
    md(b) {
      const url = `https://github-profile-trophy.vercel.app/?username=${b.username}&theme=${b.theme}&no-frame=true&row=${b.row}&column=${b.col}`;
      return `<div align="${b.align}">\n  <img src="${url}" />\n</div>`;
    },
    controls: [
      { type:'text',   k:'username', label:'GitHub Username' },
      { type:'select', k:'theme',    label:'Theme', opts:['radical','flat','onedark','gruvbox','dracula','juicyfresh','buddhism','monokai'] },
      { type:'range',  k:'row',      label:'Rows', min:1, max:3 },
      { type:'range',  k:'col',      label:'Columns', min:2, max:7 },
      { type:'select', k:'align',    label:'Align', opts:['left','center','right'] },
    ]
  },

  socials: {
    label: 'Social Links',
    cat: 'social',
    thumb: `<div class="thumb-social"><div class="thumb-soc"></div><div class="thumb-soc"></div><div class="thumb-soc"></div></div>`,
    defaults: () => ({ links:[], style:'for-the-badge', align:'center' }),
    html(b) {
      const badges = (b.links||[]).filter(l=>l.handle).map(l => {
        const m = SOCIAL_MAP[l.platform]; if (!m) return '';
        const url = `https://img.shields.io/badge/${encodeURIComponent(m.label)}-${m.color}?style=${b.style}&logo=${m.logo}&logoColor=white`;
        return `<a href="${m.base+l.handle}" target="_blank"><img src="${url}" alt="${m.label}" style="margin:3px;vertical-align:middle"></a>`;
      }).join('');
      if (!badges) return placeholder('Add social links in properties');
      return `<div style="text-align:${b.align};padding:4px 0">${badges}</div>`;
    },
    md(b) {
      const parts = (b.links||[]).filter(l=>l.handle).map(l => {
        const m = SOCIAL_MAP[l.platform]; if (!m) return '';
        const url = `https://img.shields.io/badge/${encodeURIComponent(m.label)}-${m.color}?style=${b.style}&logo=${m.logo}&logoColor=white`;
        return `[![${m.label}](${url})](${m.base+l.handle})`;
      }).filter(Boolean).join('\n');
      return b.align==='center' ? `<div align="center">\n${parts}\n</div>` : parts;
    },
    controls: [
      { type:'socials-editor', k:'links', label:'Links' },
      { type:'select', k:'style', label:'Badge Style', opts:['for-the-badge','flat','flat-square'] },
      { type:'select', k:'align', label:'Align', opts:['left','center','right'] },
    ]
  },

  views: {
    label: 'View Counter',
    cat: 'social',
    thumb: `<div style="padding:6px;font-size:10px;color:var(--text-3)">👁 profile views</div>`,
    defaults: () => ({ username:'', color:'5B6CF9', style:'for-the-badge', label:'Profile Views' }),
    html(b) {
      if (!b.username) return placeholder('Enter GitHub username in properties');
      const url = `https://komarev.com/ghpvc/?username=${b.username}&color=${b.color}&style=${b.style}&label=${encodeURIComponent(b.label)}`;
      return `<img src="${url}" alt="${b.label}" style="height:26px">`;
    },
    md(b) {
      const url = `https://komarev.com/ghpvc/?username=${b.username}&color=${b.color}&style=${b.style}&label=${encodeURIComponent(b.label)}`;
      return `![${b.label}](${url})`;
    },
    controls: [
      { type:'text',   k:'username', label:'GitHub Username' },
      { type:'color',  k:'color',    label:'Badge Color' },
      { type:'text',   k:'label',    label:'Label Text' },
      { type:'select', k:'style',    label:'Style', opts:['for-the-badge','flat','flat-square','plastic'] },
    ]
  },

  divider: {
    label: 'Divider',
    cat: 'layout',
    thumb: `<div style="width:100%;display:flex;align-items:center;justify-content:center;height:100%"><div class="thumb-divider" style="width:80%"></div></div>`,
    defaults: () => ({ style:'line' }),
    html(b) {
      if (b.style==='line')     return `<hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0">`;
      if (b.style==='wave')     return `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=60&section=footer" style="width:100%;display:block;margin:0" alt="">`;
      return `<div style="height:2px;background:linear-gradient(to right,#5B6CF9,#a78bfa,#5B6CF9);border-radius:1px;margin:16px 0"></div>`;
    },
    md(b) {
      if (b.style==='line')     return `---`;
      if (b.style==='wave')     return `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=80&section=footer" width="100%" />`;
      return `<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=4" width="100%" />`;
    },
    controls: [
      { type:'select', k:'style', label:'Style', opts:['line','wave','gradient'] },
    ]
  },

  custom: {
    label: 'Custom Markdown',
    cat: 'text',
    thumb: `<div class="thumb-code">&lt;/&gt;</div>`,
    defaults: () => ({ text:'> 💬 Add your custom markdown here\n\n**Bold text** and *italic*.' }),
    html(b) {
      return `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.6;padding:4px 0">${mdToHtml(b.text)}</div>`;
    },
    md(b) { return b.text; },
    controls: [
      { type:'textarea', k:'text', label:'Markdown Content', rows:8 },
    ]
  },

  svgicon: {
    label: 'SVG Icon',
    cat: 'content',
    thumb: `<div class="thumb-svg">◇</div>`,
    defaults: () => ({
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5B6CF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      width: 48, align: 'left', link: ''
    }),
    html(b) {
      return `<div style="text-align:${b.align};padding:4px 0">${b.svg}</div>`;
    },
    md(b) {
      const enc = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(b.svg)))}`;
      const img = `<img src="${enc}" width="${b.width}" height="${b.width}" alt="icon">`;
      return b.link ? `<a href="${b.link}">${img}</a>` : img;
    },
    controls: [
      { type:'textarea', k:'svg',   label:'SVG Code', rows:7 },
      { type:'range',    k:'width', label:'Size (px)', min:16, max:200 },
      { type:'select',   k:'align', label:'Align', opts:['left','center','right'] },
      { type:'text',     k:'link',  label:'Link URL (optional)' },
    ]
  },

};

// ── Helpers ───────────────────────────────────────────────────────
function STAT_THEMES() {
  return ['radical','dark','midnight-purple','cobalt','synthwave','highcontrast','dracula','tokyonight','onedark','github_dark','transparent'];
}

const SOCIAL_MAP = {
  github:    { label:'GitHub',    color:'181717', logo:'github',    base:'https://github.com/' },
  twitter:   { label:'Twitter',   color:'1DA1F2', logo:'twitter',   base:'https://twitter.com/' },
  linkedin:  { label:'LinkedIn',  color:'0A66C2', logo:'linkedin',  base:'https://linkedin.com/in/' },
  youtube:   { label:'YouTube',   color:'FF0000', logo:'youtube',   base:'https://youtube.com/@' },
  dev:       { label:'DEV',       color:'0A0A0A', logo:'devdotto',  base:'https://dev.to/' },
  instagram: { label:'Instagram', color:'E4405F', logo:'instagram', base:'https://instagram.com/' },
  website:   { label:'Website',   color:'000000', logo:'safari',    base:'' },
  discord:   { label:'Discord',   color:'5865F2', logo:'discord',   base:'https://discord.gg/' },
};

function placeholder(msg) {
  return `<div style="padding:12px 16px;background:#f9fafb;border:1px dashed #e0e0e0;border-radius:8px;text-align:center;color:#aaa;font-size:12px;font-family:system-ui">${msg}</div>`;
}

function escHtml(s) {
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function mdToHtml(md) {
  return (md||'')
    .replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/```[\w]*\n?([\s\S]*?)```/g, '<pre style="background:#f6f8fa;border-radius:6px;padding:10px;font-size:12px;overflow-x:auto"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code style="background:#f0f0f0;padding:1px 5px;border-radius:3px;font-size:.9em">$1</code>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.*$)/gm, '<h3 style="font-size:14px;margin:10px 0 4px">$1</h3>')
    .replace(/^## (.*$)/gm,  '<h2 style="font-size:16px;margin:12px 0 5px">$1</h2>')
    .replace(/^# (.*$)/gm,   '<h1 style="font-size:20px;margin:14px 0 6px">$1</h1>')
    .replace(/^> (.*$)/gm, '<blockquote style="border-left:3px solid #ddd;padding:4px 12px;color:#666;margin:6px 0">$1</blockquote>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%;height:auto">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#5B6CF9">$1</a>')
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #e0e0e0;margin:10px 0">')
    .replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
}

const CAT_LABELS = {
  header:  'Header',
  text:    'Text',
  content: 'Content',
  stats:   'Stats',
  social:  'Social',
  layout:  'Layout',
};

// ── State ─────────────────────────────────────────────────────────
const S = {
  blocks: [],
  sel: null,
  view: 'canvas',
  dragId: null,
  dragOverId: null,
};

let uid = 1;
function newId() { return `b${Date.now()}_${uid++}`; }

// ── DOM refs ──────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const $q = s => document.querySelector(s);
const $qa = s => document.querySelectorAll(s);

// ── Default blocks ────────────────────────────────────────────────
function loadDefaults() {
  const defaults = [
    { type: 'banner',  bannerType:'waving', colors:'6,11,20', text:'Your Name', size:42, fontColor:'fff', height:180, anim:'twinkling' },
    { type: 'typing',  lines:'Full Stack Developer;Open Source Enthusiast;Building cool things', color:'5B6CF9', font:'Fira+Code', width:435, pause:1000, align:'center' },
    { type: 'bio',     text:'👋 Hi! I\'m a developer passionate about creating tools that help people. I love open source and learning new technologies.', align:'center', bold:false, italic:false },
    { type: 'skills',  icons:['javascript','typescript','react','nodejs','python','docker'], style:'for-the-badge', align:'center', gap:4 },
    { type: 'divider', style:'line' },
    { type: 'stats',   username:'', theme:'radical', showIcons:true, hideBorder:true, countPrivate:true, width:49, align:'center' },
    { type: 'streak',  username:'', theme:'radical', hideBorder:true, width:60, align:'center' },
  ];

  defaults.forEach(d => {
    const def = BLOCK_REGISTRY[d.type];
    if (!def) return;
    S.blocks.push({ ...def.defaults(), ...d, id: newId() });
  });
}

// ── Boot ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildLibrary();
  bindToolbar();
  loadDefaults();
  renderCanvas();
});

// ── Library Panel ─────────────────────────────────────────────────
function buildLibrary() {
  const cats = ['all', ...Object.keys(CAT_LABELS)];
  const catsEl = $('lib-cats');
  cats.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'lib-cat' + (c==='all'?' active':'');
    btn.dataset.cat = c;
    btn.textContent = c==='all' ? 'All' : CAT_LABELS[c];
    btn.onclick = () => {
      $qa('#lib-cats .lib-cat').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterLibrary(c, $('lib-search').value);
    };
    catsEl.appendChild(btn);
  });

  $('lib-search').addEventListener('input', e => {
    const activeCat = $q('#lib-cats .lib-cat.active')?.dataset.cat || 'all';
    filterLibrary(activeCat, e.target.value);
  });

  filterLibrary('all', '');
}

function filterLibrary(cat, search) {
  const body = $('lib-body');
  body.innerHTML = '';
  const q = (search||'').toLowerCase();

  const groups = {};
  Object.entries(BLOCK_REGISTRY).forEach(([id, def]) => {
    if (cat !== 'all' && def.cat !== cat) return;
    if (q && !def.label.toLowerCase().includes(q) && !def.cat.includes(q)) return;
    if (!groups[def.cat]) groups[def.cat] = [];
    groups[def.cat].push({ id, def });
  });

  if (!Object.keys(groups).length) {
    body.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-3);font-size:12px">No blocks match</div>';
    return;
  }

  Object.entries(groups).forEach(([c, items]) => {
    const section = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'lib-section-title';
    title.textContent = CAT_LABELS[c] || c;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'lib-grid';

    items.forEach(({ id, def }) => {
      const card = document.createElement('div');
      card.className = 'lib-block';
      card.draggable = true;
      card.dataset.blockType = id;
      card.innerHTML = `<div class="lib-block-thumb">${def.thumb}</div><div class="lib-block-name">${def.label}</div>`;

      card.addEventListener('click', () => addBlock(id));
      card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('blockType', id);
        e.dataTransfer.effectAllowed = 'copy';
      });

      grid.appendChild(card);
    });

    section.appendChild(grid);
    body.appendChild(section);
  });
}

// ── Add / Remove Blocks ───────────────────────────────────────────
function addBlock(typeId, afterId) {
  const def = BLOCK_REGISTRY[typeId];
  if (!def) return;
  const block = { ...def.defaults(), id: newId(), type: typeId };
  if (afterId) {
    const idx = S.blocks.findIndex(b => b.id === afterId);
    S.blocks.splice(idx+1, 0, block);
  } else {
    S.blocks.push(block);
  }
  S.sel = block.id;
  renderCanvas();
  renderProps();
}

function removeBlock(id) {
  S.blocks = S.blocks.filter(b => b.id !== id);
  if (S.sel === id) { S.sel = null; }
  renderCanvas();
  renderProps();
}

function duplicateBlock(id) {
  const src = S.blocks.find(b => b.id === id);
  if (!src) return;
  const copy = { ...JSON.parse(JSON.stringify(src)), id: newId() };
  const idx = S.blocks.findIndex(b => b.id === id);
  S.blocks.splice(idx+1, 0, copy);
  S.sel = copy.id;
  renderCanvas();
  renderProps();
}

// ── Canvas ────────────────────────────────────────────────────────
function renderCanvas() {
  const frame = $('canvas-blocks');
  const empty = $('canvas-empty');
  frame.innerHTML = '';

  if (!S.blocks.length) {
    empty.style.display = 'flex';
    // Canvas drop zone when empty
    frame.addEventListener('dragover', e => { e.preventDefault(); }, { once:false });
    frame.addEventListener('drop', e => {
      e.preventDefault();
      const t = e.dataTransfer.getData('blockType');
      if (t) addBlock(t);
    }, { once:false });
    return;
  }
  empty.style.display = 'none';

  S.blocks.forEach((block, i) => {
    const def = BLOCK_REGISTRY[block.type];
    if (!def) return;

    const wrap = document.createElement('div');
    wrap.className = 'cv-block' + (S.sel === block.id ? ' selected' : '');
    wrap.dataset.id = block.id;

    // Content
    const content = document.createElement('div');
    content.className = 'cv-content';
    try { content.innerHTML = def.html(block); } catch(e) { content.innerHTML = placeholder('Render error'); }
    wrap.appendChild(content);

    // Drag handle
    const handle = document.createElement('div');
    handle.className = 'drag-handle';
    handle.innerHTML = `<svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor"><circle cx="3" cy="3" r="1.5"/><circle cx="7" cy="3" r="1.5"/><circle cx="3" cy="8" r="1.5"/><circle cx="7" cy="8" r="1.5"/><circle cx="3" cy="13" r="1.5"/><circle cx="7" cy="13" r="1.5"/></svg>`;
    handle.title = 'Drag to reorder';
    wrap.appendChild(handle);

    // Controls
    const ctrls = document.createElement('div');
    ctrls.className = 'block-controls';
    ctrls.innerHTML = `
      <button class="block-ctrl" title="Duplicate" onclick="duplicateBlock('${block.id}')">⧉</button>
      <button class="block-ctrl block-ctrl-del" title="Delete" onclick="removeBlock('${block.id}')">×</button>
    `;
    wrap.appendChild(ctrls);

    // Drop indicator
    const dropLine = document.createElement('div');
    dropLine.className = 'drop-line';
    dropLine.dataset.dropAfter = block.id;
    wrap.appendChild(dropLine);

    // Select on click
    wrap.addEventListener('click', e => {
      if (e.target.closest('.block-ctrl')) return;
      S.sel = block.id;
      $qa('.cv-block').forEach(b => b.classList.remove('selected'));
      wrap.classList.add('selected');
      renderProps();
    });

    // Drag to reorder
    wrap.draggable = true;
    wrap.addEventListener('dragstart', e => {
      S.dragId = block.id;
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => wrap.style.opacity = '0.4', 0);
    });
    wrap.addEventListener('dragend', () => {
      wrap.style.opacity = '';
      S.dragId = null;
      $qa('.drop-line').forEach(l => l.classList.remove('active'));
    });
    wrap.addEventListener('dragover', e => {
      e.preventDefault();
      if (!S.dragId || S.dragId === block.id) return;
      $qa('.drop-line').forEach(l => l.classList.remove('active'));
      dropLine.classList.add('active');
    });
    wrap.addEventListener('drop', e => {
      e.preventDefault();
      dropLine.classList.remove('active');
      const fromType = e.dataTransfer.getData('blockType');
      if (fromType) {
        // New block from library dropped here
        addBlock(fromType, block.id);
        return;
      }
      if (!S.dragId || S.dragId === block.id) return;
      const fromIdx = S.blocks.findIndex(b => b.id === S.dragId);
      const toIdx   = S.blocks.findIndex(b => b.id === block.id);
      if (fromIdx < 0 || toIdx < 0) return;
      const [moved] = S.blocks.splice(fromIdx, 1);
      const insertAt = fromIdx < toIdx ? toIdx : toIdx + 1;
      S.blocks.splice(insertAt, 0, moved);
      renderCanvas();
    });

    frame.appendChild(wrap);
  });

  // Canvas-level drop (new blocks from library)
  frame.addEventListener('dragover', e => e.preventDefault());
  frame.addEventListener('drop', e => {
    e.preventDefault();
    const t = e.dataTransfer.getData('blockType');
    if (t && !e.target.closest('.cv-block')) addBlock(t);
  });
}

// ── Properties Panel ──────────────────────────────────────────────
function renderProps() {
  const propsEmpty = $('props-empty');
  const propsBody  = $('props-body');
  const propsTitle = $('props-title');
  const propsType  = $('props-type');

  if (!S.sel) {
    propsEmpty.style.display = 'flex';
    propsBody.style.display  = 'none';
    propsTitle.textContent   = 'Properties';
    propsType.textContent    = '';
    return;
  }

  const block = S.blocks.find(b => b.id === S.sel);
  if (!block) { S.sel = null; renderProps(); return; }
  const def = BLOCK_REGISTRY[block.type];

  propsEmpty.style.display = 'none';
  propsBody.style.display  = 'block';
  propsTitle.textContent   = def.label;
  propsType.textContent    = CAT_LABELS[def.cat] || def.cat;

  propsBody.innerHTML = '';

  // Group controls by section (every 3–4 controls = one section, or use flat)
  const section = document.createElement('div');
  section.className = 'prop-section open';
  section.innerHTML = `<div class="prop-section-head"><span class="prop-section-label">Content</span><span class="prop-section-ch">›</span></div>`;

  const body = document.createElement('div');
  body.className = 'prop-section-body';

  def.controls.forEach(ctrl => {
    const field = buildControl(ctrl, block);
    if (field) body.appendChild(field);
  });

  section.querySelector('.prop-section-head').addEventListener('click', () => {
    section.classList.toggle('open');
    body.classList.toggle('coll');
  });
  section.appendChild(body);
  propsBody.appendChild(section);
}

// ── Control Builders ──────────────────────────────────────────────
function buildControl(ctrl, block) {
  const { type, k, label, opts, min, max, rows } = ctrl;
  const field = document.createElement('div');
  field.className = 'ctrl-field';

  function lbl() {
    const l = document.createElement('label');
    l.className = 'ctrl-label';
    l.textContent = label;
    return l;
  }

  function onChange(val) {
    block[k] = val;
    refreshBlockCanvas(block.id);
    generateMarkdownFromBlocks(); // update md view if visible
  }

  switch (type) {
    case 'text': {
      field.appendChild(lbl());
      const inp = document.createElement('input');
      inp.type = 'text'; inp.className = 'ctrl-input'; inp.value = block[k] || '';
      inp.addEventListener('input', () => onChange(inp.value));
      field.appendChild(inp);
      break;
    }
    case 'textarea': {
      field.appendChild(lbl());
      const ta = document.createElement('textarea');
      ta.className = 'ctrl-input ctrl-textarea'; ta.rows = rows||4; ta.value = block[k] || '';
      ta.addEventListener('input', () => onChange(ta.value));
      field.appendChild(ta);
      break;
    }
    case 'select': {
      field.appendChild(lbl());
      const sel = document.createElement('select');
      sel.className = 'ctrl-input ctrl-select';
      (opts||[]).forEach(o => {
        const opt = document.createElement('option');
        opt.value = o; opt.textContent = o;
        if (block[k] === o) opt.selected = true;
        sel.appendChild(opt);
      });
      sel.addEventListener('change', () => onChange(sel.value));
      field.appendChild(sel);
      break;
    }
    case 'range': {
      field.appendChild(lbl());
      const wrap = document.createElement('div');
      wrap.className = 'ctrl-range-wrap';
      const range = document.createElement('input');
      range.type = 'range'; range.className = 'ctrl-range';
      range.min = min||0; range.max = max||100; range.value = block[k] ?? 50;
      const val = document.createElement('span');
      val.className = 'ctrl-range-val'; val.textContent = range.value;
      range.addEventListener('input', () => { val.textContent = range.value; onChange(parseInt(range.value)); });
      wrap.appendChild(range); wrap.appendChild(val);
      field.appendChild(wrap);
      break;
    }
    case 'color': {
      field.appendChild(lbl());
      const wrap = document.createElement('div');
      wrap.className = 'ctrl-color-wrap';
      const swatch = document.createElement('div');
      swatch.className = 'ctrl-color-swatch';
      const cp = document.createElement('input');
      cp.type = 'color';
      const hex = (block[k]||'5B6CF9').replace('#','');
      cp.value = '#' + hex.padStart(6,'0');
      swatch.appendChild(cp);
      const hexInp = document.createElement('input');
      hexInp.type = 'text'; hexInp.className = 'ctrl-input ctrl-color-hex';
      hexInp.value = hex; hexInp.placeholder = 'hex';
      cp.addEventListener('input', () => {
        const v = cp.value.replace('#','');
        hexInp.value = v;
        onChange(v);
      });
      hexInp.addEventListener('input', () => {
        const v = hexInp.value.replace('#','').slice(0,6);
        if (v.length===3||v.length===6) { cp.value='#'+v; onChange(v); }
      });
      wrap.appendChild(swatch); wrap.appendChild(hexInp);
      field.appendChild(wrap);
      break;
    }
    case 'toggle': {
      const row = document.createElement('div');
      row.className = 'ctrl-toggle-row';
      const lbl2 = document.createElement('span');
      lbl2.className = 'ctrl-toggle-lbl'; lbl2.textContent = label;
      const tog = document.createElement('input');
      tog.type = 'checkbox'; tog.className = 'ctrl-toggle';
      tog.checked = !!block[k];
      tog.addEventListener('change', () => onChange(tog.checked));
      row.appendChild(lbl2); row.appendChild(tog);
      field.appendChild(row);
      break;
    }
    case 'icon-picker': {
      field.appendChild(lbl());
      field.appendChild(buildIconPicker(block, k));
      break;
    }
    case 'socials-editor': {
      field.appendChild(lbl());
      field.appendChild(buildSocialsEditor(block, k));
      break;
    }
    default:
      return null;
  }

  return field;
}

// ── Icon Picker (mini) ────────────────────────────────────────────
function buildIconPicker(block, k) {
  const wrap = document.createElement('div');
  let iconSearch = '';

  const searchRow = document.createElement('div');
  searchRow.className = 'mini-icon-search';
  const searchInp = document.createElement('input');
  searchInp.type = 'text'; searchInp.className = 'ctrl-input'; searchInp.placeholder = 'Search icons…';
  searchRow.appendChild(searchInp);

  const grid = document.createElement('div');
  grid.className = 'mini-icon-grid';

  const selected = document.createElement('div');
  selected.className = 'selected-icons';

  function renderMiniGrid() {
    const q = iconSearch.toLowerCase();
    grid.innerHTML = '';
    const allIcons = typeof ICONS !== 'undefined' ? ICONS : [];
    allIcons.filter(ico => !q || (ico.label||ico.name).toLowerCase().includes(q) || ico.id.includes(q)).slice(0,60).forEach(ico => {
      const chip = document.createElement('button');
      chip.className = 'mini-chip' + ((block[k]||[]).includes(ico.id)?' sel':'');
      chip.textContent = ico.label || ico.name;
      chip.title = ico.n;
      chip.addEventListener('click', () => {
        const arr = block[k] || [];
        const idx = arr.indexOf(ico.id);
        if (idx===-1) arr.push(ico.id); else arr.splice(idx,1);
        block[k] = arr;
        renderMiniGrid();
        renderSelectedIcons();
        refreshBlockCanvas(block.id);
      });
      grid.appendChild(chip);
    });
  }

  function renderSelectedIcons() {
    selected.innerHTML = '';
    (block[k]||[]).forEach(id => {
      const ico = (typeof ICONS !== 'undefined' ? ICONS : []).find(i=>i.id===id);
      if (!ico) return;
      const tag = document.createElement('span');
      tag.className = 'sel-icon-tag';
      tag.innerHTML = `${ico.label||ico.name}<span class="sel-icon-rm" data-id="${id}">×</span>`;
      tag.querySelector('.sel-icon-rm').addEventListener('click', () => {
        block[k] = (block[k]||[]).filter(x=>x!==id);
        renderMiniGrid();
        renderSelectedIcons();
        refreshBlockCanvas(block.id);
      });
      selected.appendChild(tag);
    });
    if (!(block[k]||[]).length) selected.innerHTML = '<span style="font-size:11px;color:var(--text-3)">None selected</span>';
  }

  searchInp.addEventListener('input', () => { iconSearch = searchInp.value; renderMiniGrid(); });
  renderMiniGrid();
  renderSelectedIcons();

  wrap.appendChild(searchRow);
  wrap.appendChild(grid);
  wrap.appendChild(selected);
  return wrap;
}

// ── Socials Editor ────────────────────────────────────────────────
function buildSocialsEditor(block, k) {
  const wrap = document.createElement('div');
  wrap.className = 'socials-editor';

  function render() {
    wrap.innerHTML = '';
    const links = block[k] || [];

    links.forEach((link, i) => {
      const row = document.createElement('div');
      row.className = 'social-row';

      const plat = document.createElement('select');
      plat.className = 'ctrl-input social-platform ctrl-select';
      Object.keys(SOCIAL_MAP).forEach(p => {
        const opt = document.createElement('option');
        opt.value = p; opt.textContent = SOCIAL_MAP[p].label;
        if (link.platform === p) opt.selected = true;
        plat.appendChild(opt);
      });
      plat.addEventListener('change', () => { links[i].platform = plat.value; refreshBlockCanvas(block.id); });

      const handle = document.createElement('input');
      handle.type = 'text'; handle.className = 'ctrl-input social-handle';
      handle.placeholder = 'username'; handle.value = link.handle || '';
      handle.addEventListener('input', () => { links[i].handle = handle.value; refreshBlockCanvas(block.id); });

      const rm = document.createElement('button');
      rm.className = 'social-rm'; rm.innerHTML = '×';
      rm.addEventListener('click', () => { links.splice(i,1); block[k] = links; render(); refreshBlockCanvas(block.id); });

      row.appendChild(plat); row.appendChild(handle); row.appendChild(rm);
      wrap.appendChild(row);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'btn-add-social';
    addBtn.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add Social Link';
    addBtn.addEventListener('click', () => {
      links.push({ platform: 'github', handle: '' });
      block[k] = links;
      render();
    });
    wrap.appendChild(addBtn);
  }

  render();
  return wrap;
}

// ── Refresh block in canvas without full rerender ─────────────────
function refreshBlockCanvas(id) {
  const block = S.blocks.find(b => b.id === id);
  if (!block) return;
  const def = BLOCK_REGISTRY[block.type];
  if (!def) return;
  const wrap = document.querySelector(`.cv-block[data-id="${id}"]`);
  if (!wrap) { renderCanvas(); return; }
  const content = wrap.querySelector('.cv-content');
  if (!content) { renderCanvas(); return; }
  try { content.innerHTML = def.html(block); } catch(e) {}
  generateMarkdownFromBlocks();
}

// ── Markdown generation ───────────────────────────────────────────
function generateMarkdownFromBlocks() {
  const md = S.blocks.map(b => {
    const def = BLOCK_REGISTRY[b.type];
    if (!def) return '';
    try { return def.md(b); } catch(e) { return ''; }
  }).filter(Boolean).join('\n\n');

  if (S.view === 'markdown') {
    $('md-view').textContent = md;
  }

  return md;
}

// ── Toolbar ───────────────────────────────────────────────────────
function bindToolbar() {
  $('view-canvas').addEventListener('click', () => setView('canvas'));
  $('view-markdown').addEventListener('click', () => setView('markdown'));

  $('btn-copy').addEventListener('click', async () => {
    const md = generateMarkdownFromBlocks();
    const btn = $('btn-copy');
    try {
      await navigator.clipboard.writeText(md);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = md; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
    }
    btn.textContent = '✓ Copied!';
    btn.classList.add('ok');
    setTimeout(() => { btn.textContent = 'Copy Markdown'; btn.classList.remove('ok'); }, 2000);
  });

  $('btn-dl').addEventListener('click', () => {
    const md = generateMarkdownFromBlocks();
    const blob = new Blob([md], { type:'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'README.md';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

function setView(v) {
  S.view = v;
  $qa('.tab-pill').forEach(b => b.classList.remove('active'));
  $(`view-${v}`).classList.add('active');
  const canvasScroll = $('canvas-scroll');
  const mdView = $('md-view');
  if (v === 'canvas') {
    canvasScroll.style.display = 'flex';
    mdView.style.display = 'none';
  } else {
    canvasScroll.style.display = 'none';
    mdView.style.display = 'block';
    mdView.textContent = generateMarkdownFromBlocks();
  }
}

// expose for onclick attributes
window.removeBlock    = removeBlock;
window.duplicateBlock = duplicateBlock;
