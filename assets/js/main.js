/**
 * Hazara Students Society (HSS) - Official Portal JavaScript
 * Features: Light/Dark Mode, Smart Hide/Show Navbar on Scroll, Mobile Dock,
 * Countdown, Tabs, Modal, WhatsApp Share, Toast Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCountdown();
  initSmartHeader();
  initMobileDock();
  initManifestoTabs();
  initModal();
  initCabinetAnnouncementModal();
  initWhatsAppShare();
  initCopyLink();
  initIntroTemplateCopy();
  initScrollSpy();
});

/* ==========================================================================
   1. Light / Dark Mode Toggle with LocalStorage
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('hss_theme') || 'dark';
  applyTheme(savedTheme);

  const themeToggleButtons = document.querySelectorAll('#themeToggleBtn, #dockThemeToggle');
  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode 🌓`);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hss_theme', theme);

  const headerBtn = document.getElementById('themeToggleBtn');
  if (headerBtn) {
    headerBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
    headerBtn.setAttribute('title', `Current: ${theme} theme. Click to switch.`);
  }
}

/* ==========================================================================
   2. Smart Sticky Header: Hides on Scroll Down, Shows on Scroll Up
   ========================================================================== */
function initSmartHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;

    // Background blur & shadow
    if (currentScrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide when scrolling down, show when scrolling up
    if (currentScrollY > 80 && currentScrollY > lastScrollY) {
      header.classList.add('nav-hidden');
    } else {
      header.classList.remove('nav-hidden');
    }

    lastScrollY = Math.max(0, currentScrollY);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   3. Mobile Bottom Dock Navigation
   ========================================================================== */
function initMobileDock() {
  const dockItems = document.querySelectorAll('.mobile-dock .dock-item:not(#dockThemeToggle)');
  if (!dockItems.length) return;

  dockItems.forEach(item => {
    item.addEventListener('click', () => {
      dockItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* ==========================================================================
   4. Live Countdown Timer to Portal Launch
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const storageKey = 'hss_launch_timestamp';
  let targetTime = localStorage.getItem(storageKey);

  if (!targetTime) {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(12, 0, 0, 0);
    targetTime = launchDate.getTime();
    localStorage.setItem(storageKey, targetTime);
  } else {
    targetTime = parseInt(targetTime, 10);
  }

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. Manifesto & Crux Interactive Tab Switcher
   ========================================================================== */
function initManifestoTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.manifesto-content-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. Interactive Join / Interest Registration Modal
   ========================================================================== */
function initModal() {
  const openBtns = document.querySelectorAll('[data-open-modal]');
  const modal = document.getElementById('joinModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const form = document.getElementById('joinForm');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('applicantName')?.value || '';
      const email = document.getElementById('applicantEmail')?.value || '';
      const institute = document.getElementById('applicantInstitute')?.value || '';

      const registration = {
        name,
        email,
        institute,
        timestamp: new Date().toISOString()
      };

      const existing = JSON.parse(localStorage.getItem('hss_registrations') || '[]');
      existing.push(registration);
      localStorage.setItem('hss_registrations', JSON.stringify(existing));

      closeModal();
      form.reset();

      showToast(`Welcome, ${name}! Your interest has been registered. 🎉`);
    });
  }
}

/* ==========================================================================
   6b. Auto Pop-up on Home Page: "New Cabinet Announced" -> Takes to Cabinet Page
   ========================================================================== */
function initCabinetAnnouncementModal() {
  const modal = document.getElementById('cabinetAnnouncementModal');
  if (!modal) return;

  const closeBtn = document.getElementById('closeAnnouncementModalBtn');
  const dismissBtn = document.getElementById('dismissAnnouncementBtn');

  function openAnnouncementModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAnnouncementModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Smooth pop-up appearance after brief delay
  setTimeout(() => {
    openAnnouncementModal();
  }, 450);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeAnnouncementModal);
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', closeAnnouncementModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeAnnouncementModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeAnnouncementModal();
    }
  });
}

/* ==========================================================================
   7. WhatsApp Link Sharing with Formatted Preview
   ========================================================================== */
function initWhatsAppShare() {
  const shareBtns = document.querySelectorAll('[data-action="share-whatsapp"]');
  if (!shareBtns.length) return;

  shareBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentUrl = window.location.href;
      const shareMessage = 
`✨ *Hazara Students Society (HSS) - Official Portal* ✨

🏛️ Evangelizing the vibrant culture, linguistics & rich heritage of the Hazara region of KPK since the 1980s when UET became an independent chartered engineering university.
🎓 Parent Chapter: UET Peshawar (Leading nationwide subsidiaries).
📜 *Official 2026 Cabinet Announced!*

📖 Explore the Portal & 2026 Cabinet:
${currentUrl}`;

      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
      window.open(whatsappUrl, '_blank');
      showToast('Opening WhatsApp with preview card! 📲');
    });
  });
}

/* ==========================================================================
   8. Copy Link Action
   ========================================================================== */
function initCopyLink() {
  const copyBtns = document.querySelectorAll('[data-action="copy-link"]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        showToast('Official portal link copied! 📋');
      }).catch(() => {
        showToast('Link copied: ' + url);
      });
    });
  });
}

/* ==========================================================================
   8b. Copy Alumni Intro Message Template
   ========================================================================== */
function initIntroTemplateCopy() {
  const btn = document.getElementById('copyIntroTemplateBtn');
  const codeEl = document.getElementById('introTemplateContent');
  if (!btn || !codeEl) return;

  btn.addEventListener('click', () => {
    const textToCopy = codeEl.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
      const btnText = document.getElementById('copyBtnText');
      if (btnText) {
        btnText.textContent = 'Copied! ✓';
        setTimeout(() => {
          btnText.textContent = 'Copy Template';
        }, 3000);
      }
      showToast('Alumni intro template copied to clipboard! 📋');
    }).catch(() => {
      showToast('Template copied: Ready to paste!');
    });
  });
}

/* ==========================================================================
   9. Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   10. Scroll Spy for Active Navigation & Dock Items
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const dockItems = document.querySelectorAll('.mobile-dock .dock-item:not(#dockThemeToggle)');

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Desktop nav links
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Mobile dock items
        dockItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
