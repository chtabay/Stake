// ===== MOCK DATA =====

const TAKES = [
  {
    id: "STK-001",
    title: "Le taux directeur de la BCE sera inférieur à 2% au 31 décembre 2027",
    description: "Face à la tendance déflationniste persistante en zone euro et au ralentissement économique global, la BCE sera contrainte de maintenir une politique monétaire accommodante, ramenant son taux directeur principal sous la barre des 2% avant la fin 2027.",
    author: "M. Vauban",
    authorInitials: "MV",
    status: "sealed",
    statusLabel: "Scellée",
    badgeClass: "badge-sealed",
    category: "Économie & Finance",
    deadline: "31 déc. 2027",
    deadlineISO: "2027-12-31",
    amount: "500 €",
    amountRaw: 500,
    resolution: "Donnée publique / API officielle",
    source: "API BCE (SDW) — Série FM.M.U2.EUR.4F.KR.MRR_RT.LEV",
    criteria: "Valeur de l'observation pour la période '2027-12' strictement inférieure à 2.0000.",
    proofs: [
      { type: "api", label: "API BCE (SDW)", detail: "Point d'accès REST officiel de la Banque Centrale Européenne" },
      { type: "doc", label: "Documentation", detail: "Définition de la série MRR_RT.LEV" }
    ],
    aiAudit: {
      status: "approved",
      statusLabel: "APPROUVÉ",
      logs: [
        { type: "info", text: "Initialisation de l'audit du protocole..." },
        { type: "pass", text: "[SOURCE] API officielle identifiée (Fiabilité: HAUTE)" },
        { type: "pass", text: "[MÉTRIQUE] Série FM.M.U2.EUR.4F.KR.MRR_RT.LEV valide" },
        { type: "pass", text: "[CRITÈRE] Seuil binaire strict (< 2.0000) détecté (Ambiguïté: NULLE)" },
        { type: "pass", text: "[ÉCHÉANCE] Période d'observation '2027-12' clairement définie" },
        { type: "info", text: "Conclusion : Protocole robuste. Résolution automatisable via contrat intelligent." }
      ]
    },
    causes: [
      { name: "Éducation financière publique", percent: 70 },
      { name: "Recherche économique", percent: 30 }
    ],
    parties: [
      { name: "M. Vauban", initials: "MV", role: "Auteur", amount: "500 €" }
    ],
    challenger: null,
    timeline: [
      { date: "15 mars 2026", text: "Take créée en brouillon" },
      { date: "18 mars 2026", text: "Protocole de résolution défini" },
      { date: "22 mars 2026", text: "Soumise à validation" },
      { date: "25 mars 2026", text: "Validée et scellée" }
    ],
    tags: ["BCE", "Taux directeur", "Politique monétaire", "Zone euro"],
    createdAt: "15 mars 2026"
  },
  {
    id: "STK-002",
    title: "L'indice de chiffre d'affaires des services informatiques (NAF 62) dépassera la base 150 en 2026",
    description: "L'adoption massive de l'IA générative dans les entreprises françaises va transformer le secteur des services numériques, portant l'indice de CA du secteur au-delà de 150 (base 100 en 2021).",
    author: "C. Turing",
    authorInitials: "CT",
    status: "negotiation",
    statusLabel: "En négociation",
    badgeClass: "badge-negotiation",
    category: "Technologie",
    deadline: "31 déc. 2026",
    deadlineISO: "2026-12-31",
    amount: "1 200 €",
    amountRaw: 1200,
    resolution: "Statistique officielle",
    source: "API INSEE — Série 010534123 (Indice de chiffre d'affaires - Programmation, conseil et autres activités informatiques)",
    criteria: "La valeur moyenne annuelle de l'indice pour l'année 2026, telle que publiée par l'INSEE, doit être strictement supérieure à 150.0.",
    proofs: [
      { type: "stat", label: "API BDM INSEE", detail: "Série chronologique 010534123" }
    ],
    aiAudit: {
      status: "warning",
      statusLabel: "AMENDEMENT REQUIS",
      logs: [
        { type: "info", text: "Initialisation de l'audit du protocole..." },
        { type: "pass", text: "[SOURCE] API INSEE identifiée (Fiabilité: HAUTE)" },
        { type: "pass", text: "[MÉTRIQUE] Série 010534123 valide" },
        { type: "warn", text: "[ÉCHÉANCE] Décalage de publication : l'indice définitif de 2026 ne sera publié qu'en mars 2027." },
        { type: "info", text: "Conclusion : Protocole globalement valide, mais l'échéance de résolution doit être ajustée au 31/03/2027 pour tenir compte des délais de publication officiels." }
      ]
    },
    causes: [
      { name: "Formation numérique", percent: 50 },
      { name: "Recherche en IA", percent: 50 }
    ],
    parties: [
      { name: "C. Turing", initials: "CT", role: "Auteur", amount: "1 200 €" },
      { name: "A. Lovelace", initials: "AL", role: "Contradicteur", amount: "800 €" }
    ],
    challenger: { name: "A. Lovelace", initials: "AL", amount: "800 €" },
    timeline: [
      { date: "2 avril 2026", text: "Take créée en brouillon" },
      { date: "5 avril 2026", text: "Contradicteur engagé" },
      { date: "10 avril 2026", text: "Négociation en cours sur les critères" }
    ],
    tags: ["IA", "Services numériques", "France", "PIB"],
    createdAt: "2 avril 2026"
  },
  {
    id: "STK-003",
    title: "Le prochain président des États-Unis sera un candidat indépendant",
    description: "La polarisation extrême du bipartisme américain et la montée des candidatures indépendantes conduiront à l'élection d'un président ni démocrate ni républicain lors de la prochaine élection présidentielle.",
    author: "J. Madison",
    authorInitials: "JM",
    status: "sealed",
    statusLabel: "Scellée",
    badgeClass: "badge-sealed",
    category: "Politique",
    deadline: "20 jan. 2029",
    deadlineISO: "2029-01-20",
    amount: "2 000 €",
    amountRaw: 2000,
    resolution: "Résultat électoral",
    source: "Résultats certifiés — Federal Election Commission (FEC)",
    criteria: "Le président élu lors de l'élection présidentielle américaine de novembre 2028 ne doit être affilié ni au Parti démocrate ni au Parti républicain au moment de son investiture.",
    proofs: [
      { type: "official", icon: "🏛️", label: "FEC", detail: "Résultats électoraux certifiés" },
      { type: "doc", icon: "📜", label: "Certification", detail: "Certification du Congrès" }
    ],
    causes: [
      { name: "Éducation civique", percent: 60 },
      { name: "Transparence démocratique", percent: 40 }
    ],
    parties: [
      { name: "J. Madison", initials: "JM", role: "Auteur", amount: "2 000 €" },
      { name: "T. Jefferson", initials: "TJ", role: "Contradicteur", amount: "2 000 €" }
    ],
    challenger: { name: "T. Jefferson", initials: "TJ", amount: "2 000 €" },
    timeline: [
      { date: "10 jan. 2026", text: "Take créée" },
      { date: "15 jan. 2026", text: "Contradicteur engagé" },
      { date: "20 jan. 2026", text: "Protocole accepté" },
      { date: "1 fév. 2026", text: "Scellée — fonds immobilisés" }
    ],
    tags: ["USA", "Élection présidentielle", "Indépendant", "Bipartisme"],
    createdAt: "10 jan. 2026"
  },
  {
    id: "STK-004",
    title: "La France dépassera 50% d'énergie renouvelable dans son mix électrique en 2030",
    description: "Avec l'accélération des déploiements solaires et éoliens, et la montée en puissance des politiques européennes, la France franchira la barre des 50% de production électrique d'origine renouvelable.",
    author: "E. Lavoisier",
    authorInitials: "EL",
    status: "resolving",
    statusLabel: "En résolution",
    badgeClass: "badge-resolving",
    category: "Économie & Finance",
    deadline: "31 déc. 2030",
    deadlineISO: "2030-12-31",
    amount: "750 €",
    amountRaw: 750,
    resolution: "Statistique officielle",
    source: "RTE — Bilan électrique annuel",
    criteria: "La part des énergies renouvelables dans la production électrique française, selon le bilan annuel de RTE, doit dépasser 50% sur l'année 2030.",
    proofs: [
      { type: "stat", icon: "📊", label: "Bilan RTE", detail: "Bilan électrique annuel officiel" }
    ],
    causes: [
      { name: "Action climatique", percent: 100 }
    ],
    parties: [
      { name: "E. Lavoisier", initials: "EL", role: "Auteur", amount: "750 €" }
    ],
    challenger: null,
    timeline: [
      { date: "5 déc. 2025", text: "Take créée" },
      { date: "12 déc. 2025", text: "Scellée" },
      { date: "15 mai 2026", text: "Phase de résolution entamée — données préliminaires" }
    ],
    tags: ["Énergie", "Renouvelable", "France", "Transition"],
    createdAt: "5 déc. 2025"
  },
  {
    id: "STK-005",
    title: "Le Bitcoin atteindra 200 000 USD avant le 1er janvier 2027",
    description: "La raréfaction post-halving 2024, l'adoption institutionnelle croissante via les ETF spot, et la politique monétaire accommodante propulseront le Bitcoin au-delà de 200 000 USD.",
    author: "S. Nakamoto",
    authorInitials: "SN",
    status: "sealed",
    statusLabel: "Scellée",
    badgeClass: "badge-sealed",
    category: "Économie & Finance",
    deadline: "1 jan. 2027",
    deadlineISO: "2027-01-01",
    amount: "3 000 €",
    amountRaw: 3000,
    resolution: "Cours financier",
    source: "Binance API (api.binance.com/api/v3/klines)",
    criteria: "Prix de clôture (Close) de la bougie 1h (interval=1h) du 31/12/2026 à 23:00:00 UTC strictement supérieur à 200000.00 USDT.",
    proofs: [
      { type: "api", label: "Binance API", detail: "Endpoint klines, symbol=BTCUSDT" }
    ],
    aiAudit: {
      status: "approved",
      statusLabel: "APPROUVÉ",
      logs: [
        { type: "info", text: "Initialisation de l'audit du protocole..." },
        { type: "pass", text: "[SOURCE] API Binance identifiée (Fiabilité: ACCEPTABLE)" },
        { type: "pass", text: "[MÉTRIQUE] Paire BTCUSDT valide" },
        { type: "pass", text: "[CRITÈRE] Seuil binaire strict (> 200000.00) détecté" },
        { type: "pass", text: "[ÉCHÉANCE] Horodatage UTC exact spécifié (23:00:00 UTC)" },
        { type: "info", text: "Conclusion : Protocole robuste. Résolution automatisable via oracle décentralisé." }
      ]
    },
    causes: [
      { name: "Éducation financière publique", percent: 50 },
      { name: "Lutte contre les arnaques crypto", percent: 50 }
    ],
    parties: [
      { name: "S. Nakamoto", initials: "SN", role: "Auteur", amount: "3 000 €" },
      { name: "P. Krugman", initials: "PK", role: "Contradicteur", amount: "3 000 €" }
    ],
    challenger: { name: "P. Krugman", initials: "PK", amount: "3 000 €" },
    timeline: [
      { date: "20 fév. 2026", text: "Take créée" },
      { date: "25 fév. 2026", text: "Contradicteur engagé" },
      { date: "1 mars 2026", text: "Protocole accepté et scellé" }
    ],
    tags: ["Bitcoin", "Crypto", "Cours", "ETF"],
    createdAt: "20 fév. 2026"
  },
  {
    id: "STK-006",
    title: "La population mondiale dépassera 9 milliards avant 2035",
    description: "Malgré le ralentissement de la croissance démographique dans les pays développés, la dynamique africaine et asiatique maintiendra un rythme suffisant pour franchir les 9 milliards.",
    author: "T. Malthus",
    authorInitials: "TM",
    status: "draft",
    statusLabel: "Brouillon",
    badgeClass: "badge-draft",
    category: "Société",
    deadline: "31 déc. 2034",
    deadlineISO: "2034-12-31",
    amount: "200 €",
    amountRaw: 200,
    resolution: "Statistique officielle",
    source: "ONU — World Population Prospects",
    criteria: "La population mondiale estimée par les Nations Unies (révision la plus récente) doit dépasser 9 000 000 000 individus avant le 31 décembre 2034.",
    proofs: [
      { type: "stat", icon: "📊", label: "ONU", detail: "World Population Prospects" }
    ],
    causes: [
      { name: "Aide humanitaire", percent: 100 }
    ],
    parties: [
      { name: "T. Malthus", initials: "TM", role: "Auteur", amount: "200 €" }
    ],
    challenger: null,
    timeline: [
      { date: "20 mai 2026", text: "Brouillon créé" }
    ],
    tags: ["Démographie", "Population", "ONU"],
    createdAt: "20 mai 2026"
  },
  {
    id: "STK-007",
    title: "L'équipe de France remportera la Coupe du Monde 2026",
    description: "Avec la génération dorée actuelle et l'avantage de la préparation, l'équipe de France s'imposera lors de la Coupe du Monde 2026 organisée en Amérique du Nord.",
    author: "R. Platini",
    authorInitials: "RP",
    status: "resolved",
    statusLabel: "Résolue",
    badgeClass: "badge-resolved",
    category: "Sport",
    deadline: "19 juil. 2026",
    deadlineISO: "2026-07-19",
    amount: "1 000 €",
    amountRaw: 1000,
    resolution: "Résultat officiel",
    source: "FIFA — Résultats officiels Coupe du Monde 2026",
    criteria: "L'Équipe de France de football doit remporter la finale de la Coupe du Monde FIFA 2026.",
    proofs: [
      { type: "official", icon: "🏆", label: "FIFA", detail: "Résultats officiels du tournoi" }
    ],
    causes: [
      { name: "Sport pour tous", percent: 100 }
    ],
    parties: [
      { name: "R. Platini", initials: "RP", role: "Auteur", amount: "1 000 €" },
      { name: "D. Beckham", initials: "DB", role: "Contradicteur", amount: "1 000 €" }
    ],
    challenger: { name: "D. Beckham", initials: "DB", amount: "1 000 €" },
    timeline: [
      { date: "1 jan. 2026", text: "Take créée" },
      { date: "5 jan. 2026", text: "Contradicteur engagé" },
      { date: "10 jan. 2026", text: "Scellée" },
      { date: "19 juil. 2026", text: "Résolution — En attente résultat final" }
    ],
    tags: ["Football", "Coupe du Monde", "France", "2026"],
    createdAt: "1 jan. 2026"
  },
  {
    id: "STK-008",
    title: "OpenAI sera valorisée à plus de 1 000 milliards USD d'ici fin 2026",
    description: "L'accélération des revenus, les partenariats stratégiques et la position dominante dans l'IA générative porteront la valorisation d'OpenAI au-delà du trillion de dollars.",
    author: "A. Turing",
    authorInitials: "AT",
    status: "archived",
    statusLabel: "Archivée",
    badgeClass: "badge-archived",
    category: "Technologie",
    deadline: "31 déc. 2026",
    deadlineISO: "2026-12-31",
    amount: "800 €",
    amountRaw: 800,
    resolution: "Donnée publique",
    source: "Dernière levée de fonds ou introduction en bourse publiée",
    criteria: "La valorisation d'OpenAI, telle que rapportée par sa dernière levée de fonds, transaction secondaire vérifiable, ou capitalisation boursière en cas d'IPO, doit dépasser 1 000 000 000 000 USD.",
    proofs: [
      { type: "doc", icon: "📰", label: "Sources financières", detail: "SEC filings, communiqués officiels" }
    ],
    causes: [
      { name: "Recherche en IA ouverte", percent: 100 }
    ],
    parties: [
      { name: "A. Turing", initials: "AT", role: "Auteur", amount: "800 €" }
    ],
    challenger: null,
    timeline: [
      { date: "15 nov. 2025", text: "Take créée et scellée" },
      { date: "10 mai 2026", text: "Archivée — critères jugés non mesurables" }
    ],
    tags: ["OpenAI", "IA", "Valorisation", "Tech"],
    createdAt: "15 nov. 2025"
  }
];

const STATUS_FILTER_MAP = {
  all: null,
  sealed: "sealed",
  resolving: "resolving",
  resolved: "resolved",
  draft: "draft",
  archived: "archived",
  negotiation: "negotiation"
};

// ===== NAVIGATION =====

function navigateTo(page, param) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.navbar-nav a').forEach(a => a.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
  }

  const navLink = document.querySelector(`.navbar-nav a[data-nav="${page}"]`);
  if (navLink) navLink.classList.add('active');

  if (page === 'take' && param) {
    renderTakeDetail(param);
  }

  if (page === 'challenge' && param) {
    renderChallenge(param);
  }

  if (page === 'profil') {
    renderProfileTakes();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const parts = hash.split('/');
  const page = parts[0];
  const param = parts[1];
  navigateTo(page, param);
}

window.addEventListener('hashchange', handleHash);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      const nav = el.getAttribute('data-nav');
      if (nav) {
        window.location.hash = nav;
      }
    });
  });

  renderTakesList();
  handleHash();
  initFilters();
});

// ===== RENDER TAKES LIST =====

function renderTakesList(filter, searchQuery, sortBy) {
  const container = document.getElementById('takes-list');
  if (!container) return;

  let filtered = TAKES;

  if (filter && filter !== 'all') {
    filtered = filtered.filter(t => t.status === filter);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.author.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  if (sortBy === 'deadline') {
    filtered = [...filtered].sort((a, b) => a.deadlineISO.localeCompare(b.deadlineISO));
  } else if (sortBy === 'amount-desc') {
    filtered = [...filtered].sort((a, b) => b.amountRaw - a.amountRaw);
  } else if (sortBy === 'amount-asc') {
    filtered = [...filtered].sort((a, b) => a.amountRaw - b.amountRaw);
  }

  const countEl = document.getElementById('registre-count');
  if (countEl) {
    countEl.textContent = `${filtered.length} take${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Aucune take trouvée</h3>
        <p>Essayez de modifier vos filtres ou votre recherche.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(take => `
    <a class="take-card" href="#take/${take.id}" onclick="window.location.hash='take/${take.id}'">
      <div class="take-card-body">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem;">
          <span class="badge ${take.badgeClass}">${take.statusLabel}</span>
          <span class="tag">${take.category}</span>
        </div>
        <h3>${take.title}</h3>
        <div class="take-card-meta">
          <span class="take-meta-item">
            [USER]
            ${take.author}
          </span>
          <span class="take-meta-item">
            [DEADLINE]
            ${take.deadline}
          </span>
          ${take.challenger ? `
          <span class="take-meta-item">
            [CONTRADICTEUR]
            ${take.challenger.name}
          </span>` : `
          <span class="take-meta-item take-meta-item--muted">
            [UNILATÉRALE]
            audit IA + comité
          </span>`}
        </div>
      </div>
      <div class="take-card-right">
        <div>
          <div class="take-amount">${take.amount}</div>
          <div class="take-amount-label">engagé</div>
        </div>
      </div>
    </a>
  `).join('');
}

// ===== RENDER TAKE DETAIL =====

function renderTakeDetail(takeId) {
  const take = TAKES.find(t => t.id === takeId);
  if (!take) return;

  document.getElementById('take-detail-breadcrumb').textContent = take.id;

  // Header
  const sealStatuses = ['sealed', 'resolved', 'resolving'];
  const sealHashHtml = sealStatuses.includes(take.status) ? `
    <div class="seal-hash">
      <div class="seal-icon">S</div>
      <div class="seal-info">
        <div class="seal-label">Sceau d'intégrité</div>
        <div class="seal-value">sha256:${generateHash(take.id)}</div>
      </div>
    </div>
  ` : '';

  document.getElementById('take-detail-header').innerHTML = `
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
      <span class="badge ${take.badgeClass}">${take.statusLabel}</span>
      <span class="tag">${take.category}</span>
      <span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-muted);">${take.id}</span>
    </div>
    <h1>${take.title}</h1>
    <div class="take-detail-meta">
      <span class="take-meta-item">
        [USER]
        ${take.author}
      </span>
      <span class="take-meta-item">
        [DEADLINE]
        ${take.deadline}
      </span>
      <span class="take-meta-item">
        [CREATED]
        ${take.createdAt}
      </span>
    </div>
    ${sealHashHtml}
  `;

  // Main content
  document.getElementById('take-detail-main').innerHTML = `
    <div class="take-section">
      <div class="take-section-title">Description</div>
      <p>${take.description}</p>
    </div>

    <div class="take-section">
      <div class="take-section-title">Protocole de résolution</div>
      <p><strong>Type :</strong> ${take.resolution}</p>
      <p style="margin-top:0.5rem"><strong>Source :</strong> ${take.source}</p>
      <p style="margin-top:0.5rem"><strong>Critères :</strong> ${take.criteria}</p>
      
      ${take.aiAudit ? `
      <div class="ai-audit-container">
        <div class="ai-audit-header">
          <span>Audit de Protocole — vérification de la robustesse, pas de l'issue</span>
          <span class="ai-audit-status ${take.aiAudit.status}">[${take.aiAudit.statusLabel}]</span>
        </div>
        <div class="ai-audit-log">
          ${take.aiAudit.logs.map(log => `
            <div class="ai-audit-line">
              <span class="ai-audit-prefix">></span>
              <span class="ai-audit-${log.type}">${log.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}
    </div>

    <div class="take-section">
      <div class="take-section-title">Preuves attendues</div>
      ${take.proofs.map(p => `
        <div class="proof-item">
          <div class="proof-icon">[${p.type.toUpperCase()}]</div>
          <div class="proof-info">
            <h4>${p.label}</h4>
            <p>${p.detail}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="take-section">
      <div class="take-section-title">Redistribution en cas d'échec</div>
      <p class="take-section-note">// les fonds perdus sont reversés à des causes pré-validées par la plateforme. L'auteur choisit la pondération à partir d'une <a href="#" onclick="showToast('Liste des causes validées (à venir)'); return false;">liste fermée</a>. Aucune redistribution libre ne peut être paramétrée.</p>
      ${take.causes.map(c => `
        <div class="redistribution-item">
          <div class="redistribution-bar-container">
            <div class="redistribution-bar-label">
              <span><span class="redistribution-badge">[CAUSE VALIDÉE]</span> ${c.name}</span>
              <span>${c.percent}%</span>
            </div>
            <div class="redistribution-bar">
              <div class="redistribution-bar-fill" style="width:${c.percent}%"></div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="take-section">
      <div class="take-section-title">Tags</div>
      <div class="tag-list">
        ${take.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  const modeLabel = take.challenger ? 'MODE CONTRADICTOIRE' : 'MODE UNILATÉRAL';
  const modeDesc = take.challenger
    ? 'Une contradiction a été déposée. Le protocole a été négocié et validé par les deux parties, en complément de l\'audit algorithmique.'
    : 'Aucun contradicteur n\'a contesté cette take. La validité du protocole repose sur l\'audit algorithmique, complété d\'un comité humain pour les protocoles complexes.';

  document.getElementById('take-detail-sidebar').innerHTML = `
    <div class="sidebar-card">
      <div class="sidebar-mode-tag">${modeLabel}</div>
      <div class="sidebar-mode-desc">${modeDesc}</div>
    </div>

    <div class="sidebar-card">
      <div class="sidebar-card-title">Mises immobilisées</div>
      <div class="sidebar-amount">${take.challenger ? formatAmount(take.amountRaw + parseInt(take.challenger.amount)) + ' €' : take.amount}</div>
      <div class="sidebar-amount-label">total verrouillé jusqu'à résolution — chaque partie récupère sa mise si elle a raison, sinon elle est reversée aux causes</div>
      <div style="margin-top:1.25rem">
        <div class="sidebar-card-title" style="border:none;padding:0;margin-bottom:0.75rem">Parties engagées</div>
        <div class="sidebar-parties">
          ${take.parties.map(p => `
            <div class="party-row">
              <div class="party-avatar">${p.initials}</div>
              <div class="party-info">
                <div class="party-name">${p.name}</div>
                <div class="party-role">${p.role}</div>
              </div>
              <div class="party-amount">${p.amount}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.5rem;">
        <button class="btn btn-primary btn-sm" onclick="window.location.hash='challenge/${take.id}'">Contredire cette take</button>
        <button class="btn btn-secondary btn-sm" onclick="openShareModal('${take.id}')">Partager (acte documentaire)</button>
      </div>
    </div>

    <div class="sidebar-card">
      <div class="sidebar-card-title">Historique</div>
      <div class="timeline">
        ${take.timeline.map((t, i) => `
          <div class="timeline-item">
            <div class="timeline-date">${t.date}</div>
            <div class="timeline-text">${t.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function formatAmount(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// ===== RENDER CHALLENGE =====

function renderChallenge(takeId) {
  const take = TAKES.find(t => t.id === takeId);
  if (!take) {
    document.getElementById('challenge-contract').innerHTML = '<p>Take introuvable.</p>';
    return;
  }

  document.getElementById('challenge-title').innerHTML = `<strong>${take.author}</strong> défend cette hypothèse — vous endossez le rôle de contradicteur`;
  
  const challengerAmount = take.challenger ? take.challenger.amount : take.amount;

  document.getElementById('challenge-contract').innerHTML = `
    <div class="challenge-contract-section">
      <div class="challenge-contract-title">L'Affirmation</div>
      <div class="challenge-statement">"${take.title}"</div>
      <div class="challenge-desc">${take.description}</div>
    </div>
    
    <div class="challenge-contract-section">
      <div class="challenge-contract-title">Le Protocole de Résolution</div>
      <div class="challenge-protocol-grid">
        <div class="challenge-protocol-item">
          <div class="challenge-protocol-label">Échéance</div>
          <div class="challenge-protocol-value">${take.deadline}</div>
        </div>
        <div class="challenge-protocol-item">
          <div class="challenge-protocol-label">Type de résolution</div>
          <div class="challenge-protocol-value">${take.resolution}</div>
        </div>
        <div class="challenge-protocol-item" style="grid-column: 1 / -1;">
          <div class="challenge-protocol-label">Source de vérification</div>
          <div class="challenge-protocol-value">${take.source}</div>
        </div>
        <div class="challenge-protocol-item" style="grid-column: 1 / -1;">
          <div class="challenge-protocol-label">Critères de réussite exacts</div>
          <div class="challenge-protocol-value">${take.criteria}</div>
        </div>
      </div>
    </div>
    
    <div class="challenge-contract-section">
      <div class="challenge-contract-title">L'Engagement Suggéré (si mise)</div>
      <div style="display:flex;align-items:center;gap:1rem;">
        <div style="font-family:var(--font-mono);font-size:2rem;font-weight:700;color:var(--accent);">${challengerAmount}</div>
        <div style="color:var(--text-secondary);font-size:0.9rem;">à immobiliser jusqu'au ${take.deadline} — la mise reste optionnelle</div>
      </div>
    </div>
  `;

  document.getElementById('btn-accept-challenge').textContent = `Contredire avec mise (${challengerAmount})`;
}

function acceptChallenge() {
  showConfirm(
    'Confirmer la contradiction avec mise ?',
    'Vous vous engagez formellement sur ce protocole. Vos fonds seront immobilisés jusqu\'à la résolution. En cas d\'erreur, ils seront reversés aux causes d\'intérêt général définies dans le contrat.',
    () => {
      showToast('Contradiction enregistrée (avec mise). Redirection vers le registre...');
      setTimeout(() => {
        window.location.hash = 'registre';
      }, 1500);
    }
  );
}

function contradictWithoutStake() {
  showConfirm(
    'Contredire sans mise ?',
    'Vous contestez formellement ce protocole sans engagement financier. Votre rôle sera documentaire : forcer la clarification ou demander un amendement. Aucune perte possible.',
    () => {
      showToast('Contradiction sans mise enregistrée. Redirection vers le registre...');
      setTimeout(() => {
        window.location.hash = 'registre';
      }, 1500);
    }
  );
}

// ===== SHARE MODAL =====

const SHARE_TEMPLATES = {
  draft: {
    badge: '[NOUVELLE TAKE]',
    badgeClass: 'og-badge--deposit',
    cardClass: 'og-image-card--deposit',
    status: 'EN AUDIT DE PROTOCOLE',
    hash: '// sceau d\'intégrité calculé après audit',
    text: (t) => `Nouvelle take déposée au registre Stake.\n\n"${t.title}"\n\nAuteur : ${t.author} · Mise : ${t.amount} · Échéance : ${t.deadline}\nOracle : ${t.source}\n\nProtocole soumis à l'audit.`
  },
  sealed: {
    badge: '[CONTRAT SCELLÉ]',
    badgeClass: 'og-badge--sealed',
    cardClass: 'og-image-card--sealed',
    status: 'SCELLÉE · OUVERTE À CONTRADICTION',
    text: (t) => `Take scellée au registre Stake.\n\n"${t.title}"\n\nAuteur : ${t.author}${t.challenger ? ` · Contradicteur : ${t.challenger.name}` : ' (mode unilatéral)'} · Échéance : ${t.deadline}\n\nLe contrat est public, immuable et ouvert à contradiction jusqu'à l'échéance.`
  },
  resolving: {
    badge: '[ÉCHÉANCE ATTEINTE]',
    badgeClass: 'og-badge--resolving',
    cardClass: 'og-image-card--resolving',
    status: 'INTERROGATION DE L\'ORACLE',
    text: (t) => `Échéance atteinte sur Stake. Oracle interrogé.\n\n"${t.title}"\n\nSource : ${t.source}\nRésolution en cours. Le verdict sera horodaté et archivé au registre.`
  },
  resolved: {
    badge: '[RÉSOLUE]',
    badgeClass: 'og-badge--true',
    cardClass: 'og-image-card--resolved-true',
    status: 'RÉSOLUE',
    text: (t) => `Take résolue sur Stake.\n\n"${t.title}"\n\nVerdict : à compléter selon le résultat de l'oracle\nAuteur : ${t.author}\n\nContrat archivé au registre public, consultable indéfiniment.`
  }
};

function openShareModal(takeId) {
  const take = TAKES.find(t => t.id === takeId);
  if (!take) return;

  const overlay = document.getElementById('share-overlay');
  if (!overlay) return;

  const stateKey = ['sealed', 'resolving', 'resolved'].includes(take.status) ? take.status : 'draft';
  const tpl = SHARE_TEMPLATES[stateKey];

  // Build preview card based on take state
  const previewFrame = document.getElementById('share-preview-frame');
  if (previewFrame) {
    previewFrame.innerHTML = buildPreviewCard(take, tpl);
  }

  // Pre-fill share text
  const textArea = document.getElementById('share-text');
  if (textArea) {
    textArea.value = tpl.text(take);
  }

  // Build canonical URL (simulated for the proto)
  const canonical = `https://stake.example/take/${take.id}`;
  const linkOutput = document.getElementById('share-link-output');
  if (linkOutput) linkOutput.textContent = canonical;

  // Build channel intents
  const shareText = encodeURIComponent(tpl.text(take));
  const encodedUrl = encodeURIComponent(canonical);

  const twitter = document.getElementById('share-twitter');
  if (twitter) twitter.href = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;

  const linkedin = document.getElementById('share-linkedin');
  if (linkedin) linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const bluesky = document.getElementById('share-bluesky');
  if (bluesky) bluesky.href = `https://bsky.app/intent/compose?text=${shareText}%20${encodedUrl}`;

  const mastodon = document.getElementById('share-mastodon');
  if (mastodon) mastodon.href = `https://mastodonshare.com/?text=${shareText}&url=${encodedUrl}`;

  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';

  overlay.dataset.takeId = take.id;
}

function closeShareModal() {
  const overlay = document.getElementById('share-overlay');
  if (!overlay) return;
  overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

function buildPreviewCard(take, tpl) {
  const hash = (tpl.hash || `sha256:${generateHash(take.id)}`).replace(/^sha256:/, 'sha256:');
  const challengerHtml = take.challenger ? `
    <div class="og-meta-item">
      <div class="og-meta-label">CONTRADICTEUR</div>
      <div class="og-meta-value">${take.challenger.name}</div>
    </div>` : `
    <div class="og-meta-item">
      <div class="og-meta-label">MODE</div>
      <div class="og-meta-value">unilatéral</div>
    </div>`;

  return `
    <div class="og-image-card ${tpl.cardClass}">
      <div class="og-header">
        <div class="og-logo">S</div>
        <div class="og-brand">STAKE</div>
        <div class="og-id">${take.id}</div>
      </div>
      <div class="og-content">
        <div class="og-badge ${tpl.badgeClass}">${tpl.badge}</div>
        <h1 class="og-title">${take.title}</h1>
        <div class="og-meta">
          <div class="og-meta-item">
            <div class="og-meta-label">AUTEUR</div>
            <div class="og-meta-value">${take.author}</div>
          </div>
          <div class="og-meta-item">
            <div class="og-meta-label">MISE</div>
            <div class="og-meta-value og-amount">${take.amount}</div>
          </div>
          <div class="og-meta-item">
            <div class="og-meta-label">ÉCHÉANCE</div>
            <div class="og-meta-value">${take.deadline}</div>
          </div>
          ${challengerHtml}
        </div>
      </div>
      <div class="og-footer">
        <div class="og-status">${tpl.status}</div>
        <div class="og-hash">${hash}</div>
      </div>
    </div>
  `;
}

function copyShareLink() {
  const linkOutput = document.getElementById('share-link-output');
  if (!linkOutput) return;
  const url = linkOutput.textContent;
  navigator.clipboard?.writeText(url).then(
    () => showToast('Lien canonique copié dans le presse-papier'),
    () => showToast('Copie impossible — sélectionnez et copiez manuellement')
  );
}

function downloadShareCard() {
  showToast('Téléchargement PNG simulé — fonctionnalité backend à venir');
}

function copyEmbedCode() {
  const overlay = document.getElementById('share-overlay');
  const takeId = overlay?.dataset.takeId || 'STK-000';
  const embed = `<iframe src="https://stake.example/embed/${takeId}" width="600" height="315" frameborder="0" style="border:1px solid #333"></iframe>`;
  navigator.clipboard?.writeText(embed).then(
    () => showToast('Code d\'embed copié'),
    () => showToast('Copie impossible')
  );
}

// Close share modal on overlay click or Escape
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('share-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeShareModal();
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('share-overlay');
    if (overlay?.classList.contains('visible')) closeShareModal();
  }
});

// ===== FILTERS =====

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const search = document.getElementById('search-takes')?.value || '';
      const sort = document.getElementById('sort-takes')?.value || 'recent';
      renderTakesList(filter, search, sort);
    });
  });

  const searchInput = document.getElementById('search-takes');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
      const sort = document.getElementById('sort-takes')?.value || 'recent';
      renderTakesList(activeFilter, searchInput.value, sort);
    });
  }

  const sortSelect = document.getElementById('sort-takes');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
      const search = document.getElementById('search-takes')?.value || '';
      renderTakesList(activeFilter, search, sortSelect.value);
    });
  }
}

// ===== TOAST =====

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);
}

// ===== MOBILE NAV =====

function toggleMobileNav() {
  const nav = document.querySelector('.navbar-nav');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--bg-surface)';
    nav.style.flexDirection = 'column';
    nav.style.padding = '1rem';
    nav.style.borderBottom = '1px solid var(--border)';
    nav.style.zIndex = '99';
  }
}

// ===== MULTI-STEP FORM =====

function goToStep(step) {
  document.querySelectorAll('.form-step-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const targetPanel = document.querySelector(`.form-step-panel[data-step="${step}"]`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  document.querySelectorAll('.progress-steps .step').forEach(indicator => {
    const indicatorStep = parseInt(indicator.getAttribute('data-step'));
    indicator.classList.remove('active', 'completed');
    if (indicatorStep < step) {
      indicator.classList.add('completed');
    } else if (indicatorStep === step) {
      indicator.classList.add('active');
    }
  });

  if (step === 4) {
    renderSummary();
    document.getElementById('create-audit-container').style.display = 'none';
    document.getElementById('create-audit-log').innerHTML = '';
    document.getElementById('btn-run-audit').style.display = 'block';
    document.getElementById('btn-submit-take').style.display = 'none';
  }
}

function renderSummary() {
  const title = document.getElementById('take-title')?.value || '';
  const desc = document.getElementById('take-desc')?.value || '';
  const deadline = document.getElementById('take-deadline')?.value || '';
  const category = document.getElementById('take-category')?.value || '';
  const resolution = document.getElementById('take-resolution')?.value || '';
  const source = document.getElementById('take-source')?.value || '';
  const criteria = document.getElementById('take-criteria')?.value || '';
  const amount = document.getElementById('take-amount')?.value || '';
  const cause = document.getElementById('take-cause')?.value || '';

  const summaryEl = document.getElementById('take-summary');
  if (!summaryEl) return;

  summaryEl.innerHTML = `
    <div class="take-section">
      <div class="take-section-title">Titre</div>
      <p>${title || '<em>Non renseigné</em>'}</p>
    </div>
    <div class="take-section">
      <div class="take-section-title">Description</div>
      <p>${desc || '<em>Non renseigné</em>'}</p>
    </div>
    <div class="take-section">
      <div class="take-section-title">Catégorie</div>
      <p>${category || '<em>Non renseignée</em>'}</p>
    </div>
    <div class="take-section">
      <div class="take-section-title">Échéance</div>
      <p>${deadline || '<em>Non renseignée</em>'}</p>
    </div>
    <div class="take-section">
      <div class="take-section-title">Protocole de résolution</div>
      <p><strong>Type :</strong> ${resolution || '<em>Non renseigné</em>'}</p>
      <p><strong>Source :</strong> ${source || '<em>Non renseignée</em>'}</p>
      <p><strong>Critères :</strong> ${criteria || '<em>Non renseignés</em>'}</p>
    </div>
    <div class="take-section">
      <div class="take-section-title">Engagement</div>
      <p>${amount ? amount + ' €' : '<em>Non renseigné</em>'}</p>
    </div>
    <div class="take-section">
      <div class="take-section-title">Cause soutenue</div>
      <p>${cause || '<em>Non renseignée</em>'}</p>
    </div>
  `;
}

function submitTake() {
  showConfirm(
    'Sceller et publier au registre ?',
    'Le contrat sera publié au registre public. Le sceau d\'intégrité sera calculé et horodaté. Toute modification ultérieure produira une nouvelle version traçable. Vos fonds seront immobilisés jusqu\'à l\'échéance.',
    () => {
      // Generate a fake hash and timestamp for the proto
      const hashEl = document.getElementById('sealed-success-hash');
      const tsEl = document.getElementById('sealed-success-timestamp');
      if (hashEl) hashEl.textContent = `sha256:${generateHash('STK-NEW-' + Date.now())}`;
      if (tsEl) tsEl.textContent = new Date().toISOString();
      // Reset form for next use
      goToStep(1);
      // Redirect to sealed success page
      window.location.hash = 'sealed-success';
    }
  );
}

function runAuditSimulation() {
  const container = document.getElementById('create-audit-container');
  const log = document.getElementById('create-audit-log');
  const status = document.getElementById('create-audit-status');
  const btnAudit = document.getElementById('btn-run-audit');
  const btnSubmit = document.getElementById('btn-submit-take');

  container.style.display = 'block';
  btnAudit.style.display = 'none';
  log.innerHTML = '';
  status.textContent = '[EN COURS]';
  status.className = 'ai-audit-status';

  const lines = [
    { type: 'info', text: "Analyse sémantique de l'affirmation...", delay: 500 },
    { type: 'pass', text: "[CHECK] Affirmation détectée comme falsifiable", delay: 1200 },
    { type: 'info', text: "Vérification de la source de résolution...", delay: 2000 },
    { type: 'warn', text: "[WARN] Source personnalisée détectée. L'oracle nécessitera une validation manuelle.", delay: 3000 },
    { type: 'info', text: "Analyse des critères de réussite...", delay: 3500 },
    { type: 'pass', text: "[CHECK] Critères suffisamment précis", delay: 4500 },
    { type: 'info', text: "Génération du rapport...", delay: 5000 }
  ];

  let currentDelay = 0;
  lines.forEach((line, index) => {
    setTimeout(() => {
      const lineEl = document.createElement('div');
      lineEl.className = 'ai-audit-line';
      lineEl.innerHTML = `<span class="ai-audit-prefix">></span><span class="ai-audit-${line.type}">${line.text}</span>`;
      log.appendChild(lineEl);

      if (index === lines.length - 1) {
        setTimeout(() => {
          const finalEl = document.createElement('div');
          finalEl.className = 'ai-audit-line';
          finalEl.innerHTML = `<span class="ai-audit-prefix">></span><span class="ai-audit-info">Conclusion : Protocole acceptable avec réserves. Validation manuelle requise après soumission.</span>`;
          log.appendChild(finalEl);
          
          status.textContent = '[ACCEPTABLE]';
          status.classList.add('warning');
          btnSubmit.style.display = 'block';
        }, 800);
      }
    }, line.delay);
  });
}

// ===== CONFIRMATION DIALOG =====

function showConfirm(title, message, onConfirm) {
  const overlay = document.getElementById('confirm-overlay');
  if (!overlay) return;

  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-message').textContent = message;

  const confirmBtn = document.getElementById('confirm-action');
  confirmBtn.onclick = () => {
    closeConfirm();
    if (onConfirm) onConfirm();
  };

  overlay.classList.add('visible');
}

function closeConfirm() {
  const overlay = document.getElementById('confirm-overlay');
  if (overlay) {
    overlay.classList.remove('visible');
  }
}

// ===== PROFILE =====

function renderProfileTakes() {
  const container = document.getElementById('profile-takes-list');
  if (!container) return;

  const myTakes = TAKES.filter(t => t.author === 'M. Vauban');

  if (myTakes.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Aucune take</h3>
        <p>Vous n'avez pas encore créé de take.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = myTakes.map(take => `
    <a class="take-card" href="#take/${take.id}" onclick="window.location.hash='take/${take.id}'">
      <div class="take-card-body">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem;">
          <span class="badge ${take.badgeClass}">${take.statusLabel}</span>
          <span class="tag">${take.category}</span>
        </div>
        <h3>${take.title}</h3>
        <div class="take-card-meta">
          <span class="take-meta-item">
            [DEADLINE]
            ${take.deadline}
          </span>
        </div>
      </div>
      <div class="take-card-right">
        <div>
          <div class="take-amount">${take.amount}</div>
          <div class="take-amount-label">engagé</div>
        </div>
      </div>
    </a>
  `).join('');
}

// ===== SEAL HASH HELPER =====

function generateHash(id) {
  const hashMap = {
    'STK-001': 'a3f7b2c9d1e845f6907812ab3cd4ef56789a0b1c2d3e4f5a6b7c8d9e0f1a2b3c',
    'STK-002': 'b4e8c3d0e2f956a7018923bc4de5fa67890b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
    'STK-003': 'c5f9d4e1f3a067b8129a34cd5ef6ab78901c2d3e4f5a6b7c8d9e0f1a2b3c4d5e',
    'STK-004': 'd6a0e5f2a4b178c923ab45de6fa7bc89012d3e4f5a6b7c8d9e0f1a2b3c4d5e6f',
    'STK-005': 'e7b1f6a3b5c289d034bc56ef7ab8cd9a123e4f5a6b7c8d9e0f1a2b3c4d5e6f7a',
    'STK-006': 'f8c2a7b4c6d39ae145cd67fa8bc9de0b234f5a6b7c8d9e0f1a2b3c4d5e6f7a8b',
    'STK-007': '09d3b8c5d7e4abf256de78ab9cd0ef1c345a6b7c8d9e0f1a2b3c4d5e6f7a8b9c',
    'STK-008': '1ae4c9d6e8f5bca367ef89bc0de1fa2d456b7c8d9e0f1a2b3c4d5e6f7a8b9c0d'
  };
  if (hashMap[id]) return hashMap[id];
  let hash = '';
  for (let i = 0; i < 64; i++) {
    hash += ((id.charCodeAt(i % id.length) * (i + 7)) % 16).toString(16);
  }
  return hash;
}
