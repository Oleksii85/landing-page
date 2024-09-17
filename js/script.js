const menuToggle = document.querySelector(".menu-toggle");
const headerMenu = document.querySelector(".header-menu");
const modal = document.querySelector(".modal");
const contact = document.getElementById("contact");
const closeButton = document.querySelector(".close-button");
const emailForm = document.querySelector(".email-form");
const emailInput = document.getElementById("email-input");
const response = document.querySelector(".response");

menuToggle.addEventListener("click", function (event) {
  event.preventDefault();
  headerMenu.classList.toggle("active");
});

contact.addEventListener("click", event => {
  event.preventDefault();
  modal.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  response.textContent = "";
});

emailForm.addEventListener("submit", event => {
  event.preventDefault();
  const email = emailInput.value;
  if (/\S+@\S+\.\S+/.test(email)) {
    response.textContent = "Email sent!";
    emailInput.value = "";
  } else {
    response.textContent = "Enter the correct email!";
  }
});
