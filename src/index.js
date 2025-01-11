import './styles/reset.css';
import './styles/style.css';

// eslint-disable-next-line no-new, no-undef
new Swiper('.racket-wrapper', {
  loop: false,
  spaceBetween: 36,
  width: 288,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Mobile menu
const menuBtn = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuChildren = document.querySelectorAll('.mobile-menu *');
const body = document.querySelector('body');

function displayMenu() {
  mobileMenu.classList.add('menu-open');
  body.style.overflow = 'hidden';
}

function hideMenu(item) {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open');
    body.style.overflow = 'auto';
  });
}

menuBtn.addEventListener('click', displayMenu);
mobileMenuChildren.forEach(hideMenu);

