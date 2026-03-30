let translations = {};
let currentLang = localStorage.getItem("lang") || "en";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });
}

async function loadTranslations() {
  try {
    const res = await fetch("../data/translations.json");
    

    if (!res.ok) throw new Error("Failed to load translations");

    translations = await res.json();
    applyTranslations();

  } catch (err) {
    console.error("Translation load error:", err);
  }
}

function t(key) {
  return translations[currentLang]?.[key]
      || translations["en"]?.[key]
      || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

loadTranslations();



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
});