$(document).ready(function(){
  $('.slider-header').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
});


$(document).ready(function(){
    $('.slider-news').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
  });