$(function () {
  $(".stars").rateYo({
    rating: 4.5,
    spacing: "5px",
    readOnly: true,
    starWidth: "15px",
  });

  $('.product-item__wrapper').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.features-prev'),
    nextArrow: $('.features-next'),
  });

  $('.followers__wrapper').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.followers-prev'),
    nextArrow: $('.followers-next'),
  });

  $('.feedback-btn__viev').on('click', function () {
    $('.hidden-item').addClass('show-item');
    $('.hidden-item').removeClass('hide');
    $('.feedback-btn__viev').addClass('hide');
    $('.feedback-btn__viev').removeClass('show-btn');
    $('.feedback-btn__hide').addClass('show-btn');
    $('.feedback-btn__hide').removeClass('hide');
  });

  $('.feedback-btn__hide').on('click', function () {
    $('.hidden-item').addClass('hide');
    $('.hidden-item').removeClass('show-item');
    $('.feedback-btn__hide').addClass('hide');
    $('.feedback-btn__hide').removeClass('show-btn');
    $('.feedback-btn__viev').addClass('show-btn');
    $('.feedback-btn__viev').removeClass('hide');
  });

  var mixer = mixitup('.new-products__inner');
});