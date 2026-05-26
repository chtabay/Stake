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
    source: "Taux de refinancement principal — publication officielle BCE (ecb.europa.eu)",
    criteria: "Le taux de refinancement principal de la BCE, tel que publié sur ecb.europa.eu, doit être strictement inférieur à 2.00% à la date du 31 décembre 2027 (dernière décision applicable).",
    proofs: [
      { type: "api", icon: "⚡", label: "API BCE", detail: "Taux directeur en temps réel" },
      { type: "doc", icon: "📄", label: "Publication officielle", detail: "Communiqué de presse BCE" }
    ],
    causes: [
      { name: "Éducation financière publique", percent: 70 },
      { name: "Recherche économique", percent: 30 }
    ],
    parties: [
      { name: "M. Vauban", initials: "MV", role: "Porteur", amount: "500 €" }
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
    title: "L'IA générative représentera plus de 10% du PIB des services numériques en France d'ici 2028",
    description: "L'adoption massive de l'IA générative dans les entreprises françaises va transformer le secteur des services numériques, portant la part de l'IA générative à plus de 10% du PIB sectoriel avant fin 2028.",
    author: "C. Turing",
    authorInitials: "CT",
    status: "negotiation",
    statusLabel: "En négociation",
    badgeClass: "badge-negotiation",
    category: "Technologie",
    deadline: "31 déc. 2028",
    deadlineISO: "2028-12-31",
    amount: "1 200 €",
    amountRaw: 1200,
    resolution: "Statistique officielle",
    source: "INSEE — Comptes nationaux, secteur des services numériques",
    criteria: "La part de l'IA générative dans le PIB du secteur des services numériques français, telle que mesurée par l'INSEE ou la DGE, doit dépasser 10% sur l'année civile 2028.",
    proofs: [
      { type: "stat", icon: "📊", label: "INSEE", detail: "Statistiques sectorielles annuelles" },
      { type: "doc", icon: "📋", label: "Rapport DGE", detail: "Direction Générale des Entreprises" }
    ],
    causes: [
      { name: "Formation numérique", percent: 50 },
      { name: "Recherche en IA", percent: 50 }
    ],
    parties: [
      { name: "C. Turing", initials: "CT", role: "Porteur", amount: "1 200 €" },
      { name: "A. Lovelace", initials: "AL", role: "Challenger", amount: "800 €" }
    ],
    challenger: { name: "A. Lovelace", initials: "AL", amount: "800 €" },
    timeline: [
      { date: "2 avril 2026", text: "Take créée en brouillon" },
      { date: "5 avril 2026", text: "Challenger identifié" },
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
      { name: "J. Madison", initials: "JM", role: "Porteur", amount: "2 000 €" },
      { name: "T. Jefferson", initials: "TJ", role: "Challenger", amount: "2 000 €" }
    ],
    challenger: { name: "T. Jefferson", initials: "TJ", amount: "2 000 €" },
    timeline: [
      { date: "10 jan. 2026", text: "Take créée" },
      { date: "15 jan. 2026", text: "Challenger engagé" },
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
      { name: "E. Lavoisier", initials: "EL", role: "Porteur", amount: "750 €" }
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
    source: "CoinMarketCap — Prix spot BTC/USD",
    criteria: "Le prix spot du Bitcoin (BTC) en USD, tel que rapporté par CoinMarketCap (moyenne sur 24h), doit avoir atteint ou dépassé 200 000 USD au moins une fois avant le 1er janvier 2027.",
    proofs: [
      { type: "api", icon: "⚡", label: "CoinMarketCap API", detail: "Prix spot historique BTC/USD" },
      { type: "doc", icon: "📸", label: "Snapshot horodaté", detail: "Capture vérifiable avec timestamp" }
    ],
    causes: [
      { name: "Éducation financière publique", percent: 50 },
      { name: "Lutte contre les arnaques crypto", percent: 50 }
    ],
    parties: [
      { name: "S. Nakamoto", initials: "SN", role: "Porteur", amount: "3 000 €" },
      { name: "P. Krugman", initials: "PK", role: "Challenger", amount: "3 000 €" }
    ],
    challenger: { name: "P. Krugman", initials: "PK", amount: "3 000 €" },
    timeline: [
      { date: "20 fév. 2026", text: "Take créée" },
      { date: "25 fév. 2026", text: "Challenger engagé" },
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
      { name: "T. Malthus", initials: "TM", role: "Porteur", amount: "200 €" }
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
      { name: "R. Platini", initials: "RP", role: "Porteur", amount: "1 000 €" },
      { name: "D. Beckham", initials: "DB", role: "Challenger", amount: "1 000 €" }
    ],
    challenger: { name: "D. Beckham", initials: "DB", amount: "1 000 €" },
    timeline: [
      { date: "1 jan. 2026", text: "Take créée" },
      { date: "5 jan. 2026", text: "Challenger engagé" },
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
      { name: "A. Turing", initials: "AT", role: "Porteur", amount: "800 €" }
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
        <div class="empty-state-icon">&#128220;</div>
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
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
            ${take.author}
          </span>
          <span class="take-meta-item">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
            ${take.deadline}
          </span>
          ${take.challenger ? `
          <span class="take-meta-item">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
            Challenger : ${take.challenger.name}
          </span>` : ''}
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
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
        ${take.author}
      </span>
      <span class="take-meta-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
        Échéance : ${take.deadline}
      </span>
      <span class="take-meta-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1 2h10v2H3V2z"/></svg>
        Créée le ${take.createdAt}
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
    </div>

    <div class="take-section">
      <div class="take-section-title">Preuves attendues</div>
      ${take.proofs.map(p => `
        <div class="proof-item">
          <div class="proof-icon">${p.icon}</div>
          <div class="proof-info">
            <h4>${p.label}</h4>
            <p>${p.detail}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="take-section">
      <div class="take-section-title">Redistribution en cas d'échec</div>
      ${take.causes.map(c => `
        <div class="redistribution-item">
          <div class="redistribution-bar-container">
            <div class="redistribution-bar-label">
              <span>${c.name}</span>
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

  // Sidebar
  document.getElementById('take-detail-sidebar').innerHTML = `
    <div class="sidebar-card">
      <div class="sidebar-card-title">Engagement total</div>
      <div class="sidebar-amount">${take.challenger ? formatAmount(take.amountRaw + parseInt(take.challenger.amount)) + ' €' : take.amount}</div>
      <div class="sidebar-amount-label">immobilisés jusqu'à résolution</div>
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
      <div style="margin-top:1.25rem;display:flex;gap:0.5rem;">
        <button class="btn btn-primary btn-sm" style="flex:1" onclick="window.location.hash='challenge/${take.id}'">Challenger cette take</button>
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

  document.getElementById('challenge-title').innerHTML = `<strong>${take.author}</strong> vous défie sur cette hypothèse`;
  
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
      <div class="challenge-contract-title">L'Engagement Demandé</div>
      <div style="display:flex;align-items:center;gap:1rem;">
        <div style="font-family:var(--font-mono);font-size:2rem;font-weight:700;color:var(--accent);">${challengerAmount}</div>
        <div style="color:var(--text-secondary);font-size:0.9rem;">à immobiliser jusqu'au ${take.deadline}</div>
      </div>
    </div>
  `;

  document.getElementById('btn-accept-challenge').textContent = `Accepter et engager ${challengerAmount}`;
}

function acceptChallenge() {
  showConfirm(
    'Accepter le défi ?',
    'En acceptant, vous vous engagez formellement sur ce protocole. Vos fonds seront immobilisés jusqu\'à la résolution.',
    () => {
      showToast('Défi accepté ! Redirection vers le registre...');
      setTimeout(() => {
        window.location.hash = 'registre';
      }, 1500);
    }
  );
}

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
    'Soumettre cette take ?',
    'Cette action soumettra votre take à validation. Une fois soumise, vous ne pourrez plus la modifier.',
    () => {
      showToast('Take soumise avec succès !');
      goToStep(1);
    }
  );
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
        <div class="empty-state-icon">&#128220;</div>
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
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
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
