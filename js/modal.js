const svgBtn = document.querySelector(".header__svg");
const headerBackdrop = document.querySelector(".header-backdrop");
const headerClose = document.querySelector(".close-header");
const headerLinks = document.querySelectorAll(".header__link-modal");
const hmlang = document.querySelectorAll(".hmlang");

svgBtn.addEventListener("click", () => {
  headerBackdrop.classList.add("visible")
})

headerLinks.forEach(link => {
  link.addEventListener("click", () => {
  headerBackdrop.classList.remove("visible")
})
})

hmlang.forEach(lang => {
  lang.addEventListener("click", () => {
  headerBackdrop.classList.remove("visible")
})
})


headerClose.addEventListener("click", () => {
  headerBackdrop.classList.remove("visible")
  document.getElementById("header").scrollIntoView();
})