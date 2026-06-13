/* 2140 192nd Ave SE — interactions: nav scroll, mobile menu, reveal, lightbox */
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav: solid background after scroll
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Lightbox for gallery
  var imgs = document.querySelectorAll(".gallery__item img");
  if (imgs.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Close">&times;</button><img alt="" />';
    document.body.appendChild(box);
    var boxImg = box.querySelector("img");
    var closeBtn = box.querySelector(".lightbox__close");

    function open(src, alt) {
      boxImg.src = src;
      boxImg.alt = alt || "";
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    imgs.forEach(function (img) {
      img.addEventListener("click", function () { open(img.currentSrc || img.src, img.alt); });
    });
    closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) close();
    });
  }

  // Contact form (Web3Forms) — submit via fetch, show inline status
  var form = document.querySelector(".contact__form");
  if (form) {
    var status = form.querySelector(".form__status");
    var submitBtn = form.querySelector('button[type="submit"]');
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) { status.className = "form__status"; status.textContent = "Sending…"; }
      if (submitBtn) { submitBtn.disabled = true; }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
        .then(function (r) {
          if (r.ok) {
            if (status) { status.classList.add("is-ok"); status.textContent = "Thank you — your message has been sent. We'll be in touch shortly."; }
            form.reset();
          } else {
            if (status) { status.classList.add("is-err"); status.textContent = (r.data && r.data.message) || "Something went wrong. Please call (206) 939-8745."; }
          }
        })
        .catch(function () {
          if (status) { status.classList.add("is-err"); status.textContent = "Network error. Please call (206) 939-8745."; }
        })
        .finally(function () { if (submitBtn) { submitBtn.disabled = false; } });
    });
  }
})();
