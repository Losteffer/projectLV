$(document).ready(function() {
    var slideWidth = $('.slider-item').width();
    var slideCount = $('.slider-item').length;
    var slideIndex = 0; 
  
    $('#slider-con').css('width', slideWidth * slideCount);
  
    function slideNext() {
      slideIndex++;
      if (slideIndex >= slideCount) {
        slideIndex = 0;
      }
      var slideOffset = -slideWidth * slideIndex;
      $('#slider-con').animate({ left: slideOffset }, 500);
    }
  
    function slidePrev() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slideCount - 1;
      }
      var slideOffset = -slideWidth * slideIndex;
      $('#slider-con').animate({ left: slideOffset }, 500);
    }
  
    $('#next-btn').click(slideNext);
    $('#prev-btn').click(slidePrev);
  
    setInterval(slideNext, 8000);
  });
  