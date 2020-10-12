$(function () {
  $('.card-bottom__rating').rateYo({
    rating: 4.5,
    spacing: "1.6px",
    readOnly: true,
    starWidth: "15px",
  });

  $('.weekly-slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.weekly-prev'),
    nextArrow: $('.weekly-next'),
  });

  $('.followers-slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.followers-prev'),
    nextArrow: $('.followers-next'),
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.clients-slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.clients-arrow__prev'),
    nextArrow: $('.clients-arrow__next'),
    responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ],
  });
  var mixer = mixitup('.new-products__inner');
});