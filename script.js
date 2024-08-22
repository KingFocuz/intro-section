const open = document.getElementById("menu-icon");
const close = document.getElementById("close-menu-icon");
const menu = document.getElementById("navbar");
const modal = document.getElementById('modal')
const features = document.getElementById("features");
const company = document.getElementById("company");
const featureList = document.getElementById("feature-list");
const companyList = document.getElementById("company-list");

open.addEventListener("click", () => {
    menu.style.right = '0'
    modal.style.right = '0'
    open.classList.toggle('hidden')
});

close.addEventListener("click", () => {
    menu.style.right = '-100%'
    modal.style.right = '-100%'
    open.classList.toggle('hidden')
})

features.addEventListener("click", () => {
    featureList.classList.toggle("hidden");
    document.getElementsByClassName("arrow-icon-down")[0].classList.toggle("hidden");
    document.getElementsByClassName("arrow-icon-up")[0].classList.toggle("hidden");
});

company.addEventListener("click", () => {
    companyList.classList.toggle("hidden");
    document.getElementsByClassName("arrow-icon-down")[1].classList.toggle("hidden");
    document.getElementsByClassName("arrow-icon-up")[1].classList.toggle("hidden");
})