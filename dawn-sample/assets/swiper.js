const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  // autoHeight: true,
  // slidesPerView: "auto",
  slidesPerView: 1.5,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    }, 835: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    }
  },
  centeredSlides: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
