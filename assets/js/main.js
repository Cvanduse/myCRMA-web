// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

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

  // Dynamic Hero Title Rotator
  (function() {
    const animatedTitles = [
      "Expert CRM Solutions",
      "Trusted Advisors",
      "a Salesforce Partner"
    ];
    let idx = 0;
    const el = document.getElementById('dynamic-hero-animated');
    if (!el) return;
    function setTitle(idx) {
      el.classList.remove('dynamic-hero-animate');
      void el.offsetWidth;
      el.textContent = animatedTitles[idx];
      el.classList.add('dynamic-hero-animate');
    }
    setTitle(idx);
    setInterval(() => {
      idx = (idx + 1) % animatedTitles.length;
      setTitle(idx);
    }, 3000);
  })();

  // Enhanced Why Choose Us Card Hover Effect
  (function() {
    var grid = document.getElementById('whyChooseUsGrid');
    if (!grid) return;
    var cards = grid.querySelectorAll('.why-choose-us-card');
    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        cards.forEach(function(c) {
          c.classList.remove('is-hovered', 'is-dimmed');
          if (c === card) {
            c.classList.add('is-hovered');
          } else {
            c.classList.add('is-dimmed');
          }
        });
      });
      card.addEventListener('mouseleave', function() {
        cards.forEach(function(c) {
          c.classList.remove('is-hovered', 'is-dimmed');
        });
      });
    });
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
})();
