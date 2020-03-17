(function($) {
  'use strict';

  /*----------------------------------------------------*/
  /*  Isotope js                                        */
  /*----------------------------------------------------*/
  $(window).on('load', function() {
    // Global filters
    var platform = '.all';
    var data = '.all';

    // Navigation bar filterting
    $('.bottom-navigation .nav-item span').on('click', function() {
        $('.bottom-navigation .nav-item.active').removeClass('active');

        var p = $(this).parent();
        p.addClass('active');

        platform = p.attr('data-filter');
        $workGrid.isotope({
          filter: data + platform
        });
    });

    // Filter chips filtering
    $('.portfolio-filter li').on('click', function() {
      $('.mdc-chip__text').removeClass('active');
      $(this).find('.mdc-chip__text').addClass('active');
      data = $(this).attr('data-filter');
      $workGrid.isotope({
        filter: data + platform
      });
    });

    if (document.getElementById('portfolio')) {
      var $workGrid = $('.grid').isotope({
        itemSelector: '.all',
        percentPosition: true,
        masonry: {
          columnWidth: '.all'
        }
      });
    }

    var defaultData = $('.mdc-chip__text.active').parent().parent();
    defaultData.click();

    var defaultPlatform = $('.bottom-navigation .nav-item.active span');
    if ($('.bottom-navigation').is(':visible')) {
        defaultPlatform.click();
    }

    $( window ).resize(function() {
      var defaultPlatform = $('.bottom-navigation .nav-item.active span');
      if ($('.bottom-navigation').is(':visible')) {
          defaultPlatform.click();
      } else {
          platform = '.all';
          $workGrid.isotope({
            filter: data + platform
          });
      }
    });
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
