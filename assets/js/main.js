/**
 * Skills.Video - Main JavaScript
 * https://skills.video
 */

(function() {
  'use strict';

  // ===================================
  // DOM Ready
  // ===================================
  document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initMobileMenu();
  });

  // ===================================
  // Navbar Scroll Effect
  // ===================================
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
      } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ===================================
  // Smooth Scroll for Anchor Links
  // ===================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===================================
  // Scroll Animations
  // ===================================
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.skill-card, .feature, .content-section').forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // ===================================
  // Mobile Menu Toggle
  // ===================================
  function initMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const nav = document.querySelector('.navbar-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function() {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);

      if (!isExpanded) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.padding = '1rem';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      } else {
        nav.style.display = '';
        nav.style.flexDirection = '';
        nav.style.position = '';
        nav.style.top = '';
        nav.style.left = '';
        nav.style.right = '';
        nav.style.background = '';
        nav.style.padding = '';
        nav.style.boxShadow = '';
      }
    });
  }

  // ===================================
  // Copy Code Block
  // ===================================
  function initCodeCopy() {
    document.querySelectorAll('.code-block').forEach(function(block) {
      const button = document.createElement('button');
      button.className = 'code-copy-btn';
      button.textContent = 'Copy';
      button.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 0.25rem;
        color: #94a3b8;
        cursor: pointer;
        font-size: 0.75rem;
      `;

      block.style.position = 'relative';
      block.appendChild(button);

      button.addEventListener('click', function() {
        const code = block.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(function() {
          button.textContent = 'Copied!';
          setTimeout(function() {
            button.textContent = 'Copy';
          }, 2000);
        });
      });
    });
  }

  // ===================================
  // Utility Functions
  // ===================================
  window.SkillsVideo = {
    // Format duration string
    formatDuration: function(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    // Format file size
    formatFileSize: function(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    },

    // Debounce function
    debounce: function(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  };

})();
