$(document).ready(function(){
  /* слайдер на главной */
  $('.slider-header').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

/* слайдер с новостями и событиями */
      $('.slider-news').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
    

    /* слайдер с отзывами */
      $('.feedback-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
    });
});




  // Dropdown navbar menu on hover


$('.navbar-main .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});