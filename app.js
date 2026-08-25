/* ==========================================================================
   Coaching & Tech Training Website - Application Logic & Student Portal
   ========================================================================== */

// --- Default Demo Student State ---
const DEFAULT_STUDENT = {
  name: "Aman Sharma",
  email: "aman.student@gmail.com",
  batch: "Salesforce Morning Batch (07:30 AM)",
  progress: 68,
  hoursLearned: 42,
  modulesCompleted: 3,
  totalModules: 5,
  attendance: "96%",
  doubts: [
    {
      id: 1,
      topic: "Apex Triggers",
      question: "How do we handle Governor limits when processing bulk records in record-triggered flows vs Apex Triggers?",
      date: "Aug 22, 2026",
      status: "Answered",
      reply: "Great question Aman! In Apex Triggers, we bulkify using Collections (Lists/Maps) outside loops. Record-Triggered Flows automatically bulkify SOQL/DML actions per transaction batch."
    },
    {
      id: 2,
      topic: "Lightning Web Components",
      question: "What is the difference between @track and @api in modern LWC?",
      date: "Aug 24, 2026",
      status: "Answered",
      reply: "@api makes a property public so parent components can pass values. In modern LWC (API version 47+), all top-level properties are reactive by default, so @track is only needed for objects/arrays internal mutations."
    }
  ],
  assignments: [
    { id: 1, title: "Lab 1: Salesforce Security & OWD Setup", due: "Aug 10, 2026", status: "Graded (100%)", repo: "https://github.com/amansharma/sfdc-admin-lab1" },
    { id: 2, title: "Lab 2: Apex Trigger Bulkification & Test Class", due: "Aug 18, 2026", status: "Graded (95%)", repo: "https://github.com/amansharma/apex-trigger-framework" },
    { id: 3, title: "Lab 3: LWC Weather API Integration Component", due: "Sept 02, 2026", status: "Pending Submission", repo: "" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbarScroll();
  initMobileDrawer();
  initBatchFilter();
  initAccordions();
  initFeeCalculator();
  initModal();
  initForms();
  initSeatTimers();
  
  // Student Portal Initializations
  initAuthManager();
  initPortalTabs();
  initStudentInteractions();
});

/* --- Theme Switcher --- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
    showToast(`Switched to ${theme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
  } else {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
  }
}

/* --- Sticky Navbar Scroll --- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --- Mobile Drawer --- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* --- Batch Filter --- */
function initBatchFilter() {
  const filterBtns = document.querySelectorAll('.tab-btn[data-filter]');
  const batchCards = document.querySelectorAll('.batch-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      batchCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'toast-in 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --- Accordions --- */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.closest('.accordion-item');
      const isAlreadyActive = parentItem.classList.contains('active');

      const container = parentItem.closest('.curriculum-container, .faq-container');
      if (container) {
        container.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
        });
      }

      if (!isAlreadyActive) {
        parentItem.classList.add('active');
      }
    });
  });
}

/* --- Fee Calculator --- */
function initFeeCalculator() {
  const monthsSlider = document.getElementById('monthsSlider');
  const monthsValue = document.getElementById('monthsValue');
  const emiAmount = document.getElementById('emiAmount');
  const totalSavings = document.getElementById('totalSavings');

  if (!monthsSlider || !emiAmount) return;

  const totalCourseFee = 20000;
  const discountedFee = 5000;

  function calculateEMI() {
    const months = parseInt(monthsSlider.value, 10);
    monthsValue.textContent = `${months} ${months === 1 ? 'Month' : 'Months'}`;

    const monthlyInstallment = Math.round(discountedFee / months);
    emiAmount.textContent = `₹${monthlyInstallment.toLocaleString('en-IN')}`;

    const savings = totalCourseFee - discountedFee;
    totalSavings.textContent = `₹${savings.toLocaleString('en-IN')}`;
  }

  monthsSlider.addEventListener('input', calculateEMI);
  calculateEMI();
}

/* --- Modals --- */
function initModal() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const openBtns = document.querySelectorAll('[data-open-modal]');
  const closeBtns = document.querySelectorAll('[data-close-modal]');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModalId = btn.getAttribute('data-target-modal') || 'enrollModal';
      const modalOverlay = document.getElementById(targetModalId);
      
      const batchName = btn.getAttribute('data-batch') || 'Salesforce Live Online Batch';
      const selectedBatchInput = document.getElementById('modalSelectedBatch');
      if (selectedBatchInput) {
        selectedBatchInput.value = batchName;
      }

      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlays.forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
    });
  });

  modalOverlays.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* --- General Form Handler --- */
function initForms() {
  const forms = document.querySelectorAll('form[data-ajax-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('input[type="text"]');
      const name = nameInput ? nameInput.value : 'Student';

      const modalOverlay = form.closest('.modal-overlay');
      if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }

      form.reset();
      showToast(`🎉 Congratulations ${name}! Your request has been sent to Gautam Chaskar. Our counselor will call you shortly.`, 'success');
    });
  });
}

/* --- Countdown Timer --- */
function initSeatTimers() {
  const countdownElements = document.querySelectorAll('[data-countdown]');

  countdownElements.forEach(el => {
    let seconds = 3600 * 4 + 18 * 60 + 45;

    const timer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timer);
        el.textContent = "Registration Closing Soon!";
        return;
      }

      seconds--;
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      el.textContent = `${hrs.toString().padStart(2, '0')}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    }, 1000);
  });
}

/* --- STUDENT PORTAL AUTH MANAGER --- */
function initAuthManager() {
  let studentData = JSON.parse(localStorage.getItem('studentSession'));
  if (!studentData) {
    studentData = DEFAULT_STUDENT;
    localStorage.setItem('studentSession', JSON.stringify(studentData));
  }

  updateAuthUI(studentData);

  // Quick Demo Student Login
  const demoLoginBtn = document.getElementById('demoLoginBtn');
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener('click', () => {
      localStorage.setItem('studentSession', JSON.stringify(DEFAULT_STUDENT));
      updateAuthUI(DEFAULT_STUDENT);
      
      const authModal = document.getElementById('authModal');
      if (authModal) authModal.classList.remove('active');
      document.body.style.overflow = '';
      
      showToast(`Welcome back, ${DEFAULT_STUDENT.name}! Student Portal Unlocked.`, 'success');
      
      const dashboardSec = document.getElementById('portal');
      if (dashboardSec) dashboardSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Auth Form Submit
  const authForm = document.getElementById('authForm');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('authEmail').value;
      const name = emailInput.split('@')[0];

      const userSession = {
        ...DEFAULT_STUDENT,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email: emailInput
      };

      localStorage.setItem('studentSession', JSON.stringify(userSession));
      updateAuthUI(userSession);

      const authModal = document.getElementById('authModal');
      if (authModal) authModal.classList.remove('active');
      document.body.style.overflow = '';

      showToast(`Logged in successfully as ${userSession.name}!`, 'success');
    });
  }

  // Logout Handler
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('studentSession');
      showToast('Logged out of Student Portal', 'info');
      setTimeout(() => location.reload(), 800);
    });
  }
}

function updateAuthUI(student) {
  const authNavBtn = document.getElementById('authNavBtn');
  const studentNameEl = document.getElementById('portalStudentName');
  const studentEmailEl = document.getElementById('portalStudentEmail');
  const studentAvatarEl = document.getElementById('portalStudentAvatar');
  const studentBatchEl = document.getElementById('portalStudentBatch');
  const progressBarEl = document.getElementById('portalProgressBar');
  const progressTextEl = document.getElementById('portalProgressText');

  if (authNavBtn) {
    authNavBtn.innerHTML = `👤 ${student.name.split(' ')[0]}'s Portal`;
  }

  if (studentNameEl) studentNameEl.textContent = student.name;
  if (studentEmailEl) studentEmailEl.textContent = student.email;
  if (studentBatchEl) studentBatchEl.textContent = student.batch;
  
  if (studentAvatarEl) {
    const initials = student.name.split(' ').map(n => n[0]).join('').toUpperCase();
    studentAvatarEl.textContent = initials;
  }

  if (progressBarEl) progressBarEl.style.width = `${student.progress}%`;
  if (progressTextEl) progressTextEl.textContent = `${student.progress}% Completed`;

  renderDoubtsThread(student.doubts);
  renderAssignmentsList(student.assignments);
}

/* --- PORTAL TAB CONTROLLER --- */
function initPortalTabs() {
  const tabBtns = document.querySelectorAll('.portal-nav-btn[data-portal-tab]');
  const tabContents = document.querySelectorAll('.portal-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-portal-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabContents.forEach(content => {
        if (content.id === tabId) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

/* --- STUDENT INTERACTION & DOUBTS THREAD --- */
function initStudentInteractions() {
  const doubtForm = document.getElementById('askDoubtForm');

  if (doubtForm) {
    doubtForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const topic = document.getElementById('doubtTopic').value;
      const question = document.getElementById('doubtQuestion').value;

      let student = JSON.parse(localStorage.getItem('studentSession')) || DEFAULT_STUDENT;

      const newDoubt = {
        id: Date.now(),
        topic: topic,
        question: question,
        date: "Just Now",
        status: "Pending Instructor Review",
        reply: null
      };

      student.doubts.unshift(newDoubt);
      localStorage.setItem('studentSession', JSON.stringify(student));

      doubtForm.reset();
      renderDoubtsThread(student.doubts);
      showToast('⚡ Doubt submitted directly to Gautam Chaskar! You will receive notification on reply.', 'success');
    });
  }

  // Assignment Submit Handler
  const assignmentForm = document.getElementById('assignmentForm');
  if (assignmentForm) {
    assignmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const repoUrl = document.getElementById('assignmentRepo').value;

      let student = JSON.parse(localStorage.getItem('studentSession')) || DEFAULT_STUDENT;
      student.assignments[2].repo = repoUrl;
      student.assignments[2].status = "Under Evaluation";
      student.progress = 85;

      localStorage.setItem('studentSession', JSON.stringify(student));
      updateAuthUI(student);

      assignmentForm.reset();
      showToast('🎉 Assignment submitted successfully! Progress updated to 85%.', 'success');
    });
  }
}

function renderDoubtsThread(doubts) {
  const container = document.getElementById('doubtsThreadContainer');
  if (!container) return;

  if (!doubts || doubts.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);">No doubts posted yet. Ask a question above!</p>`;
    return;
  }

  container.innerHTML = doubts.map(d => `
    <div class="qa-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
        <span class="badge badge-primary">${d.topic}</span>
        <span style="font-size:0.8rem; color:var(--text-muted);">${d.date}</span>
      </div>
      <p style="font-weight:600; color:var(--text-primary); margin-bottom:0.5rem;">Q: ${d.question}</p>
      
      ${d.reply ? `
        <div class="qa-reply">
          <div style="font-size:0.825rem; font-weight:700; color:var(--accent-primary); margin-bottom:0.25rem;">
            👨‍💻 Instructor Reply (Gautam Chaskar):
          </div>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">${d.reply}</p>
        </div>
      ` : `
        <div style="font-size:0.8rem; color:var(--accent-amber); font-weight:600;">⏳ ${d.status}</div>
      `}
    </div>
  `).join('');
}

function renderAssignmentsList(assignments) {
  const container = document.getElementById('assignmentsContainer');
  if (!container) return;

  if (!assignments) return;

  container.innerHTML = assignments.map(a => `
    <div class="qa-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <h4 style="font-size:1.05rem;">${a.title}</h4>
        <span class="badge ${a.status.includes('Graded') ? 'badge-emerald' : 'badge-amber'}">${a.status}</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-muted);">Due Date: ${a.due}</p>
      ${a.repo ? `<p style="font-size:0.85rem; color:var(--accent-primary); margin-top:0.4rem;">Submitted Repo: <a href="${a.repo}" target="_blank" style="text-decoration:underline;">${a.repo}</a></p>` : ''}
    </div>
  `).join('');
}

/* --- TOAST NOTIFICATION SYSTEM --- */
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✅' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}
