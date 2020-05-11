/**
 * @file Displays services and reviews.
 * @author saifkhichi96
 */
'use strict';


function init() {
  // Set up reviews carousel (requires owl-carousel js)
  if ($('.reviews-slider').length) {
    $('.reviews-slider').owlCarousel({
      loop: true,
      margin: 30,
      items: 2,
      autoplay: true,
      smartSpeed: 2500,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        991: {
          items: 2
        }
      }
    });
  }
}

$(init);
