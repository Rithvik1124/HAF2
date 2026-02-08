document.addEventListener('DOMContentLoaded', () => {

    // NAV & BURGER
    const burger = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");
    const nav = document.querySelector(".main-nav");

    if (burger && menu) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("open");
        });
    }
    document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    burger.classList.remove("active");
  });
});});