(function($) {
  'use strict';

  $(function() {
    /*----------------------------------------------------*/
    /*  Init Firebase                                     */
    /*----------------------------------------------------*/
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD-KEP7A1eVAzYaNDahzOUqeCLJaMK4lfk",
      authDomain: "meet-saifkhichi96.firebaseapp.com",
      databaseURL: "https://meet-saifkhichi96.firebaseio.com",
      projectId: "meet-saifkhichi96",
      storageBucket: "meet-saifkhichi96.appspot.com",
      messagingSenderId: "727257041805",
      appId: "1:727257041805:web:7049b6b5f6abba5ed4cbc4",
      measurementId: "G-Z2P8EMEFG7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  });
  /*----------------------------------------------------*/
  /*  Isotope js                                        */
  /*----------------------------------------------------*/
  $(window).on('load', function() {
    // Global filters
    var platform = '.all';
    var data = '.all';

    // Navigation bar filterting
    const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
    $('.bottom-navigation .mdc-tab').on('click', function() {
        var p = $(this);
        var index = parseInt(p.attr('role'));
        tabBar.activateTab(index);

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
        masonry: {
          columnWidth: '.all',
          isFitWidth: true
        }
      });
    }

    var defaultData = $('.mdc-chip__text.active').parent().parent();
    defaultData.click();

    var defaultPlatform = $('.bottom-navigation .mdc-tab--active');
    if ($('.bottom-navigation').is(':visible')) {
        defaultPlatform.click();
    }

    $( window ).resize(function() {
      var defaultPlatform = $('.bottom-navigation .mdc-tab--active');
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
