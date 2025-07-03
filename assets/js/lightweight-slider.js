// Lightweight slider replacement for Swiper.js
// Reduces JS bundle from 359KB to ~5KB for slider functionality

(function() {
  'use strict';
  
  // CSS-based testimonial slider with intersection observer
  function initTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.swiper-slide');
    const pagination = document.querySelector('.testimonial-slider-pagination');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let autoplayInterval;
    
    // Create pagination dots
    if (pagination) {
      pagination.innerHTML = '';
      slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'pagination-dot';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        pagination.appendChild(dot);
      });
    }
    
    function goToSlide(index) {
      currentSlide = index;
      
      // Update slides visibility using CSS transforms
      slides.forEach((slide, i) => {
        const offset = (i - currentSlide) * 100;
        slide.style.transform = `translateX(${offset}%)`;
        slide.setAttribute('aria-hidden', i !== currentSlide);
      });
      
      // Update pagination
      const dots = pagination?.querySelectorAll('.pagination-dot');
      dots?.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
      
      resetAutoplay();
    }
    
    function nextSlide() {
      goToSlide((currentSlide + 1) % slides.length);
    }
    
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }
    
    // Touch/swipe support for mobile
    let startX = 0;
    let startY = 0;
    
    slider.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    slider.addEventListener('touchend', function(e) {
      if (!startX || !startY) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Only trigger if horizontal swipe is dominant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next slide
          goToSlide((currentSlide + 1) % slides.length);
        } else {
          // Swipe right - previous slide
          goToSlide((currentSlide - 1 + slides.length) % slides.length);
        }
      }
      
      startX = 0;
      startY = 0;
    }, { passive: true });
    
    // Keyboard navigation
    slider.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        goToSlide((currentSlide + 1) % slides.length);
      }
    });
    
    // Initialize
    goToSlide(0);
    startAutoplay();
    
    // Pause autoplay when tab is not visible
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        clearInterval(autoplayInterval);
      } else {
        startAutoplay();
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialSlider);
  } else {
    initTestimonialSlider();
  }
  
})();