(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });
  
})(jQuery); // End of use strict


    

var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

      var items = [
          {
              src: 'https://placekitten.com/600/400',
              w: 600,
              h: 400,
            
             msrc:'path/to/small-image.jpg' // small image placeholder
          },
          {
              src: 'https://placekitten.com/1200/900',
              w: 1200,
              h: 900
          }
      ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        index:0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};



