const opt = document.querySelectorAll(".options li");
const menuBtn = document.querySelector(".mobile_menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
const overflow = document.querySelector(".overflow");
const mobileOpt = document.querySelectorAll(".mobile_menu_options li");


menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".mobile_menu_btn img");
  menuBtn.classList.toggle("active_btn");
  mobileMenu.classList.toggle("active_menu");
  overflow.classList.toggle("active_menu");
  if (menuBtn.classList.contains("active_btn")) {
    icon.src = "./images/icon-close-menu.svg";
  } else {
    icon.src = "./images/icon-menu.svg";
  }
});

opt.forEach((link) => {
  const menu = link.querySelector(".menu");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    menu.classList.toggle("active_menu");
  });
});
mobileOpt.forEach((link) => {
  const menu = link.querySelector(".mobile_opt");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    menu.classList.toggle("active_menu");
  });
});