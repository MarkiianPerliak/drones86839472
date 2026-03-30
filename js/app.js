// DRONES
const drone = document.getElementById("dr1");
const transmitter = document.getElementById("ts1");
const drBackdrop = document.querySelector(".backdropdr");
const tsBackdrop = document.querySelector(".backdropts");
const drClose = document.querySelector(".closedr");
const tsClose = document.querySelector(".closets");

drone.addEventListener("click", () => {
  drBackdrop.classList.add("visible")
})
drClose.addEventListener("click", () => {
  drBackdrop.classList.remove("visible")
})

drBackdrop.addEventListener("click", (e) => {
  if (e.target === drBackdrop) {
    drBackdrop.classList.remove("visible");
  }
});

transmitter.addEventListener("click", () => {
  tsBackdrop.classList.add("visible")
})
tsClose.addEventListener("click", () => {
  tsBackdrop.classList.remove("visible")
})

tsBackdrop.addEventListener("click", (e) => {
  if (e.target === tsBackdrop) {
    tsBackdrop.classList.remove("visible");
  }
});


// CONTACT-US

// const submitBtn = document.querySelector(".contact-us__submit");
// const contactForm = document.getElementById("ct-form")

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault()
//   let name = e.target.user.value;
//   let email = e.target.email.value;
//   let message = e.target.message.value;
// })

// Make sure you include EmailJS SDK first in your HTML:
// <script type="text/javascript" src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>

// const contactForm = document.getElementById("ct-form");

// contactForm.addEventListener("submit", function(e) {
//   e.preventDefault();

//   const formData = {
//     name: e.target.user.value,
//     email: e.target.email.value,
//     message: e.target.message.value
//   };

//   emailjs.send(
//     "YOUR_SERVICE_ID",
//     "YOUR_TEMPLATE_ID",
//     formData,
//     "YOUR_PUBLIC_KEY"
//   )
//   .then(function(response) {
//     alert("Email sent successfully!");
//     contactForm.reset();
//   }, function(error) {
//     console.error("Email send failed:", error);
//     alert("Something went wrong. Please try again.");
//   });
// });

