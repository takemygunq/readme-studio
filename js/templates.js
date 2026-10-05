/* ============================================================
   README TEMPLATES
   Each function receives the app state and returns a markdown string.
   ============================================================ */

function skillBadges(skills) {
  if (!skills.length) return '';
  return skills.map(id => {
    const ico = getIcon(id);
    if (!ico) return '';
    return `[![${ico.label || ico.name}](${badgeUrl(ico)})](https://img.shields.io)`;
  }).join('\n');
}

function statsBlock(s) {
  if (!s.stats.enabled || !s.identity.username) return '';
  const u = s.identity.username;
  const th = s.stats.theme;
  let out = '';
  out += `<p align="center">\n`;
  out += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${th}&hide_border=true&count_private=true" width="48%" />\n`;
  if (s.stats.langs) {
    out += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${th}&hide_border=true" width="48%" />\n`;
  }
  out += `</p>\n`;
  if (s.stats.streak) {
    out += `<p align="center">\n`;
    out += `  <img src="https://streak-stats.demolab.com?user=${u}&theme=${th}&hide_border=true" width="60%" />\n`;
    out += `</p>\n`;
  }
  if (s.stats.trophy) {
    out += `<p align="center">\n`;
    out += `  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=${th}&no-frame=true&row=1&column=6" />\n`;
    out += `</p>\n`;
  }
  return out;
}

function typingLine(lines, color = 'F59E0B') {
  if (!lines) return '';
  const enc = encodeURIComponent(lines);
  return `[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&pause=1000&color=${color}&center=true&vCenter=true&width=480&lines=${enc})](https://git.io/typing-svg)`;
}

function socialBadge(platform, handle) {
  const map = {
    github:    { color:'181717', logo:'github',    base:'https://github.com/',          label:'GitHub' },
    twitter:   { color:'1DA1F2', logo:'twitter',   base:'https://twitter.com/',         label:'Twitter' },
    linkedin:  { color:'0A66C2', logo:'linkedin',  base:'https://linkedin.com/in/',     label:'LinkedIn' },
    youtube:   { color:'FF0000', logo:'youtube',   base:'https://youtube.com/@',        label:'YouTube' },
    website:   { color:'000000', logo:'safari',    base:'',                             label:'Website' },
    dev:       { color:'0A0A0A', logo:'devdotto',  base:'https://dev.to/',              label:'DEV' },
    instagram: { color:'E4405F', logo:'instagram', base:'https://instagram.com/',       label:'Instagram' },
  };
  const m = map[platform];
  if (!m || !handle) return '';
  const url = handle.startsWith('http') ? handle : m.base + handle;
  return `[![${m.label}](https://img.shields.io/badge/${m.label}-${m.color}?style=for-the-badge&logo=${m.logo}&logoColor=white)](${url})`;
}

function socialsRow(socials) {
  return Object.entries(socials)
    .map(([k, v]) => socialBadge(k, v))
    .filter(Boolean)
    .join('\n');
}

function viewsBadge(username) {
  if (!username) return '';
  return `![Profile Views](https://komarev.com/ghpvc/?username=${username}&color=F59E0B&style=for-the-badge)`;
}

// -----------------------------------------------
// TEMPLATE: MINIMAL
// -----------------------------------------------
function tplMinimal(s) {
  const { name, username, title, bio, location } = s.identity;
  const lines = [];

  lines.push(`# Hi, I'm ${name || 'Your Name'} 👋`);
  lines.push('');
  if (title) lines.push(`**${title}**`);
  if (location) lines.push(`📍 ${location}`);
  if (bio) { lines.push(''); lines.push(bio); }

  if (s.skills.length) {
    lines.push('');
    lines.push('## Tech Stack');
    lines.push('');
    lines.push(skillBadges(s.skills));
  }

  const soc = socialsRow(s.socials);
  if (soc) {
    lines.push('');
    lines.push('## Connect');
    lines.push('');
    lines.push(soc);
  }

  if (s.stats.enabled && username) {
    lines.push('');
    lines.push('## GitHub Stats');
    lines.push('');
    lines.push(statsBlock(s));
  }

  if (s.extras.views && username) {
    lines.push('');
    lines.push(viewsBadge(username));
  }

  return lines.join('\n');
}

// -----------------------------------------------
// TEMPLATE: PRO
// -----------------------------------------------
function tplPro(s) {
  const { name, username, title, bio, location } = s.identity;
  const typingText = s.extras.typingLines || (title ? title : '');
  const lines = [];

  lines.push('<div align="center">');
  lines.push('');
  lines.push(`  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=${encodeURIComponent(name || 'Hello World')}&fontSize=48&fontColor=fff&animation=twinkling&fontAlignY=38" width="100%" />`);
  lines.push('');
  if (typingText) { lines.push('  ' + typingLine(typingText)); lines.push(''); }
  if (s.extras.views && username) { lines.push('  ' + viewsBadge(username)); lines.push(''); }
  lines.push('</div>');
  lines.push('');

  lines.push('## 👤 About Me');
  lines.push('');
  if (title) lines.push(`- 🚀 ${title}`);
  if (location) lines.push(`- 📍 ${location}`);
  if (s.identity.email) lines.push(`- 📫 ${s.identity.email}`);
  if (bio) { lines.push(''); lines.push(bio); }

  if (s.skills.length) {
    lines.push('');
    lines.push('## 🛠 Tech Stack');
    lines.push('');
    lines.push(skillBadges(s.skills));
  }

  const soc = socialsRow(s.socials);
  if (soc) {
    lines.push('');
    lines.push('## 🤝 Connect with me');
    lines.push('');
    lines.push(soc);
  }

  if (s.stats.enabled && username) {
    lines.push('');
    lines.push('## 📊 GitHub Stats');
    lines.push('');
    lines.push(statsBlock(s));
  }

  lines.push('');
  lines.push('<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" />');

  return lines.join('\n');
}

// -----------------------------------------------
// TEMPLATE: HACKER / TERMINAL
// -----------------------------------------------
function tplHacker(s) {
  const { name, username, title, bio, location } = s.identity;
  const lines = [];

  lines.push('<div align="center">');
  lines.push('');
  lines.push(`  <img src="https://capsule-render.vercel.app/api?type=rect&color=0d1117&height=120&text=${encodeURIComponent(name || 'dev')}&fontColor=00FF41&fontSize=40&fontAlign=50&animation=blinking" width="100%" />`);
  lines.push('');
  if (s.extras.typingLines) {
    lines.push('  ' + typingLine(s.extras.typingLines, '00FF41'));
    lines.push('');
  }
  lines.push('</div>');
  lines.push('');

  lines.push('```bash');
  lines.push(`$ whoami`);
  lines.push(`> ${name || 'hacker'}${title ? ' — ' + title : ''}`);
  if (location) { lines.push(`$ pwd`); lines.push(`> ${location}`); }
  if (bio) { lines.push(`$ cat README.txt`); lines.push(`> ${bio}`); }
  if (s.skills.length) {
    lines.push(`$ ls ~/tools`);
    lines.push(`> ${s.skills.map(id => { const i = getIcon(id); return i ? (i.label || i.name) : id; }).join('  ')}`);
  }
  lines.push('```');

  if (s.skills.length) {
    lines.push('');
    lines.push('## ⚙ Stack');
    lines.push('');
    lines.push(skillBadges(s.skills));
  }

  if (s.stats.enabled && username) {
    lines.push('');
    lines.push('## 📡 Activity');
    lines.push('');
    lines.push(statsBlock(s));
  }

  const soc = socialsRow(s.socials);
  if (soc) {
    lines.push('');
    lines.push('## 🔗 Links');
    lines.push('');
    lines.push(soc);
  }

  if (s.extras.views && username) {
    lines.push('');
    lines.push(viewsBadge(username));
  }

  return lines.join('\n');
}

// -----------------------------------------------
// TEMPLATE: CREATIVE / COLORFUL
// -----------------------------------------------
function tplCreative(s) {
  const { name, username, title, bio, location } = s.identity;
  const lines = [];

  lines.push('<div align="center">');
  lines.push('');
  lines.push(`  <img src="https://capsule-render.vercel.app/api?type=shark&color=gradient&customColorList=24,30&height=140&section=header&text=${encodeURIComponent('✨ ' + (name || 'Creative Dev'))}&fontSize=40&fontColor=fff&animation=fadeIn&fontAlignY=55" width="100%" />`);
  lines.push('');
  if (s.extras.typingLines) {
    lines.push('  ' + typingLine(s.extras.typingLines, 'FF6BCB'));
    lines.push('');
  }
  lines.push('  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=2000&color=A78BFA&center=true&vCenter=true&width=435&lines=Welcome+to+my+profile!+%F0%9F%8C%9F" />');
  lines.push('');
  lines.push('</div>');
  lines.push('');

  lines.push('### 🌟 About Me');
  lines.push('');
  if (title) lines.push(`> ${title}`);
  if (location) lines.push(`> 📍 ${location}`);
  if (bio) { lines.push(''); lines.push(bio); }

  lines.push('');
  lines.push('### ✨ What I love');
  lines.push('');
  lines.push('```');
  lines.push('🎨 Design    ⚡ Performance    🧩 Clean Code    🚀 Open Source');
  lines.push('```');

  if (s.skills.length) {
    lines.push('');
    lines.push('### 💜 Tech I use');
    lines.push('');
    lines.push(skillBadges(s.skills));
  }

  if (s.stats.enabled && username) {
    lines.push('');
    lines.push('### 🔥 My Stats');
    lines.push('');
    lines.push(statsBlock(s));
  }

  const soc = socialsRow(s.socials);
  if (soc) {
    lines.push('');
    lines.push('### 💌 Find me online');
    lines.push('');
    lines.push(soc);
  }

  if (s.extras.views && username) {
    lines.push('');
    lines.push(viewsBadge(username));
  }

  lines.push('');
  lines.push('<img src="https://capsule-render.vercel.app/api?type=shark&color=gradient&customColorList=24,30&height=100&section=footer" width="100%" />');

  return lines.join('\n');
}

// -----------------------------------------------
// TEMPLATE: EXECUTIVE / FOUNDER
// -----------------------------------------------
function tplExec(s) {
  const { name, username, title, bio, location } = s.identity;
  const lines = [];

  lines.push('<div align="center">');
  lines.push('');
  lines.push(`  <h1>${name || 'Your Name'}</h1>`);
  if (title) lines.push(`  <p><em>${title}</em></p>`);
  if (location) lines.push(`  <p>📍 ${location}</p>`);
  lines.push('');
  const soc = socialsRow(s.socials);
  if (soc) lines.push(soc);
  if (s.extras.views && username) { lines.push(''); lines.push(viewsBadge(username)); }
  lines.push('');
  lines.push('</div>');

  lines.push('');
  lines.push('---');
  lines.push('');

  if (bio) {
    lines.push(bio);
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  if (s.skills.length) {
    lines.push('### 💼 Technology');
    lines.push('');
    lines.push(skillBadges(s.skills));
    lines.push('');
  }

  if (s.stats.enabled && username) {
    lines.push('### 📈 Contribution');
    lines.push('');
    lines.push(statsBlock(s));
  }

  return lines.join('\n');
}

// -----------------------------------------------
// DISPATCHER
// -----------------------------------------------
function generateMarkdown(state) {
  switch (state.template) {
    case 'minimal':  return tplMinimal(state);
    case 'hacker':   return tplHacker(state);
    case 'creative': return tplCreative(state);
    case 'exec':     return tplExec(state);
    default:         return tplPro(state);
  }
}
