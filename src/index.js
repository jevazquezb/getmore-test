import './styles/reset.css';
import './styles/style.css';

// Slider with Swiper
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
const body = document.querySelector('body');

// Open mobile menu
function displayMenu() {
  mobileMenu.classList.add('menu-open');
  body.style.overflow = 'hidden';
}

menuBtn.addEventListener('click', displayMenu);

// Close mobile menu
function closeMobileMenu(e) {
  if (
    e.target.parentElement
    &&
    !e.target.parentElement.matches('#hamburger-menu')
    &&
    mobileMenu.classList.contains('menu-open')
    &&
    !e.target.matches('.mobile-menu')
  ) {
    mobileMenu.classList.remove('menu-open');
    body.style.overflow = 'auto';
  }
}

window.addEventListener('click', closeMobileMenu);

// Mobile locale menu
const mobileLocaleBtn = document.querySelector('#mobile-locale-btn');
const mobileLocaleMenu = document.querySelector('.mobile-locale-cont');

function displayLocaleMenu() {
  mobileLocaleMenu.classList.toggle('display-mobile-locale-cont');
}

mobileLocaleBtn.addEventListener('click', displayLocaleMenu);

// Close locale menu when clicking outside of it
function closeLocaleMenu(e) {
  if (
    e.target.parentElement
    &&
    !e.target.parentElement.matches('#mobile-locale-btn')
    &&
    mobileLocaleMenu.classList.contains('display-mobile-locale-cont')
  ) {
    mobileLocaleMenu.classList.remove('display-mobile-locale-cont');
  }
}

window.addEventListener('click', closeLocaleMenu);

// Active elements
function addActiveClass(domElement, activeClassName) {
  if (domElement) {
    const currentActive = document.querySelector(`.${activeClassName}`);
    currentActive.classList.remove(activeClassName);
    domElement.classList.add(activeClassName);
  }
}

function makeMenuLinkActive(link) {
  link.addEventListener('click', () => {
    addActiveClass(link, 'desktop-menu-link-active');

    const underlinedLink = link.querySelector('.desktop-menu-link-line');
    addActiveClass(underlinedLink, 'desktop-menu-link-line-active');
  });
}

function makeActive (list, className) {
  list.forEach(domElement => {
    domElement.addEventListener('click', () => {
      addActiveClass(domElement, className);
    });
  });
}

const desktopMenuLinks = document.querySelectorAll('.desktop-menu-link');
desktopMenuLinks.forEach(makeMenuLinkActive);

const locales = document.querySelectorAll('.locale-btn');
makeActive(locales, 'locale-btn-active');

const mobileLocales = document.querySelectorAll('.mobile-locale-cont li');
makeActive(mobileLocales, 'mobile-locale-btn-active');


