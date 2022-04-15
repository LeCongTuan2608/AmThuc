$(document).ready(function () {
   $('.top').slick({
      infinite: true,
      arrows: true,
      draggable: false,
      dots: true,
      //   autoplay: true,
      //   autoplaySpeed: 1500,
      responsive: [
         {
            breakpoint: 501,
            settings: {
               arrows: false,
            },
         },
      ],
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class="slick-next slick-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
   });
});
