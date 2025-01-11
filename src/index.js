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
