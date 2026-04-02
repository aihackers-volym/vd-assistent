import { emails, currentCustomer } from './data.js';
import './style.css';

// --- State ---
let selectedEmailId = null;

// --- Init ---
function init() {
  setDate();
  renderCustomerCard();
  renderEmails();
  bindDrawerClose();
}

// --- Date ---
function setDate() {
  const el = document.getElementById('currentDate');
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  el.textContent = now.toLocaleDateString('sv-SE', options);
}

// --- Customer Card (Static) ---
function renderCustomerCard() {
  const el = document.getElementById('customerDetails');
  el.innerHTML = `
    <div class="info-row">
      <div class="info-label">Kundnamn</div>
      <div class="info-val">${currentCustomer.name}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Kontaktperson</div>
      <div class="info-val">${currentCustomer.contact}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Status</div>
      <div class="info-val"><span class="status-tag blue">${currentCustomer.status}</span></div>
    </div>
    <div class="info-row">
      <div class="info-label">Senaste aktivitet</div>
      <div class="info-val">${currentCustomer.lastActivity}</div>
    </div>
  `;
}

// --- Render Emails Incol ---
function renderEmails() {
  const container = document.getElementById('emailCards');
  container.innerHTML = '';

  emails.forEach(email => {
    const card = document.createElement('div');
    card.className = `email-card ${selectedEmailId === email.id ? 'active' : ''}`;
    
    card.innerHTML = `
      <div class="email-card-top">
        <div class="from-text">${email.from}</div>
        <div class="email-card-meta">
          <span class="status-tag ${email.tagColor}">${email.tag}</span>
          <span class="priority-dot ${email.priority}"></span>
        </div>
      </div>
      <div class="subject-text">${email.subject}</div>
    `;

    card.addEventListener('click', () => openEmail(email.id));
    container.appendChild(card);
  });
}

// --- Drawer Logic ---
function openEmail(id) {
  selectedEmailId = id;
  renderEmails(); // update active state in list
  
  const email = emails.find(e => e.id === id);
  renderDrawerContent(email);
  
  document.getElementById('emailDrawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('active');
}

function bindDrawerClose() {
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);
}

function closeDrawer() {
  document.getElementById('emailDrawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('active');
  selectedEmailId = null;
  renderEmails();
}

function renderDrawerContent(email) {
  const container = document.getElementById('drawerContent');
  
  // Bygg konversations-HTML
  let konversationHtml = '<div class="drawer-section"><details><summary>Tidigare konversation</summary><div class="details-content">';
  if (email.konversation && email.konversation.length > 0) {
    email.konversation.forEach(msg => {
      konversationHtml += `
        <div class="convo-msg">
          <div class="convo-meta">${msg.sender} • ${msg.time}</div>
          <div class="convo-snippet">${msg.snippet}</div>
        </div>
      `;
    });
  } else {
    konversationHtml += '<div class="convo-msg"><div class="convo-snippet">Ingen tidigare historik hittades.</div></div>';
  }
  konversationHtml += '</div></details></div>';

  // Bygg Källor-HTML
  let kallorHtml = '<div class="drawer-section"><details><summary>Källor</summary><div class="details-content">';
  if (email.kallor && email.kallor.length > 0) {
    email.kallor.forEach(src => {
      kallorHtml += `
        <div class="source-item">
          <div class="source-type">${src.type}</div>
          <div class="source-title">${src.title} (${src.date})</div>
          <div class="source-snippet">"${src.snippet}"</div>
          <div class="source-relevance">Relevant: ${src.relevance}</div>
          <a href="${src.rawLink}" class="source-link" target="_blank">Visa full råkälla &rarr;</a>
        </div>
      `;
    });
  } else {
    kallorHtml += '<div class="source-item"><div class="source-snippet">Inga källor extraherades.</div></div>';
  }
  kallorHtml += '</div></details></div>';

  container.innerHTML = `
    <!-- Header info -->
    <div class="drawer-subject">${email.subject}</div>
    <div class="drawer-from">${email.from}</div>

    <!-- 1. Bedömning -->
    <div class="drawer-section">
      <div class="drawer-section-title">Bedömning</div>
      <div class="bedomning-box">${email.bedomning}</div>
    </div>

    <!-- 2. Nästa steg -->
    <div class="drawer-section">
      <div class="drawer-section-title">Nästa steg</div>
      <div class="next-step-card">
        <div class="next-step-text" id="actionText-${email.id}">${email.nextStep}</div>
        <div class="next-step-assignee">Ansvarig: <span>${email.assignee}</span></div>
        
        <div class="next-step-actions" id="actionButtons-${email.id}">
          <button class="btn btn-approve" id="btnApprove-${email.id}">Godkänn</button>
          <button class="btn btn-adjust" id="btnAdjust-${email.id}">Justera</button>
        </div>
        
        <!-- Inline Adjust Area -->
        <div class="edit-inline-area" id="editArea-${email.id}">
          <textarea class="edit-textarea" id="editTextArea-${email.id}">${email.nextStep}</textarea>
          <button class="btn btn-save-edit" id="btnSave-${email.id}">Spara ändring</button>
        </div>

        <!-- Feedback -->
        <div class="action-feedback" id="feedback-${email.id}">Godkänt — ingen action utförd</div>
      </div>
    </div>

    <!-- 3. Utkast (om det finns) -->
    ${email.draft ? `
    <div class="drawer-section">
      <div class="drawer-section-title">Utkast</div>
      <div class="draft-box">${email.draft}</div>
    </div>
    ` : ''}

    <!-- 4. Ingen action utförd / 5. Kräver manuell handling (transparens) -->
    <div class="drawer-section">
      <div class="no-action-status">
        <strong>Information:</strong> Ingen exekverande action utförs per automatik.<br>
        Manuell hantering / utskick krävs av owner.
      </div>
    </div>

    <!-- 6. Tidigare konversation -->
    ${konversationHtml}

    <!-- 7. Källor -->
    ${kallorHtml}
  `;

  // Bind Actions inside the drawer
  bindDrawerActions(email.id);
}

function bindDrawerActions(id) {
  const btnApprove = document.getElementById(`btnApprove-${id}`);
  const btnAdjust = document.getElementById(`btnAdjust-${id}`);
  const btnSave = document.getElementById(`btnSave-${id}`);
  const editArea = document.getElementById(`editArea-${id}`);
  const feedback = document.getElementById(`feedback-${id}`);
  const actionText = document.getElementById(`actionText-${id}`);
  const editTextArea = document.getElementById(`editTextArea-${id}`);

  // Godkänn
  btnApprove.addEventListener('click', () => {
    // Show feedback "Godkänt - ingen action utförd"
    feedback.classList.add('active');
    
    // Dim the buttons to mark approval without strictly hiding them if preferred,
    // but the requirement allows dimming or disabling to show state.
    btnApprove.style.opacity = '0.5';
    btnApprove.textContent = 'Godkänd ✓';
    btnApprove.disabled = true;
    
    // hide edit area if open
    editArea.classList.remove('active');
  });

  // Justera
  btnAdjust.addEventListener('click', () => {
    editArea.classList.toggle('active');
  });

  // Spara ändring (i justera-läget)
  btnSave.addEventListener('click', () => {
    actionText.textContent = editTextArea.value;
    editArea.classList.remove('active');
    
    // reset approve button if they adjusted it after approval
    feedback.classList.remove('active');
    btnApprove.style.opacity = '1';
    btnApprove.textContent = 'Godkänn';
    btnApprove.disabled = false;
  });
}

// --- Start ---
init();
