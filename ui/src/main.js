import { emails } from './data.js';
import './style.css';

// --- State ---
let activeFilter = 'all';
let selectedEmailId = null;

// --- Init ---
function init() {
  setDate();
  renderSummary();
  renderEmails();
  bindNavigation();
  bindFilters();
  bindMenuToggle();
}

// --- Date ---
function setDate() {
  const el = document.getElementById('currentDate');
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  el.textContent = now.toLocaleDateString('sv-SE', options);
}

// --- Summary Stats ---
function renderSummary() {
  const stats = {
    urgent: emails.filter(e => e.jonas).length,
    delegable: emails.filter(e => !e.jonas && !e.batchTag).length,
    batchable: emails.filter(e => e.batchTag).length,
    waiting: emails.filter(e => e.priority === 'medium' && !e.jonas).length
  };

  const el = document.getElementById('summaryStats');
  el.innerHTML = `
    <div class="stat-row">
      <span class="stat-label"><span class="stat-dot urgent"></span>Kräver dig nu</span>
      <span class="stat-value urgent">${stats.urgent}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label"><span class="stat-dot delegable"></span>Kan delegeras</span>
      <span class="stat-value delegable">${stats.delegable}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label"><span class="stat-dot batchable"></span>Batchbart</span>
      <span class="stat-value batchable">${stats.batchable}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label"><span class="stat-dot waiting"></span>Väntar</span>
      <span class="stat-value waiting">${stats.waiting}</span>
    </div>
  `;
}

// --- Render Emails ---
function renderEmails() {
  const container = document.getElementById('emailCards');
  container.innerHTML = '';

  // Separate batchable and non-batchable
  const batchable = emails.filter(e => e.batchTag);
  const regular = emails.filter(e => !e.batchTag);

  // Apply filter
  let filtered = regular;
  if (activeFilter === 'jonas') {
    filtered = regular.filter(e => e.jonas);
  } else if (activeFilter === 'delegera') {
    filtered = regular.filter(e => !e.jonas);
  } else if (activeFilter === 'batch') {
    filtered = [];
  }

  // Sort: high → medium → low
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  // Render regular cards
  filtered.forEach(email => {
    container.appendChild(createEmailCard(email));
  });

  // Render batch group if applicable
  if (activeFilter === 'all' || activeFilter === 'batch') {
    if (batchable.length > 0) {
      container.appendChild(createBatchGroup(batchable));
    }
  }
}

// --- Create Email Card ---
function createEmailCard(email) {
  const card = document.createElement('div');
  card.className = `email-card${selectedEmailId === email.id ? ' active' : ''}`;
  card.dataset.priority = email.priority;
  card.dataset.id = email.id;

  card.innerHTML = `
    <div class="email-card-top">
      <div class="email-priority">
        <span class="priority-dot ${email.priority}"></span>
        <span class="priority-label ${email.priority}">${getPriorityLabel(email.priority)}</span>
      </div>
      <div class="email-tags">
        <span class="email-tag ${email.tagColor}">${email.tag}</span>
        <span class="assignee-badge ${email.jonas ? 'jonas' : 'delegera'}">${email.jonas ? 'JONAS' : 'DELEGERA'}</span>
      </div>
    </div>
    <div class="email-card-subject">${email.subject}</div>
    <div class="email-card-from">${email.from}</div>
  `;

  card.addEventListener('click', () => selectEmail(email.id));
  return card;
}

// --- Create Batch Group ---
function createBatchGroup(batchEmails) {
  const group = document.createElement('div');
  group.className = 'batch-group';

  group.innerHTML = `
    <div class="batch-header">
      <div class="batch-header-left">
        <div class="batch-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
          </svg>
        </div>
        <div>
          <div class="batch-title">Småfrågor</div>
          <div class="batch-count">${batchEmails.length} ärenden kan batchas</div>
        </div>
      </div>
      <span class="batch-badge">BATCH</span>
    </div>
    <div class="batch-items">
      ${batchEmails.map(e => `
        <div class="batch-item" data-id="${e.id}">
          <div class="batch-item-subject">${e.subject}</div>
          <div class="batch-item-from">${e.from}</div>
        </div>
      `).join('')}
    </div>
  `;

  // Bind click events on batch items
  group.querySelectorAll('.batch-item').forEach(item => {
    item.addEventListener('click', () => selectEmail(item.dataset.id));
  });

  return group;
}

// --- Select Email ---
function selectEmail(id) {
  selectedEmailId = id;
  const email = emails.find(e => e.id === id);
  renderEmails(); // Re-render to update active state
  renderDetail(email);
}

// --- Render Detail ---
function renderDetail(email) {
  const el = document.getElementById('detailCard');

  el.innerHTML = `
    <div class="detail-header">
      <div class="detail-subject">${email.subject}</div>
      <div class="detail-from">Från: ${email.from}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">Mejl</div>
      <div class="detail-body">${email.body}</div>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">AI — Nästa steg</div>
      <div class="detail-next-step">${email.nextStep}</div>
    </div>

    ${email.draft ? `
      <div class="detail-section">
        <div class="detail-section-title">Utkast</div>
        <div class="detail-draft">${email.draft}</div>
      </div>
    ` : ''}

    <div class="detail-meta">
      <span class="email-tag ${email.tagColor}">${email.tag}</span>
      <span class="assignee-badge ${email.jonas ? 'jonas' : 'delegera'}">${email.jonas ? 'JONAS' : 'DELEGERA'}</span>
      ${email.approval ? '<span class="email-tag amber">APPROVAL</span>' : ''}
      ${email.batchTag ? '<span class="email-tag blue">BATCH</span>' : ''}
    </div>
  `;

  el.style.animation = 'none';
  el.offsetHeight; // trigger reflow
  el.style.animation = 'fadeIn 0.2s ease forwards';
}

// --- Helpers ---
function getPriorityLabel(p) {
  return { high: 'Hög', medium: 'Medel', low: 'Låg' }[p];
}

// --- Navigation ---
function bindNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      // Close mobile sidebar
      document.getElementById('sidebar').classList.remove('open');
    });
  });
}

// --- Filter Tabs ---
function bindFilters() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.filter;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderEmails();
    });
  });
}

// --- Mobile Menu ---
function bindMenuToggle() {
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !toggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// --- Start ---
init();
