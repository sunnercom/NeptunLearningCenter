const navLink = document.querySelector('.nav__link')
const burger = document.querySelector('.burger')

function burgerActive() {
    navLink.classList.toggle("burger__active")
}

burger.addEventListener(("click")  , burgerActive)