(function () {
  "use strict";

  var canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d");
  var particles = [];
  var mouse = { x: -9999, y: -9999 };
  var rafId = 0;
  var count = prefersReduced ? 28 : 72;

  function resize() {
    var hero = canvas.parentElement;
    if (!hero) return;
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function initParticles() {
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: rand(0, canvas.width),
        y: rand(0, canvas.height),
        vx: rand(-0.35, 0.35),
        vy: rand(-0.35, 0.35),
        r: rand(1.2, 2.8),
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      var dx = mouse.x - p.x;
      var dy = mouse.y - p.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140 && dist > 0) {
        p.x -= (dx / dist) * 0.6;
        p.y -= (dy / dist) * 0.6;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(96, 165, 250, 0.55)";
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var q = particles[j];
        var ddx = p.x - q.x;
        var ddy = p.y - q.y;
        var d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < 120) {
          ctx.strokeStyle = "rgba(59, 130, 246, " + (1 - d / 120) * 0.22 + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }

    rafId = requestAnimationFrame(draw);
  }

  function onMove(e) {
    var rect = canvas.getBoundingClientRect();
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    var clientY = e.touches ? e.touches[0].clientY : e.clientY;
    mouse.x = clientX - rect.left;
    mouse.y = clientY - rect.top;
  }

  function onLeave() {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  resize();
  initParticles();
  if (!prefersReduced) draw();

  window.addEventListener("resize", function () {
    resize();
    initParticles();
  });

  canvas.addEventListener("mousemove", onMove);
  canvas.addEventListener("touchmove", onMove, { passive: true });
  canvas.addEventListener("mouseleave", onLeave);
  canvas.addEventListener("touchend", onLeave);

  document.querySelectorAll("[data-tilt]").forEach(function (el) {
    if (prefersReduced) return;
    el.addEventListener("mousemove", function (e) {
      var rect = el.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform =
        "perspective(800px) rotateY(" + x * 8 + "deg) rotateX(" + y * -8 + "deg) translateY(-4px)";
    });
    el.addEventListener("mouseleave", function () {
      el.style.transform = "";
    });
  });

  window.addEventListener("beforeunload", function () {
    cancelAnimationFrame(rafId);
  });
})();
