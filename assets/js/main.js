// main script
(function () {
  "use strict";

  // Navigation functionality is handled in header.html for better organization
  // and to avoid conflicts with the enhanced navigation system

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Why Choose Us Section Hover Effects
  // ----------------------------------------
  const whyChooseUsItems = document.querySelectorAll('.why-choose-us-item');
  
  if (whyChooseUsItems.length > 0) {
    whyChooseUsItems.forEach(item => {
      // Add smooth hover effects
      item.addEventListener('mouseenter', function() {
        // Add a small delay for smoother animation
        setTimeout(() => {
          this.style.zIndex = '10';
        }, 50);
      });
      
      item.addEventListener('mouseleave', function() {
        // Reset z-index after animation completes
        setTimeout(() => {
          this.style.zIndex = '1';
        }, 400);
      });
    });
  }

  // Enhanced Dynamic Hero Title Rotator (Gynger-style)
  (function() {
    const animatedTitles = [
      "Expert CRM Solutions",
      "Salesforce Certified Partners",
      "Your Growth Partner",
      "ROI-Driven Results"
    ];
    let idx = 0;
    const el = document.getElementById('dynamic-hero-animated');
    if (!el) return;
    
    function setTitle(idx) {
      el.classList.remove('dynamic-hero-animate');
      // Add a slight delay before changing text for smoother transition
      setTimeout(() => {
        el.textContent = animatedTitles[idx];
        void el.offsetWidth;
        el.classList.add('dynamic-hero-animate');
      }, 100);
    }
    
    setTitle(idx);
    setInterval(() => {
      idx = (idx + 1) % animatedTitles.length;
      setTitle(idx);
    }, 4000); // Slightly slower for better readability
  })();

  // Gynger-Style Scroll-Triggered Reveals
  (function() {
    const revealElements = document.querySelectorAll('.hero-content-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay for staggered effect
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, 100);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '50px'
    });
    
    revealElements.forEach((el, index) => {
      // Add initial delay based on element order
      el.style.transitionDelay = `${0.1 + (index * 0.1)}s`;
      revealObserver.observe(el);
    });
  })();

  // Enhanced Button Interactions (Gynger-style)
  (function() {
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
      
      // Add click ripple effect
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
    
    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  })();

  // Sticky Progress Indicator
  (function() {
    const progressBar = document.getElementById('progress-bar');
    const progressIndicator = document.getElementById('progress-indicator');
    
    if (!progressBar || !progressIndicator) return;
    
    function updateProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Update progress bar width
      progressBar.style.width = Math.min(scrollPercent, 100) + '%';
      
      // Add subtle opacity change based on scroll position
      if (scrollPercent > 0) {
        progressIndicator.style.opacity = '1';
      } else {
        progressIndicator.style.opacity = '0.9';
      }
      
      // Add pulse effect when there's significant progress
      if (scrollPercent > 10) {
        progressBar.classList.add('progress-active');
      } else {
        progressBar.classList.remove('progress-active');
      }
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }
    
    function handleScroll() {
      ticking = false;
      requestTick();
    }
    
    // Initialize progress
    updateProgress();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Update on resize
    window.addEventListener('resize', updateProgress, { passive: true });
    
    // Update on page load completion
    window.addEventListener('load', updateProgress);
  })();

  // Floating brands removed for optimal performance

  // Individual Why Choose Us Card Animation - DreamX Style
  (function() {
    var grid = document.querySelector('.dreamx-whychooseus-grid');
    if (!grid) return;
    var cards = grid.querySelectorAll('.dreamx-adv-card');
    
    // Add entrance animation with staggered timing
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.2 });
    
    // Initialize cards for entrance animation
    cards.forEach(function(card, index) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ' + (index * 0.1) + 's, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ' + (index * 0.1) + 's';
      observer.observe(card);
    });
    
    // Individual card hover effects only
    // CSS handles the directional growth - no JavaScript group logic needed
  })();

  // Marquee Pause/Play Control
  (function() {
    const marqueeContent = document.getElementById('marquee-content');
    const marqueeControl = document.getElementById('marquee-control');
    const marqueeIcon = document.getElementById('marquee-icon');
    
    if (!marqueeContent || !marqueeControl || !marqueeIcon) return;
    
    let isPaused = false;
    let animationId = null;
    let startTime = null;
    let currentPosition = 0;
    const animationDuration = 60000; // 60 seconds
    const totalDistance = marqueeContent.scrollWidth / 2; // Half the width for seamless loop
    
    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      
      if (!isPaused) {
        const elapsed = currentTime - startTime;
        const progress = (elapsed % animationDuration) / animationDuration;
        currentPosition = -progress * totalDistance;
        
        marqueeContent.style.transform = `translateX(${currentPosition}px)`;
        animationId = requestAnimationFrame(animate);
      }
    }
    
    function startAnimation() {
      if (!isPaused) {
        startTime = null;
        animationId = requestAnimationFrame(animate);
      }
    }
    
    function stopAnimation() {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
    
    marqueeControl.addEventListener('click', function() {
      isPaused = !isPaused;
      
      if (isPaused) {
        stopAnimation();
        marqueeIcon.className = 'fa fa-play';
        marqueeControl.setAttribute('aria-label', 'Play marquee');
      } else {
        startAnimation();
        marqueeIcon.className = 'fa fa-pause';
        marqueeControl.setAttribute('aria-label', 'Pause marquee');
      }
    });
    
    // Start the animation initially
    startAnimation();
  })();

  // DreamX Why Choose Us Card Mobile Toggle
  (function() {
    function isMobile() {
      return window.innerWidth <= 900;
    }
    var grid = document.querySelector('.dreamx-advantages-grid');
    if (!grid) return;
    var cards = grid.querySelectorAll('.dreamx-adv-card');
    cards.forEach(function(card) {
      card.addEventListener('click', function(e) {
        if (!isMobile()) return;
        var isOpen = card.classList.contains('open');
        cards.forEach(function(c) { c.classList.remove('open'); });
        if (!isOpen) {
          card.classList.add('open');
        }
      });
    });
    // Optional: close all cards on resize to desktop
    window.addEventListener('resize', function() {
      if (!isMobile()) {
        cards.forEach(function(c) { c.classList.remove('open'); });
      }
    });
  })();

  // Enhanced FAQ Accordion with reliable height calculation
  document.addEventListener('DOMContentLoaded', function() {
    var faqAccordion = document.getElementById('faq-accordion');
    if (!faqAccordion) return;

    // Helper function to get the natural height of an element
    function getNaturalHeight(element) {
      // Create a clone to measure without affecting the original
      var clone = element.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.visibility = 'hidden';
      clone.style.height = 'auto';
      clone.style.maxHeight = 'none';
      clone.style.overflow = 'visible';
      clone.style.padding = window.getComputedStyle(element).padding;
      
      // Append to body to measure
      document.body.appendChild(clone);
      var height = clone.offsetHeight;
      document.body.removeChild(clone);
      
      return height;
    }

    // Helper function to smoothly expand an answer
    function expandAnswer(answer, item, button) {
      var targetHeight = getNaturalHeight(answer);
      
      // Set initial state
      answer.style.height = '0px';
      answer.style.overflow = 'hidden';
      
      // Add open class and set aria
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      
      // Trigger reflow
      answer.offsetHeight;
      
      // Animate to target height
      answer.style.height = targetHeight + 'px';
      
      // After animation, set to auto for responsive behavior
      setTimeout(function() {
        if (item.classList.contains('open')) {
          answer.style.height = 'auto';
          answer.style.overflow = 'visible';
        }
      }, 350); // Match CSS transition duration
    }

    // Helper function to collapse an answer
    function collapseAnswer(answer, item, button) {
      // Get current height and set it explicitly
      var currentHeight = answer.offsetHeight;
      answer.style.height = currentHeight + 'px';
      answer.style.overflow = 'hidden';
      
      // Remove open class and set aria
      item.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      
      // Trigger reflow
      answer.offsetHeight;
      
      // Animate to 0
      answer.style.height = '0px';
    }

    // Main click handler
    faqAccordion.addEventListener('click', function(e) {
      var button = e.target.closest('.faq-question');
      if (!button) return;
      
      var item = button.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isCurrentlyOpen = item.classList.contains('open');
      
      // Close all other items first
      faqAccordion.querySelectorAll('.faq-item').forEach(function(otherItem) {
        if (otherItem !== item && otherItem.classList.contains('open')) {
          var otherAnswer = otherItem.querySelector('.faq-answer');
          var otherButton = otherItem.querySelector('.faq-question');
          if (otherAnswer && otherButton) {
            collapseAnswer(otherAnswer, otherItem, otherButton);
          }
        }
      });
      
      // Toggle current item
      if (!isCurrentlyOpen) {
        expandAnswer(answer, item, button);
      } else {
        collapseAnswer(answer, item, button);
      }
    });

    // Handle window resize
    var resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        var openItems = faqAccordion.querySelectorAll('.faq-item.open');
        openItems.forEach(function(item) {
          var answer = item.querySelector('.faq-answer');
          if (answer) {
            // Temporarily set to auto to recalculate
            answer.style.height = 'auto';
            answer.style.overflow = 'visible';
          }
        });
      }, 250);
    });
  });

  // Performance Monitoring & Core Web Vitals Optimization
  (function() {
    // Optimize animations based on device capabilities
    function optimizePerformance() {
      const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      const isSlowConnection = navigator.connection && 
        (navigator.connection.effectiveType === 'slow-2g' || 
         navigator.connection.effectiveType === '2g' || 
         navigator.connection.effectiveType === '3g');
      
      if (isLowEndDevice || isSlowConnection) {
        // Reduce particle count for low-end devices
        document.querySelectorAll('.particle:nth-child(n+4)').forEach(particle => {
          particle.style.display = 'none';
        });
        
        // Simplify animations
        document.documentElement.style.setProperty('--animation-duration-multiplier', '0.5');
      }
    }
    
    // Web Vitals monitoring (simplified version)
    function measureWebVitals() {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      
      // First Input Delay (FID) - via event timing
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
    
    // Intersection Observer for performance-conscious animations
    function setupIntersectionObserver() {
      const heroSection = document.querySelector('.hero-section');
      if (!heroSection) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start resource-intensive animations only when hero is visible
            entry.target.classList.add('hero-visible');
          } else {
            // Pause animations when not visible to save resources
            entry.target.classList.remove('hero-visible');
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(heroSection);
    }
    
    // Preload critical resources
    function preloadCriticalResources() {
      // Preload hero background patterns
      const link1 = document.createElement('link');
      link1.rel = 'preload';
      link1.as = 'image';
      link1.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">...</svg>';
      document.head.appendChild(link1);
    }
    
    // Initialize performance optimizations
    document.addEventListener('DOMContentLoaded', function() {
      optimizePerformance();
      setupIntersectionObserver();
      preloadCriticalResources();
      
      // Only measure Web Vitals in production or when flag is set
      if (window.location.hostname !== 'localhost' || window.measureWebVitals) {
        measureWebVitals();
      }
    });
    
    // CSS containment for better performance
    const style = document.createElement('style');
    style.textContent = `
      .hero-section {
        contain: layout style paint;
      }
      .hero-particles {
        contain: strict;
      }
      .hero-parallax-element {
        contain: layout style paint;
      }
    `;
    document.head.appendChild(style);
  })();

})();
