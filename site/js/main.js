/* Save Ideas Digital — site interactions (no dependencies) */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.remove("no-js");

  /* ---------- Mobile menu ---------- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("mobile-menu");

  function setMenu(open) {
    if (!header || !toggle) return;
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (menu) menu.hidden = !open;
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!header.classList.contains("nav-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  /* ---------- Active nav link ---------- */
  // Works for /services, /services.html and sub-folder hosting alike.
  var page = window.location.pathname.split("/").pop().replace(/\.html$/, "") || "index";
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.getAttribute("data-nav") === page) link.setAttribute("aria-current", "page");
  });

  /* ---------- Header border on scroll ---------- */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Count-up numbers ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    var end = parseFloat(el.getAttribute("data-count"));
    if (reduceMotion) { el.textContent = end; return; }
    var start = null;
    var duration = 1600;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- Marquee: duplicate content for a seamless loop ---------- */
  document.querySelectorAll(".marquee__track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
    Array.prototype.slice.call(track.children, track.children.length / 2).forEach(function (el) {
      el.setAttribute("aria-hidden", "true");
    });
  });

  /* ---------- Toast ---------- */
  function showToast(title, text) {
    var toast = document.querySelector(".toast");
    if (!toast) return;
    toast.querySelector("strong").textContent = title;
    toast.querySelector("span").textContent = text;
    toast.classList.add("is-shown");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { toast.classList.remove("is-shown"); }, 4200);
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var validateField = function (field) {
      var input = field.querySelector("input, textarea");
      if (!input) return true;
      var value = input.value.trim();
      var ok = true;
      if (input.required && !value) ok = false;
      if (ok && input.type === "email" && value && !emailRe.test(value)) ok = false;
      field.classList.toggle("has-error", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      return ok;
    };

    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector("input, textarea");
      if (!input) return;
      input.addEventListener("blur", function () { validateField(field); });
      input.addEventListener("input", function () {
        if (field.classList.contains("has-error")) validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var firstInvalid = null;
      form.querySelectorAll(".field").forEach(function (field) {
        if (!validateField(field)) {
          valid = false;
          if (!firstInvalid) firstInvalid = field.querySelector("input, textarea");
        }
      });
      if (!valid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var btn = form.querySelector("button[type=submit]");
      var label = btn.querySelector(".btn__label");
      var original = label.textContent;
      btn.disabled = true;
      label.textContent = "Sending…";

      // Simulated submission (same behaviour as the previous React site).
      setTimeout(function () {
        showToast("Message sent!", "We'll get back to you as soon as possible.");
        form.reset();
        btn.disabled = false;
        label.textContent = original;
      }, 1500);
    });
  }

  /* ---------- Open / closed badge (Mon–Fri 9–18, Sydney time) ---------- */
  var badge = document.querySelector(".open-badge");
  if (badge) {
    try {
      var parts = new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Sydney", weekday: "short", hour: "numeric", hour12: false
      }).formatToParts(new Date());
      var wd = "", hr = 0;
      parts.forEach(function (p) {
        if (p.type === "weekday") wd = p.value;
        if (p.type === "hour") hr = parseInt(p.value, 10) % 24;
      });
      var open = ["Sat", "Sun"].indexOf(wd) === -1 && hr >= 9 && hr < 18;
      badge.classList.toggle("is-open", open);
      badge.textContent = open ? "Open now" : "Closed right now";
    } catch (err) { /* leave default text */ }
  }

  /* ---------- Footer: year + back to top ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  document.querySelectorAll(".to-top").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });
})();
