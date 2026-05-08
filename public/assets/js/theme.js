(function () {
  const STORAGE_THEME = "evalexa-theme";
  const html = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
      const label =
        theme === "light"
          ? themeToggle.dataset.themeToDark || themeToggle.dataset.themeToggle
          : themeToggle.dataset.themeToLight || themeToggle.dataset.themeToggle;

      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
    }
  }

  function initThemeControls() {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
      return;
    }

    themeToggle.addEventListener("click", () => {
      const next =
        html.getAttribute("data-theme") === "light" ? "dark" : "light";

      applyTheme(next);
    });
  }

  window.EvalexaTheme = {
    getPreferredTheme,
    applyTheme,
    initThemeControls,
  };
})();
