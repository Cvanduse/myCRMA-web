// Critical JavaScript - Only essential functionality for immediate interaction
// Loads synchronously for instant interactivity

(function() {
  'use strict';
  
  // Minimal header scroll behavior
  let lastScrollY = 0;
  const header = document.getElementById('main-header');
  
  function updateHeader() {
    const scrollY = window.scrollY;
    if (!header) return;
    
    if (scrollY > 80) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    lastScrollY = scrollY;
  }
  
  // Throttled scroll handler
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Mobile navigation is handled in header.html for better organization
  // and to avoid conflicts with the enhanced navigation system
  
  // Fast form validation for hero CTA
  const heroForm = document.querySelector('.hero-form');
  if (heroForm) {
    heroForm.addEventListener('submit', function(e) {
      const email = this.querySelector('input[type="email"]');
      if (email && !email.value.includes('@')) {
        e.preventDefault();
        email.focus();
        email.style.borderColor = '#ef4444';
      }
    });
  }
  
})();