/**
 * Hazara Students Society (HSS) - Official Upcoming Portal
 * Interactive Controllers: Countdown, Manifesto Tabs, Modal, WhatsApp Share, Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initStickyHeader();
  initMobileMenu();
  initManifestoTabs();
  initModal();
  initWhatsAppShare();
  initCopyLink();
  initScrollSpy();
});

/* ==========================================================================
   1. Live Countdown Timer to Official Portal Launch
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // Set target launch date: 45 days from first visit, persisted in localStorage
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
   2. Sticky Glass Header on Scroll
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  // Close drawer when clicking any link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.innerHTML = '☰';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   4. Manifesto & Crux Interactive Tab Switcher
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
   5. Interactive Join / Interest Registration Modal
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

  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission
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

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem('hss_registrations') || '[]');
      existing.push(registration);
      localStorage.setItem('hss_registrations', JSON.stringify(existing));

      closeModal();
      form.reset();

      showToast(`Welcome, ${name}! Your interest has been registered. You'll receive early access to the portal! 🎉`);
    });
  }
}

/* ==========================================================================
   6. WhatsApp Link Sharing with Formatted Preview
   ========================================================================== */
function initWhatsAppShare() {
  const shareBtns = document.querySelectorAll('[data-action="share-whatsapp"]');
  if (!shareBtns.length) return;

  shareBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentUrl = window.location.href;
      const shareMessage = 
`✨ *Hazara Students Society (HSS) - Official Upcoming Portal* ✨

🏛️ Evangelizing the vibrant culture, linguistics & rich heritage of the Hazara region of KPK since the late 1980s.
🎓 Parent Chapter: UET Peshawar (Leading nationwide subsidiaries).

📖 Explore the Manifesto, Cultural Pillars & Upcoming Portal:
${currentUrl}`;

      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
      window.open(whatsappUrl, '_blank');
      showToast('Opening WhatsApp with preview link! 📲');
    });
  });
}

/* ==========================================================================
   7. Copy Link Action
   ========================================================================== */
function initCopyLink() {
  const copyBtns = document.querySelectorAll('[data-action="copy-link"]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        showToast('Official page link copied to clipboard! 📋');
      }).catch(() => {
        showToast('Link copied: ' + url);
      });
    });
  });
}

/* ==========================================================================
   8. Toast Notification Utility
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
  }, 4000);
}

/* ==========================================================================
   9. Active Navigation Link Highlighting on Scroll
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
