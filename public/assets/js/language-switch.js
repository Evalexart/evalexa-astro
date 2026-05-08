(function () {
  function initLanguageSwitch() {
    const select = document.getElementById("lang-select");

    if (!select) {
      return;
    }

    select.addEventListener("change", () => {
      const lang = select.value;
      const target =
        lang === "en" ? select.dataset.enHref : select.dataset.frHref;

      if (!target) {
        return;
      }

      localStorage.setItem("evalexa-lang", lang);
      window.location.href = target;
    });
  }

  window.addEventListener("DOMContentLoaded", initLanguageSwitch);
})();
