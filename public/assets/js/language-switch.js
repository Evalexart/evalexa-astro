(function () {
  function initLanguageSwitch() {
    const select = document.getElementById("lang-select");

    if (!select) {
      return;
    }

    select.addEventListener("change", function () {
      const selectedLang = select.value;

      const target =
        selectedLang === "en"
          ? select.getAttribute("data-en-href")
          : select.getAttribute("data-fr-href");

      if (!target) {
        console.warn("Evalexa language switch: missing target URL.", {
          selectedLang,
          frHref: select.getAttribute("data-fr-href"),
          enHref: select.getAttribute("data-en-href"),
        });
        return;
      }

      localStorage.setItem("evalexa-lang", selectedLang);
      window.location.assign(target);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitch);
  } else {
    initLanguageSwitch();
  }
})();
