const navLink = document.querySelector('.nav__link')
const burger = document.querySelector('.burger')
const deactive = document.querySelector('deactive')
function burgerActive() {
    navLink.classList.toggle("burger__active")
}
function active() {
    deactive.classList.toggle("active")
}

burger.addEventListener(("click")  , burgerActive , active)
