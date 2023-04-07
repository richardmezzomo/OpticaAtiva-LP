const menuMobileOpen = document.querySelector('.menu-mobile .open')
const menuMobileClose = document.querySelector('.menu-mobile .close')
const menuNavigation = document.querySelector('.navigation')


function clickMenu() {
  menuMobileClose.classList.toggle('active')
  menuMobileOpen.classList.toggle('active')
  menuNavigation.classList.toggle('active')
}