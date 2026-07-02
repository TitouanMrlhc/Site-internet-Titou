/* ============================================================
   TMCustom — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Preloader ---------- */
  window.addEventListener('load', function () {
    var pre = document.getElementById('preloader');
    if (!pre) return;
    setTimeout(function () { pre.classList.add('is-done'); }, 1700);
  });
  // Sécurité : masque le preloader même si "load" traîne
  setTimeout(function () {
    var pre = document.getElementById('preloader');
    if (pre) pre.classList.add('is-done');
  }, 3500);

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById('header');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-scrolled', y > 30);
    if (toTop) toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Burger / mobile nav ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Ferme au clic sur un lien
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (a.closest('.dropdown')) return closeNav();
        // liens normaux
        closeNav();
      });
    });
    function closeNav() {
      nav.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  /* ---------- Dropdown toggle (mobile) ---------- */
  var dd = document.querySelector('.has-dropdown');
  if (dd) {
    var trigger = dd.querySelector('.nav__link');
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        dd.classList.toggle('is-open');
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el, i) {
      // léger décalage en cascade pour les grilles
      el.style.transitionDelay = (Math.min(i % 3, 2) * 90) + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Carousel ---------- */
  var track = document.getElementById('carTrack');
  var prev = document.getElementById('carPrev');
  var next = document.getElementById('carNext');
  var dotsWrap = document.getElementById('carDots');
  if (track) {
    var slides = Array.prototype.slice.call(track.children);

    function slideStep() {
      var first = slides[0];
      if (!first) return 300;
      var gap = parseFloat(getComputedStyle(track).gap) || 20;
      return first.getBoundingClientRect().width + gap;
    }
    if (next) next.addEventListener('click', function () {
      track.scrollBy({ left: slideStep(), behavior: 'smooth' });
    });
    if (prev) prev.addEventListener('click', function () {
      track.scrollBy({ left: -slideStep(), behavior: 'smooth' });
    });

    // Dots
    if (dotsWrap) {
      slides.forEach(function (s, i) {
        var b = document.createElement('button');
        b.setAttribute('aria-label', 'Aller au visuel ' + (i + 1));
        b.addEventListener('click', function () {
          track.scrollTo({ left: slideStep() * i, behavior: 'smooth' });
        });
        dotsWrap.appendChild(b);
      });
      var dots = Array.prototype.slice.call(dotsWrap.children);
      var updateDots = function () {
        var idx = Math.round(track.scrollLeft / slideStep());
        dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
      };
      track.addEventListener('scroll', function () {
        window.requestAnimationFrame(updateDots);
      }, { passive: true });
      updateDots();
    }
  }

  /* ---------- Année du footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
