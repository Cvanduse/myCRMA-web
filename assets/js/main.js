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

  // FAQ Accordion
  // ----------------------------------------
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      const expanded = this.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Open this one if not already open
      if (!expanded) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
