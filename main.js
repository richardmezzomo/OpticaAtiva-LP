const menuMobileOpen = document.querySelector('.menu-mobile .open')
const menuMobileClose = document.querySelector('.menu-mobile .close')
const menu = document.querySelector('.menu-mobile')
const menuNavigation = document.querySelector('.navigation')
const heading = document.querySelector('.heading')
let isWhite = false
const homeLink = document.querySelector('#homeLink')
const homePage = document.querySelector('.home')
const servicesLink = document.querySelector('#servicesLink')
const servicesPage = document.querySelector('.services')
const aboutLink = document.querySelector('#aboutLink')
const aboutPage = document.querySelector('.about')
const contactLink = document.querySelector('#contactLink')
const contactPage = document.querySelector('.footer')

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
    delay: 1500,
    disableOnInteraction: false,
  },
});

homeLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  homePage.scrollIntoView({
    behavior: "smooth",
  });
});


servicesLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  const offsetTop = servicesPage.getBoundingClientRect().top + window.pageYOffset - 90; // calcula a posição final em relação à borda superior da janela de visualização
  window.scrollTo({ top: offsetTop, behavior: "smooth" }); // rola a janela para a posição final
});

aboutLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  const offsetTop = aboutPage.getBoundingClientRect().top + window.pageYOffset - 90; // calcula a posição final em relação à borda superior da janela de visualização
  window.scrollTo({ top: offsetTop, behavior: "smooth" }); // rola a janela para a posição final
});

contactLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  contactPage.scrollIntoView({
    behavior: "smooth",
  });
});

// Obtém todos os links do menu mobile
const menuLinks = document.querySelectorAll('.options li a');

// Adiciona um evento de clique a cada link
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Impede o comportamento padrão do link (que é o de recarregar a página)
    event.preventDefault();

    // Obtém o ID da seção correspondente ao link clicado
    const sectionId = link.getAttribute('href');

    // Obtém a seção correspondente ao ID
    const section = document.getElementById(sectionId);

    // Se a seção existir, rola até ela
    if (section) {
      const navbarHeight = document.querySelector('header').offsetHeight; // altura da barra de navegação
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight; // posição da seção ajustada para a altura da barra de navegação
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' }); // rola a página para a posição da seção ajustada
      clickMenu()
    }
  });
});