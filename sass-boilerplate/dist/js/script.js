const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(" .header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 100) {
    header.classList.add("blue");
  } else {
    header.classList.remove("blue");
  }
});