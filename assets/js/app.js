var mySwiper = new Swiper('.swiper-container', {
    speed: 100,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

var mySwiper = document.querySelector('.swiper-container').swiper

// Now you can use all slider methods like
mySwiper.slideNext();