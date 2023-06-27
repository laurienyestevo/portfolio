/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});

let items = document.querySelectorAll(".timeline li");

const isElementInViewport = (el) => {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const callbackFunc = () => {
    for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
        }
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);






