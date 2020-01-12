(function($) {
  'use strict';

  /*----------------------------------------------------*/
  /*  Isotope js                                        */
  /*----------------------------------------------------*/
  $(window).on('load', function() {
    $('.portfolio-filter li').on('click', function() {
      var data = $(this).attr('data-filter');
      $workGrid.isotope({
        filter: data
      });
    });

    if (document.getElementById('portfolio')) {
      var $workGrid = $('.portfolio-grid').isotope({
        itemSelector: '.all',
        percentPosition: true,
        masonry: {
          columnWidth: '.all'
        }
      });
    }
  });

  /*----------------------------------------------------*/
  /*  Magnific Pop Up                                   */
  /*----------------------------------------------------*/
  if ($('.img-gal').length > 0) {
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  /*----------------------------------------------------*/
  /*  Testimonials Slider                               */
  /*----------------------------------------------------*/
  function testimonials_slider() {
    if ($('.testi_slider').length) {
      $('.testi_slider').owlCarousel({
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
  testimonials_slider();

  /*----------------------------------------------------*/
  /*  Material Components                               */
  /*----------------------------------------------------*/
  // Instantiate MDC Drawer
  const drawerEl = document.querySelector('.mdc-drawer');
  const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);

  // Instantiate MDC Top App Bar (required)
  const topAppBarEl = document.querySelector('.mdc-top-app-bar');
  const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

  topAppBar.setScrollTarget(document.querySelector('.main-content'));
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
})(jQuery);
