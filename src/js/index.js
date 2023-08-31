const burger = document.querySelector('.burger')

const mobileNav = document.querySelector('.mobile-nav')
const burgerIcon = document.querySelector('.burger-icon')
const closeIcon = document.querySelector('.close-icon')

const backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', function () {
  mobileNav.classList.toggle('d-flex')
  burgerIcon.classList.toggle('d-none')
  closeIcon.classList.toggle('d-block')
  backdrop.classList.toggle('d-block')
  burger.classList.toggle('p-l-30')
})






