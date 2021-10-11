$(document).ready(function(){
    $('.parallax').parallax();
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 900,
        indicators:true
    });

    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
        duration: 900,
        indicators:true,
        height:300,
        interval:9000
    });
  });
      
  $(document).ready(function(){
    $('.slider').slider();
  });
