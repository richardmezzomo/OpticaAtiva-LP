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
  width: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperDesktop = new Swiper(".mySwiper-desktop", {
  slidesPerView: 4,
  freeMode: true,
  width: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperModels = new Swiper(".mySwiperModels", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  width: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperModelsDesktop = new Swiper(".mySwiperModels-desktop", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  width: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
