const menu = document.getElementById("mobile-menu");
const btnBurguer = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");

// menu.classList.add("menu-opened");

btnBurguer.addEventListener("click", function () {
    menu.classList.add("menu-opened");
})

btnClose.addEventListener("click", function () {
    menu.classList.remove("menu-opened");
})

