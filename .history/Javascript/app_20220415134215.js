$(document).ready(function () {
   $('.top').slick({
      infinite: true,
      arrows: true,
      draggable: false,
      //   autoplay: true,
      //   autoplaySpeed: 1500,
      prevArrow:
         "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
         "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
   });
});
