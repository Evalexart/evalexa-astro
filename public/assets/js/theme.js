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

  function updateThemeToggleLabels(theme) {
    const themeToggles = document.querySelectorAll("[data-theme-toggle]");

    themeToggles.forEach((themeToggle) => {
      const fallback = themeToggle.dataset.themeToggleLabel || "Change theme";

      const label =
        theme === "light"
          ? themeToggle.dataset.themeToDark || fallback
          : themeToggle.dataset.themeToLight || fallback;

      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
    });
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    updateThemeToggleLabels(theme);
  }

  function initThemeControls() {
    const themeToggles = document.querySelectorAll("[data-theme-toggle]");

    if (!themeToggles.length) {
      return;
    }

    themeToggles.forEach((themeToggle) => {
      themeToggle.addEventListener("click", () => {
        const next =
          html.getAttribute("data-theme") === "light" ? "dark" : "light";

        applyTheme(next);
      });
    });
  }

  window.EvalexaTheme = {
    getPreferredTheme,
    applyTheme,
    initThemeControls,
  };
})();
