const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("menu-close");
const owlCarousel = document.querySelector(".owl-carousel")

toggle.addEventListener("click", function (e) {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});

closeBtn.addEventListener("click", function (e) {
  menu.classList.remove("open");
});

window.addEventListener("resize", (e) => {
  menuLinks = document.querySelectorAll(".main-menu a");

  if (window.innerWidth < 846) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  }
})

console.log(owlCarousel);

