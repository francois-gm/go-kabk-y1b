

// always declare your variables first

const btnDarkMode = document.querySelector(".btn-dark-mode");

const menu = document.querySelector("nav.menu");
const btnModalToggle = document.querySelector(".btn-modal-toggle");
const btnModalClose = document.querySelector(".btn-modal-close");

// then declare your event listeners

btnDarkMode.addEventListener("click", function () {
  document.body.classList.toggle('dark-mode');
});

btnModalToggle.addEventListener("click", function () {
  menu.classList.toggle('modal-is-open');
});

btnModalClose.addEventListener("click", function () {
  menu.classList.remove('modal-is-open');
});


