const menuMobileOpen = document.querySelector('.menu-mobile .open')
const menuMobileClose = document.querySelector('.menu-mobile .close')
const menu = document.querySelector('.menu-mobile')
const menuNavigation = document.querySelector('.navigation')
const heading = document.querySelector('.heading')
let isWhite = false


function clickMenu() {
  menuMobileClose.classList.toggle('active')
  menuMobileOpen.classList.toggle('active')
  menuNavigation.classList.toggle('active')
}

menu.addEventListener('click', () => {
  if(isWhite) {
    heading.style.background = '#F8F4F0'
  } else {
    heading.style.background = '#FFF'
  }

  isWhite = !isWhite
})


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});