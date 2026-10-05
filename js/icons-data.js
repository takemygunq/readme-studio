/* ============================================================
   ICONS DATA — shields.io compatible entries
   { id, name, color (badge bg), logoColor, logo (shields id), category }
   ============================================================ */
const ICONS = [
  // --- Languages ---
  { id:'javascript', name:'JavaScript',  color:'F7DF1E', logoColor:'000000', logo:'javascript',       cat:'lang' },
  { id:'typescript', name:'TypeScript',  color:'3178C6', logoColor:'ffffff', logo:'typescript',       cat:'lang' },
  { id:'python',     name:'Python',      color:'3776AB', logoColor:'ffffff', logo:'python',           cat:'lang' },
  { id:'rust',       name:'Rust',        color:'000000', logoColor:'ffffff', logo:'rust',             cat:'lang' },
  { id:'go',         name:'Go',          color:'00ADD8', logoColor:'ffffff', logo:'go',               cat:'lang' },
  { id:'java',       name:'Java',        color:'ED8B00', logoColor:'ffffff', logo:'openjdk',          cat:'lang' },
  { id:'kotlin',     name:'Kotlin',      color:'7F52FF', logoColor:'ffffff', logo:'kotlin',           cat:'lang' },
  { id:'swift',      name:'Swift',       color:'F05138', logoColor:'ffffff', logo:'swift',            cat:'lang' },
  { id:'csharp',     name:'C%23',        color:'239120', logoColor:'ffffff', logo:'csharp',           cat:'lang', label:'C#' },
  { id:'cpp',        name:'C%2B%2B',     color:'00599C', logoColor:'ffffff', logo:'cplusplus',        cat:'lang', label:'C++' },
  { id:'c',          name:'C',           color:'A8B9CC', logoColor:'000000', logo:'c',                cat:'lang' },
  { id:'ruby',       name:'Ruby',        color:'CC342D', logoColor:'ffffff', logo:'ruby',             cat:'lang' },
  { id:'php',        name:'PHP',         color:'777BB4', logoColor:'ffffff', logo:'php',              cat:'lang' },
  { id:'elixir',     name:'Elixir',      color:'4B275F', logoColor:'ffffff', logo:'elixir',           cat:'lang' },
  { id:'haskell',    name:'Haskell',     color:'5D4F85', logoColor:'ffffff', logo:'haskell',          cat:'lang' },
  { id:'scala',      name:'Scala',       color:'DC322F', logoColor:'ffffff', logo:'scala',            cat:'lang' },
  { id:'dart',       name:'Dart',        color:'0175C2', logoColor:'ffffff', logo:'dart',             cat:'lang' },
  { id:'lua',        name:'Lua',         color:'2C2D72', logoColor:'ffffff', logo:'lua',              cat:'lang' },
  { id:'r',          name:'R',           color:'276DC3', logoColor:'ffffff', logo:'r',                cat:'lang' },
  { id:'solidity',   name:'Solidity',    color:'363636', logoColor:'ffffff', logo:'solidity',         cat:'lang' },
  // --- Frontend ---
  { id:'react',      name:'React',       color:'20232A', logoColor:'61DAFB', logo:'react',            cat:'frontend' },
  { id:'vuejs',      name:'Vue.js',      color:'35495E', logoColor:'4FC08D', logo:'vuedotjs',         cat:'frontend' },
  { id:'angular',    name:'Angular',     color:'DD0031', logoColor:'ffffff', logo:'angular',          cat:'frontend' },
  { id:'svelte',     name:'Svelte',      color:'FF3E00', logoColor:'ffffff', logo:'svelte',           cat:'frontend' },
  { id:'nextjs',     name:'Next.js',     color:'000000', logoColor:'ffffff', logo:'nextdotjs',        cat:'frontend' },
  { id:'nuxtjs',     name:'Nuxt.js',     color:'00C58E', logoColor:'ffffff', logo:'nuxtdotjs',        cat:'frontend' },
  { id:'astro',      name:'Astro',       color:'FF5D01', logoColor:'ffffff', logo:'astro',            cat:'frontend' },
  { id:'remix',      name:'Remix',       color:'000000', logoColor:'ffffff', logo:'remix',            cat:'frontend' },
  { id:'gatsby',     name:'Gatsby',      color:'663399', logoColor:'ffffff', logo:'gatsby',           cat:'frontend' },
  { id:'vite',       name:'Vite',        color:'646CFF', logoColor:'ffffff', logo:'vite',             cat:'frontend' },
  { id:'tailwind',   name:'Tailwind',    color:'06B6D4', logoColor:'ffffff', logo:'tailwindcss',      cat:'frontend', label:'Tailwind CSS' },
  { id:'sass',       name:'Sass',        color:'CC6699', logoColor:'ffffff', logo:'sass',             cat:'frontend' },
  { id:'styledcomponents', name:'styled-components', color:'DB7093', logoColor:'ffffff', logo:'styledcomponents', cat:'frontend' },
  { id:'redux',      name:'Redux',       color:'764ABC', logoColor:'ffffff', logo:'redux',            cat:'frontend' },
  { id:'threejs',    name:'Three.js',    color:'000000', logoColor:'ffffff', logo:'threedotjs',       cat:'frontend' },
  { id:'webgl',      name:'WebGL',       color:'990000', logoColor:'ffffff', logo:'webgl',            cat:'frontend' },
  // --- Backend ---
  { id:'nodejs',     name:'Node.js',     color:'339933', logoColor:'ffffff', logo:'nodedotjs',        cat:'backend' },
  { id:'express',    name:'Express',     color:'000000', logoColor:'ffffff', logo:'express',          cat:'backend' },
  { id:'nestjs',     name:'NestJS',      color:'E0234E', logoColor:'ffffff', logo:'nestjs',           cat:'backend' },
  { id:'fastapi',    name:'FastAPI',     color:'009688', logoColor:'ffffff', logo:'fastapi',          cat:'backend' },
  { id:'django',     name:'Django',      color:'092E20', logoColor:'ffffff', logo:'django',           cat:'backend' },
  { id:'flask',      name:'Flask',       color:'000000', logoColor:'ffffff', logo:'flask',            cat:'backend' },
  { id:'spring',     name:'Spring',      color:'6DB33F', logoColor:'ffffff', logo:'spring',           cat:'backend' },
  { id:'laravel',    name:'Laravel',     color:'FF2D20', logoColor:'ffffff', logo:'laravel',          cat:'backend' },
  { id:'rails',      name:'Rails',       color:'CC0000', logoColor:'ffffff', logo:'rubyonrails',      cat:'backend' },
  { id:'graphql',    name:'GraphQL',     color:'E10098', logoColor:'ffffff', logo:'graphql',          cat:'backend' },
  { id:'prisma',     name:'Prisma',      color:'2D3748', logoColor:'ffffff', logo:'prisma',           cat:'backend' },
  { id:'trpc',       name:'tRPC',        color:'2596BE', logoColor:'ffffff', logo:'trpc',             cat:'backend' },
  // --- Mobile ---
  { id:'reactnative',name:'React Native',color:'20232A', logoColor:'61DAFB', logo:'react',           cat:'mobile', label:'React Native' },
  { id:'flutter',    name:'Flutter',     color:'02569B', logoColor:'ffffff', logo:'flutter',          cat:'mobile' },
  { id:'expo',       name:'Expo',        color:'000020', logoColor:'ffffff', logo:'expo',             cat:'mobile' },
  // --- Database ---
  { id:'postgresql', name:'PostgreSQL',  color:'316192', logoColor:'ffffff', logo:'postgresql',       cat:'db' },
  { id:'mysql',      name:'MySQL',       color:'4479A1', logoColor:'ffffff', logo:'mysql',            cat:'db' },
  { id:'mongodb',    name:'MongoDB',     color:'4EA94B', logoColor:'ffffff', logo:'mongodb',          cat:'db' },
  { id:'redis',      name:'Redis',       color:'DC382D', logoColor:'ffffff', logo:'redis',            cat:'db' },
  { id:'sqlite',     name:'SQLite',      color:'07405E', logoColor:'ffffff', logo:'sqlite',           cat:'db' },
  { id:'supabase',   name:'Supabase',    color:'3ECF8E', logoColor:'ffffff', logo:'supabase',         cat:'db' },
  { id:'firebase',   name:'Firebase',    color:'FFCA28', logoColor:'000000', logo:'firebase',         cat:'db' },
  { id:'planetscale',name:'PlanetScale', color:'000000', logoColor:'ffffff', logo:'planetscale',      cat:'db' },
  { id:'elasticsearch',name:'Elasticsearch',color:'005571',logoColor:'ffffff',logo:'elasticsearch',  cat:'db' },
  // --- Cloud & DevOps ---
  { id:'aws',        name:'AWS',         color:'232F3E', logoColor:'FF9900', logo:'amazonaws',        cat:'cloud' },
  { id:'gcp',        name:'GCP',         color:'4285F4', logoColor:'ffffff', logo:'googlecloud',      cat:'cloud' },
  { id:'azure',      name:'Azure',       color:'0072C6', logoColor:'ffffff', logo:'microsoftazure',   cat:'cloud' },
  { id:'vercel',     name:'Vercel',      color:'000000', logoColor:'ffffff', logo:'vercel',           cat:'cloud' },
  { id:'netlify',    name:'Netlify',     color:'00C7B7', logoColor:'ffffff', logo:'netlify',          cat:'cloud' },
  { id:'docker',     name:'Docker',      color:'0db7ed', logoColor:'ffffff', logo:'docker',           cat:'devops' },
  { id:'kubernetes', name:'Kubernetes',  color:'326ce5', logoColor:'ffffff', logo:'kubernetes',       cat:'devops' },
  { id:'terraform',  name:'Terraform',   color:'7B42BC', logoColor:'ffffff', logo:'terraform',        cat:'devops' },
  { id:'githubactions',name:'GitHub Actions',color:'2088FF',logoColor:'ffffff',logo:'githubactions',  cat:'devops', label:'Actions' },
  { id:'nginx',      name:'Nginx',       color:'009639', logoColor:'ffffff', logo:'nginx',            cat:'devops' },
  // --- AI / ML ---
  { id:'tensorflow', name:'TensorFlow',  color:'FF6F00', logoColor:'ffffff', logo:'tensorflow',       cat:'ai' },
  { id:'pytorch',    name:'PyTorch',     color:'EE4C2C', logoColor:'ffffff', logo:'pytorch',          cat:'ai' },
  { id:'scikitlearn',name:'scikit-learn',color:'F7931E', logoColor:'ffffff', logo:'scikitlearn',      cat:'ai' },
  { id:'openai',     name:'OpenAI',      color:'412991', logoColor:'ffffff', logo:'openai',           cat:'ai' },
  { id:'langchain',  name:'LangChain',   color:'1C3C3C', logoColor:'ffffff', logo:'langchain',        cat:'ai' },
  // --- Tools ---
  { id:'git',        name:'Git',         color:'F05032', logoColor:'ffffff', logo:'git',              cat:'tools' },
  { id:'github',     name:'GitHub',      color:'181717', logoColor:'ffffff', logo:'github',           cat:'tools' },
  { id:'vscode',     name:'VS Code',     color:'007ACC', logoColor:'ffffff', logo:'visualstudiocode', cat:'tools' },
  { id:'figma',      name:'Figma',       color:'F24E1E', logoColor:'ffffff', logo:'figma',            cat:'tools' },
  { id:'linux',      name:'Linux',       color:'FCC624', logoColor:'000000', logo:'linux',            cat:'tools' },
  { id:'vim',        name:'Vim',         color:'019733', logoColor:'ffffff', logo:'vim',              cat:'tools' },
  { id:'neovim',     name:'Neovim',      color:'57A143', logoColor:'ffffff', logo:'neovim',           cat:'tools' },
  { id:'postman',    name:'Postman',     color:'FF6C37', logoColor:'ffffff', logo:'postman',          cat:'tools' },
  { id:'obsidian',   name:'Obsidian',    color:'7C3AED', logoColor:'ffffff', logo:'obsidian',         cat:'tools' },
  { id:'notion',     name:'Notion',      color:'000000', logoColor:'ffffff', logo:'notion',           cat:'tools' },
];

const ICON_CATS = [
  { id:'all',      label:'All' },
  { id:'lang',     label:'Languages' },
  { id:'frontend', label:'Frontend' },
  { id:'backend',  label:'Backend' },
  { id:'mobile',   label:'Mobile' },
  { id:'db',       label:'Database' },
  { id:'cloud',    label:'Cloud' },
  { id:'devops',   label:'DevOps' },
  { id:'ai',       label:'AI / ML' },
  { id:'tools',    label:'Tools' },
];

function getIcon(id) { return ICONS.find(i => i.id === id); }
function badgeUrl(icon) {
  const n = icon.label || icon.name;
  return `https://img.shields.io/badge/${n}-${icon.color}?style=for-the-badge&logo=${icon.logo}&logoColor=${icon.logoColor}`;
}
