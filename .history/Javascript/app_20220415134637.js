$(document).ready(function () {
   $('.top').slick({
      infinite: true,
      arrows: true,
      draggable: false,
      //   autoplay: true,
      //   autoplaySpeed: 1500,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class="slick-next slick-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
   });
});
