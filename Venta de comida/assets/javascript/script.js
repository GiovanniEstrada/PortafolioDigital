'use strict';

// BARRA DE OPCIONES Y SCROLL ---------------------------

console.log("Im in")
const navbar = document.querySelector("[data-navbar]");
const navbarlinks = document.querySelector("[data-nav-link]");
const menuTB = document.querySelector("[data-menu-toggle-btn]");
const header = document.querySelector("[data-header]");

menuTB.addEventListener('click', function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for(let i=0; i < navbarlinks.length; i++){
    navbarlinks[i].addEventListener('click', function () {
        navbar.classList.toggle("active");
        menuTB.classList.toggle("active");
    })
}


window.addEventListener('scroll', function () {
    if(window.scrollY >= 100){
        header.classList.toggle("active");
    }
    else {
        header.classList.remove("active");
    }
})

// CAJA DE BUSQUEDA------------------------------

const exitSearch = document.querySelector("[data-search-close-btn]");
const submitSearch = document.querySelector("[data-search-submit-btn]");
const openSearch = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");


openSearch.addEventListener('click', function () {
    searchContainer.classList.toggle("active");
    this.classList.toggle("active");
})

exitSearch.addEventListener('click', function () {
    searchContainer.classList.remove("active");
})