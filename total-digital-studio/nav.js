(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (!toggle || !mobileNav) return;

  var desktopMq = window.matchMedia("(min-width: 900px)");

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    mobileNav.hidden = false;
  }

  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  function onViewportChange() {
    if (desktopMq.matches) closeMenu();
  }

  window.addEventListener("resize", onViewportChange);
  if (desktopMq.addEventListener) {
    desktopMq.addEventListener("change", onViewportChange);
  } else if (desktopMq.addListener) {
    desktopMq.addListener(onViewportChange);
  }
})();
