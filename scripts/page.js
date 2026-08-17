/* ============================================
   AROALA — Page Logic & Animations
   ============================================ */

// ── Bilingual Content ─────────────────────────

const CONTENT = {
  fr: {
    nav: {
      problem: "Le Problème",
      solution: "La Solution",
      impact: "Impact",
      market: "Marché",
      team: "Équipe",
      contact: "Contact"
    },
    hero: {
      badge: "POESAM 2026 · 16ème Édition",
      title: "Surveiller. <em>Alerter.</em> Protéger.",
      subtitle: "AROALA est la première application mobile malgache d'alerte coordonnée contre la déforestation et les feux de brousse — une alerte transmise à toutes les autorités compétentes en moins de 60 secondes.",
      cta_primary: "Découvrir le projet",
      cta_secondary: "Voir la démo"
    },
    stats: [
      { val: "2%", label: "forêt primaire perdue en 2025" },
      { val: "8 676", label: "foyers d'incendie actifs en 2025" },
      { val: "< 60s", label: "délai d'alerte AROALA" },
      { val: "17", label: "pays de réplication (Orange)" }
    ],
    problem: {
      label: "Le Problème",
      title: "Madagascar brûle — sans système d'alerte",
      subtitle: "La cause profonde de ce désastre n'est pas l'absence de technologie, mais l'absence de coordination.",
      cards: [
        {
          icon: "🔥",
          title: "Déforestation record",
          text: "En 2025, Madagascar a perdu 2% de sa forêt primaire restante en une seule année — la proportion la plus élevée au monde. 6 285 379 ha brûlés ou dégradés en 2024."
        },
        {
          icon: "📡",
          title: "Absence de coordination",
          text: "Préfets, maires, chefs fokontany, sapeurs-pompiers et responsables environnementaux n'ont aucun système commun d'alerte. Chaque heure de retard signifie des hectares perdus à jamais."
        },
        {
          icon: "🌿",
          title: "Biodiversité irremplaçable",
          text: "90% de la faune et flore malgaches sont endémiques : lémuriens, baobabs, orchidées. Protéger Madagascar, c'est protéger un patrimoine naturel mondial unique."
        }
      ]
    },
    solution: {
      label: "La Solution",
      title: "AROALA — Une réponse mobile-first",
      subtitle: "Une application intégrée qui transforme chaque signalement de feu en intervention coordonnée.",
      phases: [
        {
          num: "01",
          title: "Collecte & Structuration des Données",
          text: "Contact systématique des acteurs clés : chefs fokontany, maires, préfets, DREEF. Constitution d'un annuaire national pour une diffusion multi-canal instantanée."
        },
        {
          num: "02",
          title: "Cartographie & Analyse de situation",
          text: "Localisation précise des points d'eau et matériels sur Google Maps. Visualisation temps réel pour mobiliser les ressources les plus proches du foyer."
        },
        {
          num: "03",
          title: "Application Mobile avec IA intégrée",
          text: "Alertes multi-canal en < 60s, dashboard autorités, module crédits carbone, mode offline SMS. Une solution complète construite pour le terrain malgache."
        },
        {
          num: "04",
          title: "Pilote territorial — Mahajanga",
          text: "Déploiement contrôlé à Ankarafantsika / Marohogo. Validation de la chaîne complète : détection → alerte → intervention → mesure d'impact."
        }
      ],
      table_title: "Fonctionnalités clés",
      table_headers: ["Fonctionnalité", "Description"],
      table_rows: [
        ["Cartographie Google Maps", "Localisation interactive des points d'eau, matériels et zones sensibles. Coordination géolocalisée en temps réel."],
        ["Alerte multi-canal < 60s", "Notification push, SMS (sans internet haut débit) et appel automatique aux autorités selon la zone de détection."],
        ["Dashboard autorités", "Interface dédiée préfectures et DREEF : visualisation temps réel des foyers, ressources et historique des interventions."],
        ["Module crédits carbone", "Suivi couverture forestière, génération de rapports Verra/Gold Standard, redistribution des revenus aux communautés."],
        ["Mode offline partiel", "Synchronisation différée pour zones à faible connectivité. Les alertes SMS ne nécessitent pas d'internet haut débit."],
        ["API ouverte", "Accès aux données traitées pour ministères, ONG, chercheurs et entreprises ESG. Rapports géospatiaux personnalisés."]
      ]
    },
    impact: {
      label: "Impact & ODD",
      title: "Un cercle vertueux pour Madagascar et l'Afrique",
      featured: {
        icon: "🌍",
        title: "Objectifs de Développement Durable",
        text: "AROALA est aligné sur les ODD 13 (Action climatique), ODD 15 (Vie terrestre) et ODD 1 (Fin de la pauvreté) — une attractivité maximale pour les bailleurs et investisseurs à impact.",
        kpis: [
          { val: "–40%", label: "Déforestation zones pilotes An 1-2" },
          { val: "–80%", label: "Temps de réaction feux An 3+" },
          { val: "109", label: "Aires protégées couvertes An 3+" }
        ]
      },
      cards: [
        {
          icon: "💚",
          title: "Économie verte communautaire",
          text: "Redistribution directe des revenus des crédits carbone ($35/tCO₂) aux gardiens de forêt locaux. La protection environnementale devient source de revenus durables."
        },
        {
          icon: "🏛️",
          title: "Renforcement institutionnel",
          text: "Formation des autorités locales à la gestion coordonnée des feux et aux outils numériques. Des capacités durables pour les fokontany, mairies et préfectures."
        },
        {
          icon: "🌱",
          title: "Emplois locaux durables",
          text: "Gestionnaires de données terrain, agents communautaires de surveillance, techniciens d'installation. Des emplois ancrés dans la réalité locale malgache."
        },
        {
          icon: "🌐",
          title: "Réplication continentale",
          text: "Orange Digital Centers couvrent 17 pays africains confrontés aux mêmes enjeux. La technologie développée pour Madagascar est directement réplicable."
        }
      ]
    },
    market: {
      label: "Modèle Économique",
      title: "Un marché en croissance, 5 sources de revenus",
      subtitle: "Un modèle SaaS + Carbone + ESG conçu pour la durabilité et la scalabilité.",
      cards: [
        {
          label: "Institutionnel",
          title: "Abonnements SaaS",
          text: "Préfectures, DREEF, aires protégées. 2,4M – 9,6M MGA/an par institution. Dashboard temps réel, API données, rapports mensuels."
        },
        {
          label: "Marché carbone",
          title: "Crédits Carbone",
          text: "Commission 8–12% sur crédits Verra/Gold Standard. Jusqu'à $35/tCO₂. Marché estimé à €15 milliards en 2035 (+20%/an)."
        },
        {
          label: "ESG & Recherche",
          title: "Données & API",
          text: "Données géospatiales ESG pour entreprises, assureurs et investisseurs. Licences API pour universités et instituts scientifiques internationaux."
        }
      ],
      table_title: "Prévisions financières sur 3 ans (en millions MGA)",
      table_headers: ["Indicateur", "Année 1 — Pilote", "Année 2 — National", "Année 3 — Régional"],
      table_rows: [
        ["Revenus totaux", "12 M MGA", "60 M MGA", "180 M MGA"],
        ["dont Abonnements SaaS", "6 M MGA", "25 M MGA", "80 M MGA"],
        ["dont Partenariats & Grants", "4 M MGA", "22 M MGA", "60 M MGA"],
        ["dont Crédits Carbone & ESG", "2 M MGA", "13 M MGA", "40 M MGA"],
        ["Coûts opérationnels", "10 M MGA", "35 M MGA", "90 M MGA"],
        ["Résultat opérationnel", "+2 M MGA", "+25 M MGA", "+90 M MGA"]
      ],
      highlight_rows: [5]
    },
    partners: {
      label: "Partenaires Stratégiques",
      title: "Un écosystème de partenaires pour l'impact",
      categories: [
        {
          label: "Gouvernement",
          partners: ["Ministère de l'Environnement", "DREEF (Régions)", "Préfectures (114)", "Sapeurs-Pompiers"]
        },
        {
          label: "Tech & Numérique",
          partners: ["Google Maps Platform", "Orange Digital Centers", "Projet Prodigy", "Opérateurs mobiles MG"]
        },
        {
          label: "Conservation",
          partners: ["WWF Madagascar", "Conservation International", "Madagascar National Parks", "Wildlife Conservation Society"]
        },
        {
          label: "Financement Impact",
          partners: ["Orange Ventures", "AFD", "Banque Mondiale / GEF", "GIZ"]
        },
        {
          label: "Certification Carbone",
          partners: ["Verra (VCS)", "Gold Standard"]
        },
        {
          label: "ONG Bailleurs",
          partners: ["WWF", "Conservation International", "AFD", "Bailleurs internationaux ODD"]
        }
      ]
    },
    team: {
      label: "Équipe Fondatrice",
      title: "Portée par ILAIKOTO SARLU",
      subtitle: "Une équipe malgache aux compétences complémentaires, ancrée dans le terrain.",
      members: [
        {
          initials: "HN",
          name: "Hatix Ntsoa",
          role: "Fondateur & CEO",
          desc: "Vision stratégique, partenariats institutionnels, pilotage général et relations bailleurs."
        },
        {
          initials: "RS",
          name: "Stephan Hernandez",
          role: "Collaborateur Technique",
          desc: "Architecture application, développement mobile, système d'alertes temps réel, intégration Google Maps API."
        },
        {
          initials: "🌿",
          name: "Responsable Terrain & Données",
          role: "Profil Recherché",
          desc: "Collecte contacts fokontany/mairie/préfecture, cartographie terrain, formation autorités.",
          muted: true
        },
        {
          initials: "📊",
          name: "Responsable Impact & Carbone",
          role: "Profil Recherché",
          desc: "Suivi ODD, crédits carbone Verra/Gold Standard, reporting ESG, relations ONG.",
          muted: true
        }
      ]
    },
    roadmap: {
      label: "Feuille de Route",
      title: "4 phases pour un impact à l'échelle continentale",
      phases: [
        {
          phase: "Phase 1 — M0 à M6",
          title: "Fondation",
          text: "Collecte terrain des contacts acteurs (fokontany, mairie, préfecture, DREEF). Constitution base de données nationale. Cartographie Google Maps. Signature premiers partenariats institutionnels. Levée de fonds initiale."
        },
        {
          phase: "Phase 2 — M3 à M10",
          title: "Développement",
          text: "Développement MVP de l'application mobile. Tests bêta fermé avec DREEF. Pilote Mahajanga (Ankarafantsika/Marohogo) — validation de la chaîne complète. Étude de marché B2B."
        },
        {
          phase: "Phase 3 — M10 à M24",
          title: "Déploiement National",
          text: "Lancement commercial — abonnements SaaS institutionnels. Extension à 30–50 aires protégées. Premières certifications crédits carbone. Partenariats ONG internationaux. Atteinte de la rentabilité."
        },
        {
          phase: "Phase 4 — M24 à M36",
          title: "Expansion Régionale",
          text: "Couverture des 109 aires protégées de Madagascar. Lancement dans 2–3 pays Orange Digital Centers (Côte d'Ivoire, Cameroun, RDC). Levée de fonds Série A. Marché carbone international consolidé."
        }
      ]
    },
    cta: {
      title: "Rejoignez AROALA pour protéger Madagascar",
      subtitle: "En investissant dans AROALA, vous investissez dans un modèle économique circulaire où la technologie protège la forêt, la forêt génère des revenus, et ces revenus financent les communautés qui la gardent.",
      btn_contact: "Contacter l'équipe",
      btn_deck: "Télécharger le dossier"
    },
    footer: {
      tagline: "Application mobile d'alerte intelligente et de coordination contre la déforestation et les feux de brousse — Madagascar.",
      links_nav: "Navigation",
      links_contact: "Contact",
      nav_links: ["Le Problème", "La Solution", "Impact", "Marché", "Équipe", "Feuille de Route"],
      contact_links: [
        { text: "hatixntsoa@proton.me", href: "mailto:hatixntsoa@proton.me" },
        { text: "ilaikoto@proton.me", href: "mailto:ilaikoto@proton.me" },
        { text: "X : @ilaikoto", href: "https://x.com/ilaikoto" },
        { text: "LinkedIn", href: "https://linkedin.com/company/ilaikoto" }
      ],
      copyright: "© 2026 ILAIKOTO SARLU",
      legal: ["Politique de confidentialité", "Mentions légales", "POESAM 2026"]
    }
  },

  en: {
    nav: {
      problem: "The Problem",
      solution: "The Solution",
      impact: "Impact",
      market: "Market",
      team: "Team",
      contact: "Contact"
    },
    hero: {
      badge: "POESAM 2026 · 16th Edition",
      title: "Monitor. <em>Alert.</em> Protect.",
      subtitle: "AROALA is Madagascar's first mobile app for coordinated alerts against deforestation and bush fires — reaching all relevant authorities in under 60 seconds.",
      cta_primary: "Discover the project",
      cta_secondary: "Watch demo"
    },
    stats: [
      { val: "2%", label: "primary forest lost in 2025" },
      { val: "8,676", label: "active fire hotspots in 2025" },
      { val: "< 60s", label: "AROALA alert delay" },
      { val: "17", label: "replication countries (Orange)" }
    ],
    problem: {
      label: "The Problem",
      title: "Madagascar is burning — with no alert system",
      subtitle: "The root cause of this disaster is not the absence of technology, but the absence of coordination.",
      cards: [
        {
          icon: "🔥",
          title: "Record Deforestation",
          text: "In 2025, Madagascar lost 2% of its remaining primary forest in a single year — the highest proportion in the world. 6.28M hectares burned or degraded in 2024."
        },
        {
          icon: "📡",
          title: "No Coordination",
          text: "Prefects, mayors, fokontany chiefs, firefighters and environmental officers have no shared alert system. Every hour of delay means irreplaceable hectares lost forever."
        },
        {
          icon: "🌿",
          title: "Irreplaceable Biodiversity",
          text: "90% of Madagascar's wildlife is endemic: lemurs, baobabs, orchids. Protecting Madagascar means protecting a unique global natural heritage."
        }
      ]
    },
    solution: {
      label: "The Solution",
      title: "AROALA — A mobile-first response",
      subtitle: "An integrated app that transforms every fire report into a coordinated intervention.",
      phases: [
        {
          num: "01",
          title: "Data Collection & Structuring",
          text: "Systematic contact of key actors: fokontany chiefs, mayors, prefects, DREEF. Building a national directory for instant multi-channel alerts."
        },
        {
          num: "02",
          title: "Mapping & Situational Analysis",
          text: "Precise location of water points and resources on Google Maps. Real-time visualization to mobilize the nearest resources."
        },
        {
          num: "03",
          title: "Mobile Application with integrated AI",
          text: "Multi-channel alerts in < 60s, authority dashboard, carbon credit module, offline SMS mode. A complete solution built for Malagasy field conditions."
        },
        {
          num: "04",
          title: "Territorial Pilot — Mahajanga",
          text: "Controlled deployment at Ankarafantsika / Marohogo. Validating the full chain: detection → alert → intervention → impact measurement."
        }
      ],
      table_title: "Key Features",
      table_headers: ["Feature", "Description"],
      table_rows: [
        ["Google Maps Cartography", "Interactive mapping of water points, resources and sensitive zones. Real-time geolocated coordination."],
        ["Multi-channel alert < 60s", "Push notification, SMS (no high-speed internet needed) and automatic calls to authorities based on detection zone."],
        ["Authority Dashboard", "Dedicated interface for prefectures and DREEF: real-time visualization of hotspots, resources and intervention history."],
        ["Carbon Credit Module", "Forest cover tracking, Verra/Gold Standard report generation, redistribution of revenues to communities."],
        ["Partial Offline Mode", "Deferred sync for low-connectivity zones. SMS alerts do not require high-speed internet."],
        ["Open API", "Processed data access for ministries, NGOs, researchers and ESG companies. Custom geospatial reports."]
      ]
    },
    impact: {
      label: "Impact & SDGs",
      title: "A virtuous cycle for Madagascar and Africa",
      featured: {
        icon: "🌍",
        title: "Sustainable Development Goals",
        text: "AROALA is aligned with SDG 13 (Climate Action), SDG 15 (Life on Land) and SDG 1 (No Poverty) — maximizing attractiveness for impact funders and investors.",
        kpis: [
          { val: "–40%", label: "Deforestation in pilot zones Yr 1-2" },
          { val: "–80%", label: "Fire response time Yr 3+" },
          { val: "109", label: "Protected areas covered Yr 3+" }
        ]
      },
      cards: [
        {
          icon: "💚",
          title: "Community Green Economy",
          text: "Direct redistribution of carbon credit revenues ($35/tCO₂) to local forest guardians. Environmental protection becomes a sustainable income source."
        },
        {
          icon: "🏛️",
          title: "Institutional Capacity Building",
          text: "Training local authorities in coordinated fire management and digital tools. Lasting capabilities for fokontany, municipalities and prefectures."
        },
        {
          icon: "🌱",
          title: "Sustainable Local Jobs",
          text: "Field data managers, community surveillance agents, installation technicians. Jobs rooted in the Malagasy local reality."
        },
        {
          icon: "🌐",
          title: "Continental Replication",
          text: "Orange Digital Centers cover 17 African countries facing the same challenges. The technology built for Madagascar is directly replicable."
        }
      ]
    },
    market: {
      label: "Business Model",
      title: "A growing market, 5 revenue streams",
      subtitle: "A SaaS + Carbon + ESG model designed for sustainability and scalability.",
      cards: [
        {
          label: "Institutional",
          title: "SaaS Subscriptions",
          text: "Prefectures, DREEF, protected areas. 2.4M – 9.6M MGA/year per institution. Real-time dashboard, data API, monthly reports."
        },
        {
          label: "Carbon Market",
          title: "Carbon Credits",
          text: "8–12% commission on Verra/Gold Standard credits. Up to $35/tCO₂. Market estimated at €15 billion by 2035 (+20%/year)."
        },
        {
          label: "ESG & Research",
          title: "Data & API",
          text: "ESG geospatial data for companies, insurers and investors. API licenses for universities and international scientific institutes."
        }
      ],
      table_title: "3-Year Financial Projections (in millions MGA)",
      table_headers: ["Indicator", "Year 1 — Pilot", "Year 2 — National", "Year 3 — Regional"],
      table_rows: [
        ["Total Revenue", "12 M MGA", "60 M MGA", "180 M MGA"],
        ["of which SaaS Subscriptions", "6 M MGA", "25 M MGA", "80 M MGA"],
        ["of which Partnerships & Grants", "4 M MGA", "22 M MGA", "60 M MGA"],
        ["of which Carbon Credits & ESG", "2 M MGA", "13 M MGA", "40 M MGA"],
        ["Operating Costs", "10 M MGA", "35 M MGA", "90 M MGA"],
        ["Operating Result", "+2 M MGA", "+25 M MGA", "+90 M MGA"]
      ],
      highlight_rows: [5]
    },
    partners: {
      label: "Strategic Partners",
      title: "An ecosystem of partners for impact",
      categories: [
        {
          label: "Government",
          partners: ["Ministry of Environment", "DREEF (Regions)", "Prefectures (114)", "Fire Services"]
        },
        {
          label: "Tech & Digital",
          partners: ["Google Maps Platform", "Orange Digital Centers", "Projet Prodigy", "Mobile Operators MG"]
        },
        {
          label: "Conservation",
          partners: ["WWF Madagascar", "Conservation International", "Madagascar National Parks", "Wildlife Conservation Society"]
        },
        {
          label: "Impact Funding",
          partners: ["Orange Ventures", "AFD", "World Bank / GEF", "GIZ"]
        },
        {
          label: "Carbon Certification",
          partners: ["Verra (VCS)", "Gold Standard"]
        },
        {
          label: "NGO Funders",
          partners: ["WWF", "Conservation International", "AFD", "International SDG Funders"]
        }
      ]
    },
    team: {
      label: "Founding Team",
      title: "Carried by ILAIKOTO SARLU",
      subtitle: "A Malagasy team with complementary skills, rooted in the field.",
      members: [
        {
          initials: "HN",
          name: "Hatix Ntsoa",
          role: "Founder & CEO",
          desc: "Strategic vision, institutional partnerships, general management and funder relations."
        },
        {
          initials: "RS",
          name: "Stephan Hernandez",
          role: "Technical Collaborator",
          desc: "App architecture, mobile development, real-time alert system, Google Maps API integration."
        },
        {
          initials: "🌿",
          name: "Field & Data Manager",
          role: "Researched Profile",
          desc: "Contact collection for fokontany/municipality/prefecture, field mapping, authority training.",
          muted: true
        },
        {
          initials: "📊",
          name: "Impact & Carbon Manager",
          role: "Researched Profile",
          desc: "SDG tracking, Verra/Gold Standard carbon credits, ESG reporting, NGO relations.",
          muted: true
        }
      ]
    },
    roadmap: {
      label: "Strategic Roadmap",
      title: "4 phases for continental-scale impact",
      phases: [
        {
          phase: "Phase 1 — M0 to M6",
          title: "Foundation",
          text: "Field data collection from key actors (fokontany, municipalities, prefectures, DREEF). National database build. Google Maps cartography. First institutional partnerships signed. Initial fundraising."
        },
        {
          phase: "Phase 2 — M3 to M10",
          title: "Development",
          text: "Mobile app MVP development. Closed beta testing with DREEF partner. Mahajanga pilot (Ankarafantsika/Marohogo) — full chain validation. B2B market study."
        },
        {
          phase: "Phase 3 — M10 to M24",
          title: "National Deployment",
          text: "Commercial launch — institutional SaaS subscriptions. Extension to 30–50 protected areas. First Verra/Gold Standard carbon credit certifications. International NGO partnerships. Operational profitability."
        },
        {
          phase: "Phase 4 — M24 to M36",
          title: "Regional Expansion",
          text: "Coverage of all 109 Madagascar protected areas. Launch in 2–3 Orange Digital Centers countries (Ivory Coast, Cameroon, DRC). Series A fundraising. Consolidated international carbon market."
        }
      ]
    },
    cta: {
      title: "Join AROALA to protect Madagascar",
      subtitle: "By investing in AROALA, you invest in a circular economic model where technology protects the forest, the forest generates revenue, and that revenue funds the communities that guard it.",
      btn_contact: "Contact the team",
      btn_deck: "Download the deck"
    },
    footer: {
      tagline: "Intelligent mobile alert and coordination application against deforestation and bush fires — Madagascar.",
      links_nav: "Navigation",
      links_contact: "Contact",
      nav_links: ["The Problem", "The Solution", "Impact", "Market", "Team", "Roadmap"],
      contact_links: [
        { text: "hatixntsoa@proton.me", href: "mailto:hatixntsoa@proton.me" },
        { text: "ilaikoto@proton.me", href: "mailto:ilaikoto@proton.me" },
        { text: "X : @ilaikoto", href: "https://x.com/ilaikoto" },
        { text: "LinkedIn", href: "https://linkedin.com/company/ilaikoto" }
      ],
      copyright: "© 2026 ILAIKOTO SARLU",
      legal: ["Privacy Policy", "Legal Notice", "POESAM 2026"]
    }
  }
};

// ── State ─────────────────────────────────────
let currentLang = 'fr';
let currentTheme = 'light';

// ── Theme Management ──────────────────────────
function initTheme() {
  const stored = localStorage.getItem('aroala-theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  currentTheme = stored || system;
  applyTheme(currentTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('aroala-theme')) {
      currentTheme = e.matches ? 'dark' : 'light';
      applyTheme(currentTheme);
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  updateLogoSrc(theme);

   // Add these two lines:
  document.getElementById('theme-icon-sun').style.display  = theme === 'dark'  ? 'none'  : 'block';
  document.getElementById('theme-icon-moon').style.display = theme === 'dark'  ? 'block' : 'none';
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('aroala-theme', currentTheme);
  applyTheme(currentTheme);
}

function updateLogoSrc(theme) {
  // Header logo
  const logoImg = document.getElementById('logo-img');
  if (logoImg) {
    logoImg.src = theme === 'dark' ? 'assets/logo-dark.svg' : 'assets/logo-light.svg';
    logoImg.onerror = function() {
      this.style.display = 'none';
      const fallback = document.getElementById('logo-fallback');
      if (fallback) fallback.style.display = 'block';
    };
  }

  // Footer logo
  const footerLogo = document.getElementById('footer-logo-img');
  if (footerLogo) {
    footerLogo.src = theme === 'dark' ? 'assets/logo-dark.svg' : 'assets/logo-light.svg';
  }

  // App icons (header + mockup)
  document.querySelectorAll('.app-icon-themed').forEach(img => {
    img.src = theme === 'dark' ? 'assets/app-icon-dark.svg' : 'assets/app-icon-light.svg';
  });
}

// ── Language Management ───────────────────────
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  renderAll();
}

// ── DOM Rendering ─────────────────────────────
function renderAll() {
  const c = CONTENT[currentLang];
  renderNav(c);
  renderHero(c);
  renderStats(c);
  renderProblem(c);
  renderSolution(c);
  renderImpact(c);
  renderMarket(c);
  renderPartners(c);
  renderTeam(c);
  renderRoadmap(c);
  renderCTA(c);
  renderFooter(c);
  // Re-init observers after re-render
  initReveal();
}

function renderNav(c) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const links = [
    ['#problem', c.nav.problem],
    ['#solution', c.nav.solution],
    ['#impact', c.nav.impact],
    ['#market', c.nav.market],
    ['#team', c.nav.team],
    ['#cta', c.nav.contact]
  ];
  nav.innerHTML = links.map(([href, label]) =>
    `<a href="${href}">${label}</a>`
  ).join('');
}

function renderHero(c) {
  const h = c.hero;
  setHTML('hero-badge-text', h.badge);
  setHTML('hero-title', h.title);
  setHTML('hero-subtitle', h.subtitle);
  setHTML('hero-cta-primary', h.cta_primary);
  setHTML('hero-cta-secondary', h.cta_secondary);
}

function renderStats(c) {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;
  grid.innerHTML = c.stats.map(s => `
    <div class="stat-item">
      <span class="stat-val">${s.val}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

function renderProblem(c) {
  const p = c.problem;
  setText('problem-label', p.label);
  setHTML('problem-title', p.title);
  setHTML('problem-subtitle', p.subtitle);
  const grid = document.getElementById('problem-cards');
  if (!grid) return;
  grid.innerHTML = p.cards.map((card, i) => `
    <div class="problem-card reveal reveal-delay-${i + 1}">
      <span class="problem-number">0${i + 1}</span>
      <span class="problem-icon">${card.icon}</span>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    </div>
  `).join('');
}

function renderSolution(c) {
  const s = c.solution;
  setText('solution-label', s.label);
  setHTML('solution-title', s.title);
  setHTML('solution-subtitle', s.subtitle);

  const phases = document.getElementById('solution-phases');
  if (phases) {
    phases.innerHTML = s.phases.map(ph => `
      <div class="phase-item reveal">
        <div class="phase-num">${ph.num}</div>
        <div class="phase-body">
          <h3>${ph.title}</h3>
          <p>${ph.text}</p>
        </div>
      </div>
    `).join('');
  }

  setText('solution-table-title', s.table_title);
  const table = document.getElementById('solution-table');
  if (table) {
    table.innerHTML = `
      <thead><tr>${s.table_headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>
        ${s.table_rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    `;
  }
}

function renderImpact(c) {
  const imp = c.impact;
  setText('impact-label', imp.label);
  setHTML('impact-title', imp.title);

  const featured = document.getElementById('impact-featured');
  if (featured) {
    featured.innerHTML = `
      <span class="impact-icon">${imp.featured.icon}</span>
      <h3>${imp.featured.title}</h3>
      <p>${imp.featured.text}</p>
      <div class="kpi-grid">
        ${imp.featured.kpis.map(kpi => `
          <div class="kpi-item">
            <span class="kpi-val">${kpi.val}</span>
            <span class="kpi-label">${kpi.label}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  const cards = document.getElementById('impact-cards');
  if (cards) {
    cards.innerHTML = imp.cards.map((card, i) => `
      <div class="impact-card reveal reveal-delay-${i + 1}">
        <span class="impact-icon">${card.icon}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    `).join('');
  }
}

function renderMarket(c) {
  const m = c.market;
  setText('market-label', m.label);
  setHTML('market-title', m.title);
  setHTML('market-subtitle', m.subtitle);

  const cards = document.getElementById('market-cards');
  if (cards) {
    cards.innerHTML = m.cards.map((card, i) => `
      <div class="market-card reveal reveal-delay-${i + 1}">
        <span class="label">${card.label}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    `).join('');
  }

  setText('market-table-title', m.table_title);
  const table = document.getElementById('market-table');
  if (table) {
    table.innerHTML = `
      <thead><tr>${m.table_headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>
        ${m.table_rows.map((row, ri) => `
          <tr>${row.map((cell, ci) =>
            `<td class="${m.highlight_rows.includes(ri) && ci > 0 ? 'highlight' : ''}">${cell}</td>`
          ).join('')}</tr>
        `).join('')}
      </tbody>
    `;
  }
}

function renderPartners(c) {
  const p = c.partners;
  setText('partners-label', p.label);
  setHTML('partners-title', p.title);

  const grid = document.getElementById('partners-grid');
  if (!grid) return;
  grid.innerHTML = p.categories.map((cat, i) => `
    <div class="partner-category reveal reveal-delay-${(i % 3) + 1}">
      <span class="label">${cat.label}</span>
      <ul class="partner-list">
        ${cat.partners.map(name => `<li>${name}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderTeam(c) {
  const t = c.team;
  setText('team-label', t.label);
  setHTML('team-title', t.title);
  setHTML('team-subtitle', t.subtitle);

  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = t.members.map((m, i) => `
    <div class="team-card reveal reveal-delay-${(i % 2) + 1}">
      <div class="team-avatar ${m.muted ? 'muted' : ''}">${m.initials}</div>
      <div class="team-info">
        <h3>${m.name}</h3>
        <span class="team-role">${m.role}</span>
        <p>${m.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderRoadmap(c) {
  const r = c.roadmap;
  setText('roadmap-label', r.label);
  setHTML('roadmap-title', r.title);

  const timeline = document.getElementById('roadmap-timeline');
  if (!timeline) return;
  timeline.innerHTML = r.phases.map((ph, i) => `
    <div class="roadmap-item reveal reveal-delay-${i + 1}">
      <span class="roadmap-phase">${ph.phase}</span>
      <h3>${ph.title}</h3>
      <p>${ph.text}</p>
    </div>
  `).join('');
}

function renderCTA(c) {
  const ct = c.cta;
  setHTML('cta-title', ct.title);
  setHTML('cta-subtitle', ct.subtitle);
  setHTML('cta-btn-contact', ct.btn_contact);
  setHTML('cta-btn-deck', ct.btn_deck);
}

function renderFooter(c) {
  const f = c.footer;
  setHTML('footer-tagline', f.tagline);
  setText('footer-links-nav-label', f.links_nav);
  setText('footer-links-contact-label', f.links_contact);
  setHTML('footer-copyright', f.copyright);

  const navLinks = document.getElementById('footer-nav-links');
  if (navLinks) {
    const hrefs = ['#problem','#solution','#impact','#market','#team','#roadmap'];
    navLinks.innerHTML = f.nav_links.map((label, i) =>
      `<li><a href="${hrefs[i]}">${label}</a></li>`
    ).join('');
  }

  const contactLinks = document.getElementById('footer-contact-links');
  if (contactLinks) {
    contactLinks.innerHTML = f.contact_links.map(link =>
      `<li><a href="${link.href}" target="_blank" rel="noopener">${link.text}</a></li>`
    ).join('');
  }

  const legal = document.getElementById('footer-legal');
  if (legal) {
    legal.innerHTML = f.legal.map(l => `<a href="#">${l}</a>`).join('');
  }
}

// ── Utility ───────────────────────────────────
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ── Scroll Reveal ─────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  } else {
    els.forEach(el => el.classList.add('visible'));
  }
}

// ── Particles ─────────────────────────────────
function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 12 + 10}s;
      animation-delay: -${Math.random() * 15}s;
    `;
    container.appendChild(p);
  }
}

// ── Smooth Scroll ─────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav
        document.getElementById('main-nav')?.classList.remove('open');
      }
    });
  });
}

// ── Mobile Nav ────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  toggle?.addEventListener('click', () => nav?.classList.toggle('open'));
}

// ── Counter Animation ─────────────────────────
function animateCounters() {
  // Simple entrance animation for stats — already CSS-handled
}

// ── Header scroll effect ──────────────────────
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAll();
  initParticles();
  initReveal();
  initSmoothScroll();
  initMobileNav();
  initHeaderScroll();

  // Theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
