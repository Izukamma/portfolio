const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel").mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    heightRatio: 0.5,
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    cover: true,
    heightRatio: 1,
  }).mount();
});

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
