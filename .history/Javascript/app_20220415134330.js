$(document).ready(function () {
   $('.top').slick({
      infinite: true,
      arrows: true,
      draggable: false,
      //   autoplay: true,
      //   autoplaySpeed: 1500,
      prevArrow:
         "<button type='button' class='slick-prev pull-left'><ion-icon name='arrow-back-outline'></ion-icon></button>",
      nextArrow:
         "<button type='button' class='slick-next pull-right'><ion-icon name='arrow-forward-outline'></ion-icon></button>",
   });
});
