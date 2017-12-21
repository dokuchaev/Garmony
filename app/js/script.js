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
      responsive: [

        {
          breakpoint: 1200,
          settings: {
            slidesToShow:2,
            slidesToScroll: 1,
         
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow:2,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         
          }
        },
      ]
    });
    

    /* слайдер с отзывами */
      $('.feedback-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
    });

    /* слайдер с другими отзывами */
    $('.lecture-slider').slick({
  
      slidesToScroll: 1,
      rows: 2,
      slidesPerRow: 8,
      arrows: true,
      dots: false,
      responsive: [
        
                {
                  breakpoint: 1200,
                  settings: {
                    slidesPerRow:4,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesPerRow:3,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesPerRow:1,
                  }
                },
              ]
    })
});


;






  // Dropdown navbar menu on hover


$('.navbar-main .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});



//accordion menu
jQuery(document).ready(function(){
	var accordionsMenu = $('.cd-accordion-menu');

	if( accordionsMenu.length > 0 ) {
		
		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
			});
		});
	}
});



$('#datepicker').datepicker({
 
    leftArrow: '<i class="fa fa-long-arrow-left"></i>',
    rightArrow: '<i class="fa fa-long-arrow-right"></i>'

});
$('#datepicker').on('changeDate', function() {
    $('#my_hidden_input').val(
        $('#datepicker').datepicker('getFormattedDate')
    );
});



/* hidden search */

$('.search-btn').click(function(event){
  event.preventDefault();
 $('.hidden-search').slideToggle('500')
})