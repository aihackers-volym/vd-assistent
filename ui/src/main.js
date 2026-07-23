import { emails } from './data.js';
import './style.css';

// --- State ---
let selectedEmailId = null;
let listFilter = 'active'; // 'active' eller 'done'

// --- Initialization ---
function init() {
  setDate();
  bindSidebar();
  bindSegmentControl();
  renderEmails();
}

// --- Sidebar Shell Routing ---
function bindSidebar() {
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const views = document.querySelectorAll('.shell-view');
  const topbarTitle = document.getElementById('topbarTitle');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-view');
      
      if (!targetId) return;

      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      views.forEach(view => {
        if (view.id === targetId) {
          view.classList.remove('hidden');
          view.classList.add('active');
        } else {
          view.classList.add('hidden');
          view.classList.remove('active');
        }
      });
      
      if (topbarTitle) {
        topbarTitle.textContent = item.textContent.trim();
      }
    });
  });
}

function bindSegmentControl() {
  const segBtns = document.querySelectorAll('.segment-btn');
  segBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      listFilter = e.target.getAttribute('data-filter');
      segBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedEmailId = null; // reset selection on tab switch
      renderEmails();
      renderPlaceholder();
    });
  });
}

// --- Date ---
function setDate() {
  const el = document.getElementById('datePicker');
  if (!el) return;
  const now = new Date();
  const offset = now.getTimezoneOffset();
  let today = new Date(now.getTime() - (offset * 60 * 1000));
  el.value = today.toISOString().split('T')[0];
}

// --- Render Emails Incol ---
function renderEmails() {
  const container = document.getElementById('emailCards');
  if(!container) return;
  container.innerHTML = '';

  const activeCount = emails.filter(e => !e.isDone).length;
  const doneCount = emails.filter(e => e.isDone).length;

  const btnActive = document.getElementById('segBtnActive');
  const btnDone = document.getElementById('segBtnDone');
  if (btnActive) btnActive.textContent = `Att hantera (${activeCount})`;
  if (btnDone) btnDone.textContent = `Klart (${doneCount})`;

  const filteredEmails = emails.filter(e => {
    const isDone = !!e.isDone;
    return listFilter === 'done' ? isDone : !isDone;
  });

  filteredEmails.forEach(email => {
    const card = document.createElement('div');
    card.className = `email-card ${selectedEmailId === email.id ? 'active' : ''}`;
    
    card.innerHTML = `
      <div class="email-card-top">
        <div class="from-text">${email.from}</div>
        <div class="email-card-meta">
          <span class="status-tag ${email.tagColor}">${email.tag}</span>
          ${!email.isDone ? `<span class="priority-dot ${email.priority}"></span>` : `<span style="font-size:10px; color:var(--text-muted);">✔</span>`}
        </div>
      </div>
      <div class="subject-text">${email.subject}</div>
    `;

    card.addEventListener('click', () => openEmail(email.id));
    container.appendChild(card);
  });
}

function renderPlaceholder() {
  const container = document.getElementById('detailContainer');
  container.innerHTML = `
    <div class="placeholder-card">
      ${listFilter === 'active' && emails.filter(e => !e.isDone).length === 0 
        ? 'Bra jobbat, inkorgen är tom! 🎉' 
        : 'Välj ett ärende för att se bedömning, konversation och källor.'}
    </div>
  `;
}

// --- Detail Logic ---
function openEmail(id) {
  selectedEmailId = id;
  renderEmails(); // update active state in list
  
  const email = emails.find(e => e.id === id);
  if (email) {
    renderDetailContent(email);
  }

  if (window.innerWidth <= 900) {
    const dc = document.getElementById('detailContainer');
    if(dc) dc.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderDetailContent(email) {
  const container = document.getElementById('detailContainer');
  
  let konversationHtml = '<div class="details-content" style="padding: 0;">';
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
  konversationHtml += '</div>';

  let kallorHtml = '<div class="details-content" style="padding: 0;">';
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
    kallorHtml += '<div class="source-item"><div class="source-snippet">Inga källor extraherades för momentet.</div></div>';
  }
  kallorHtml += '</div>';

  container.innerHTML = `
    <!-- Top Tabs Navigation -->
    <div style="padding: 24px 24px 0;">
      <div class="detail-tabs-nav">
        <button class="detail-tab active" data-tab="tab-arende">Ärende & Åtgärd</button>
        <button class="detail-tab" data-tab="tab-konvo">Konversation</button>
        <button class="detail-tab" data-tab="tab-kallor">Underlag / Källor</button>
      </div>
    </div>

    <!-- Scrollable Content Area -->
    <div class="detail-content" style="padding-top: 0;">
      
      <!-- Flik 1: Ärende -->
      <div id="tab-arende" class="detail-tab-pane active">
        <div class="info-label" style="margin-bottom: 6px;">Aktuellt Ärende</div>
        <div class="detail-subject" style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">${email.subject}</div>
        <div class="detail-from" style="font-size: 14px; margin-bottom: 32px;">Från: ${email.from}</div>

        <!-- Bedömning -->
        <div class="detail-section">
          <div class="info-label" style="margin-bottom: 8px;">AI Bedömning</div>
          <div class="bedomning-box" style="line-height: 1.6; border-left-width: 4px;">${email.bedomning}</div>
        </div>

        <!-- Nästa steg -->
        <div class="detail-section" style="margin-top: 32px;">
          <div class="info-label" style="margin-bottom: 8px;">Föreslaget nästa steg</div>
          <div class="next-step-card">
            <div class="next-step-text" id="actionText-${email.id}">${email.nextStep}</div>
            <div class="next-step-assignee">Ansvarig: <span>${email.assignee}</span></div>
          </div>
        </div>

        <!-- Utkast (om det finns) -->
        ${email.draft !== null ? `
        <div class="detail-section" style="margin-top: 32px;">
          <div class="info-label" style="margin-bottom: 8px;">Svarsutkast</div>
          <div class="draft-box" id="draftBox-${email.id}">${email.draft}</div>
        </div>
        ` : ''}

        <!-- Actions -->
        ${!email.isDone ? `
        <div class="detail-section" style="margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border-subtle);" id="actionBlock-${email.id}">
          <div class="next-step-actions" id="actionButtons-${email.id}">
            <button class="btn btn-approve" id="btnApprove-${email.id}">Godkänn</button>
            <button class="btn btn-adjust" id="btnAdjust-${email.id}">Justera</button>
          </div>
          
          <div class="edit-inline-area" id="editArea-${email.id}">
            <div class="info-label" style="margin-bottom: 4px;">Redigera utkast / instruktion:</div>
            <textarea class="edit-textarea" id="editTextArea-${email.id}">${email.draft !== null ? email.draft : email.nextStep}</textarea>
            <button class="btn btn-save-edit" id="btnSave-${email.id}">Spara ändring</button>
          </div>

          <div class="action-feedback" id="feedback-${email.id}">Ärendet Klart ✔ (Laddar nästa...)</div>
        </div>
        ` : `
        <div class="detail-section" style="margin-top: 32px; padding: 16px; background: var(--bg-input); border-radius: var(--radius-sm); text-align: center; color: var(--text-secondary);">
          Detta ärende är markerat som <strong>Klart / Godkänt</strong>.
          <br/><button class="btn-save-edit" style="margin-top: 8px;" id="btnUndo-${email.id}">Ångra (Flytta till Inkommande)</button>
        </div>
        `}
      </div>

      <!-- Flik 2: Konversation -->
      <div id="tab-konvo" class="detail-tab-pane">
        <div class="info-label" style="margin-bottom: 16px;">Konversationshistorik</div>
        ${konversationHtml}
      </div>

      <!-- Flik 3: Källor -->
      <div id="tab-kallor" class="detail-tab-pane">
        <div class="info-label" style="margin-bottom: 16px;">Identifierade Underlag</div>
        ${kallorHtml}
      </div>

      <!-- Transparens-message bound to bottom across all tabs -->
      <div class="detail-section" style="margin-top: 48px;">
        <div class="no-action-status">
          <strong>System-transparens:</strong> Processen inväntar mänsklig eller autonom signal.
        </div>
      </div>

      <div style="height: 60px;"></div>
    </div>
  `;

  bindDetailActions(email);
  bindDetailTabs();
}

function bindDetailTabs() {
  const tabs = document.querySelectorAll('#detailContainer .detail-tab');
  const panes = document.querySelectorAll('#detailContainer .detail-tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panes.forEach(p => {
        if (p.id === targetId) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    });
  });
}

function bindDetailActions(email) {
  const id = email.id;
  const btnApprove = document.getElementById(`btnApprove-${id}`);
  const btnAdjust = document.getElementById(`btnAdjust-${id}`);
  const btnSave = document.getElementById(`btnSave-${id}`);
  const btnUndo = document.getElementById(`btnUndo-${id}`);
  const editArea = document.getElementById(`editArea-${id}`);
  const feedback = document.getElementById(`feedback-${id}`);
  const actionText = document.getElementById(`actionText-${id}`);
  const draftBox = document.getElementById(`draftBox-${id}`);
  const editTextArea = document.getElementById(`editTextArea-${id}`);
  const actionButtons = document.getElementById(`actionButtons-${id}`);
  const actionBlock = document.getElementById(`actionBlock-${id}`);

  if(btnApprove) {
    btnApprove.addEventListener('click', () => {
      // Mark as done
      email.isDone = true;
      
      // Visual feedback
      if(actionButtons) actionButtons.style.display = 'none';
      if(editArea) editArea.classList.remove('active');
      feedback.style.display = 'block';
      feedback.classList.add('active');
      actionBlock.style.background = 'var(--priority-low-bg)';
      
      // Auto advance after 1.2s delay
      setTimeout(() => {
        const activeEmails = emails.filter(e => !e.isDone);
        if(activeEmails.length > 0) {
          openEmail(activeEmails[0].id);
        } else {
          selectedEmailId = null;
          renderEmails();
          renderPlaceholder();
        }
      }, 1200);
    });
  }

  if(btnAdjust) {
    btnAdjust.addEventListener('click', () => {
      editArea.classList.toggle('active');
    });
  }

  if(btnSave) {
    btnSave.addEventListener('click', () => {
      const nyText = editTextArea.value;
      if (email.draft !== null) {
        email.draft = nyText;
        if(draftBox) draftBox.textContent = nyText;
      } else {
        email.nextStep = nyText;
        if(actionText) actionText.textContent = nyText;
      }
      editArea.classList.remove('active');
    });
  }

  if(btnUndo) {
    btnUndo.addEventListener('click', () => {
      email.isDone = false;
      openEmail(email.id);
    });
  }
}

// --- Start ---
init();
