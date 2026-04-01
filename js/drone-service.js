const ctbackdrop = document.querySelector(".contact-us-backdrop");
const ctopenm = document.querySelector(".drone-service__button");
const ctclose = document.querySelector(".close-ct-modal");


ctopenm.addEventListener("click", () => {
  ctbackdrop.classList.add("visible")
})
ctclose.addEventListener("click", () => {
  ctbackdrop.classList.remove("visible")
})

ctbackdrop.addEventListener("click", (e) => {
  if (e.target === ctbackdrop) {
    ctbackdrop.classList.remove("visible");
  }
});