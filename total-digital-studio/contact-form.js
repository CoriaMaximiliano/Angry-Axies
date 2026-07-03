(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var phone = "5492643227101";
  var email = "totaldigitalstudio@gmail.com";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.querySelector('[name="name"]').value.trim();
    var whatsapp = form.querySelector('[name="whatsapp"]').value.trim();
    var need = form.querySelector('[name="need"]').value.trim();

    if (!name || !whatsapp || !need) return;

    var lang = document.documentElement.lang || "es";
    var intro =
      lang === "en"
        ? "Hi! I'm interested in a project with Total Digital Studio."
        : "Hola! Me interesa un proyecto con Total Digital Studio.";
    var body =
      intro +
      "\n\n" +
      (lang === "en" ? "Name" : "Nombre") +
      ": " +
      name +
      "\nWhatsApp: " +
      whatsapp +
      "\n" +
      (lang === "en" ? "What I need" : "Qué necesito") +
      ": " +
      need;

    var waUrl = "https://wa.me/" + phone + "?text=" + encodeURIComponent(body);
    window.open(waUrl, "_blank", "noopener,noreferrer");

    var mailSubject = encodeURIComponent("Consulta - Total Digital Studio - " + name);
    var mailBody = encodeURIComponent(body);
    var mailUrl = "mailto:" + email + "?subject=" + mailSubject + "&body=" + mailBody;

    setTimeout(function () {
      window.location.href = mailUrl;
    }, 400);
  });
})();
