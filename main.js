window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  // showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2


  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop



  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

 
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home, 
  #brands,
  #faceter header,
  #faceter .texts,
  #faceter .img-faceter,
  #services,
  #services header,
  #services .cards
  #about, 
  #about header, 
  #about .content`)

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  width: 500,
  loop: true,
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

const swiperDesktop = new Swiper(".mySwiper-desktop", {
  slidesPerView: 6,
  freeMode: true,
  width: 800,
  loop: true,
});