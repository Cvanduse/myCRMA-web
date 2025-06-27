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

  // Modern FAQ Expand/Collapse
  (function() {
    var faqList = document.querySelector('.modern-faq');
    if (!faqList) return;
    faqList.querySelectorAll('.faq-item').forEach(function(item) {
      var btn = item.querySelector('.faq-question');
      btn.addEventListener('click', function() {
        var isOpen = item.classList.contains('open');
        // Close all
        faqList.querySelectorAll('.faq-item').forEach(function(i) {
          i.classList.remove('open');
          i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        // Open this one if it was not open
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  })();

  // Dynamic Hero Title Rotator
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
})();
