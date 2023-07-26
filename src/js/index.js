const burger = document.querySelector('.burger')

const mobileNav = document.querySelector('.mobile-nav')
const burgerIcon = document.querySelector('.burger-icon')
const closeIcon = document.querySelector('.close-icon')

burger.addEventListener('click', function(){
  mobileNav.classList.toggle('d-flex')
  burgerIcon.classList.toggle('d-none')
  closeIcon.classList.toggle('d-block')
})
