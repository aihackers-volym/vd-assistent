import { emails } from './data.js';
import './style.css';

// --- State ---
let selectedEmailId = null;

// --- Initialization ---
function init() {
  setDate();
  renderEmails();
}

// --- Date ---
function setDate() {
  const el = document.getElementById('datePicker');
  if (!el) return;
  
  const now = new Date();
  const offset = now.getTimezoneOffset();
  let today = new Date(now.getTime() - (offset * 60 * 1000));
  el.value = today.toISOString().split('T')[0];
  
  el.addEventListener('change', (e) => {
    // In framtiden: trigger fetch för valt datum
    console.log("Valt nytt datum:", e.target.value);
  });
}

// Customer card functionality removed per Slice v1 update

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

// --- Detail Logic ---
function openEmail(id) {
  selectedEmailId = id;
  renderEmails(); // update active state in list
  
  const email = emails.find(e => e.id === id);
  renderDetailContent(email);

  if (window.innerWidth <= 900) {
    document.getElementById('detailContainer').scrollIntoView({ behavior: 'smooth' });
  }
}

function renderDetailContent(email) {
  const container = document.getElementById('detailContainer');
  
  // Bygg konversations-HTML
  let konversationHtml = '<div class="detail-section"><details><summary>Tidigare konversation</summary><div class="details-content">';
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
  let kallorHtml = '<div class="detail-section"><details><summary>Källor</summary><div class="details-content">';
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
    <!-- Ärenderubrik -->
    <div class="detail-content">
    <div class="info-label" style="margin-bottom: 6px;">Aktuellt Ärende</div>
    <div class="detail-subject" style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">${email.subject}</div>
    <div class="detail-from" style="font-size: 14px; margin-bottom: 32px;">Från: ${email.from}</div>

    <!-- 1. Bedömning -->
    <div class="detail-section">
      <div class="info-label" style="margin-bottom: 8px;">AI Bedömning</div>
      <div class="bedomning-box" style="font-size: 14px; line-height: 1.6; border-left-width: 4px;">${email.bedomning}</div>
    </div>

    <!-- 2. Nästa steg -->
    <div class="detail-section" style="margin-top: 32px;">
      <div class="info-label" style="margin-bottom: 8px;">Föreslaget nästa steg</div>
      <div class="next-step-card">
        <div class="next-step-text" id="actionText-${email.id}">${email.nextStep}</div>
        <div class="next-step-assignee">Ansvarig: <span>${email.assignee}</span></div>
      </div>
    </div>

    <!-- 3. Utkast (om det finns) -->
    ${email.draft ? `
    <div class="detail-section" style="margin-top: 32px;">
      <div class="info-label" style="margin-bottom: 8px;">Utkast / Svar</div>
      <div class="draft-box">${email.draft}</div>
    </div>
    ` : ''}

    <!-- Actions (Godkänn/Justera) -->
    <div class="detail-section" style="margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border-subtle);">
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

    <!-- 4 & 5. Ingen action utförd (Transparens) -->
    <div class="detail-section" style="margin-top: 32px;">
      <div class="no-action-status">
        <strong>Ingen action utförd:</strong> Kräver manuell handling.
      </div>
    </div>

    <!-- 6. Tidigare konversation -->
    <div style="margin-top: 32px;">
      ${konversationHtml}
    </div>

    <!-- 7. Källor -->
    <div style="margin-top: 16px;">
      ${kallorHtml}
    </div>
    
    <div style="height: 60px;"></div> <!-- Bottom Padding -->
    </div>
  `;

  bindDetailActions(email.id);
}

function bindDetailActions(id) {
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
