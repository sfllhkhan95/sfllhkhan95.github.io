/**
 * @file Manages filtering and navigation on the projects page.
 * @author saifkhichi96
 */
'use strict';


$(function() {
  // Define filters and grid (requires Isotope js)
  console.log("Creating isotope grid...");
  var platform = '.all';
  var data = '.all';
  var $workGrid = $('.grid').isotope({
    itemSelector: '.all',
    masonry: {
      columnWidth: '.all',
      isFitWidth: true
    }
  });

  /** Callback to when a tab item is clicked. Activates selected tab
  category and filters projects accordingly. */
  function onTabClicked(tab) {
    const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
    tabBar.activateTab(parseInt(tab.attr('role')));

    platform = tab.attr('data-filter');
    $workGrid.isotope({
      filter: data + platform
    });
  }

  /** Callback to when a platform filter is selected. Filters view to
  show only projects for the selected platform. */
  function onFilterClicked(filter) {
    $('.mdc-chip').removeClass('active');
    filter.find('.mdc-chip__text').parent().parent().addClass('active');

    data = filter.attr('data-filter');
    $workGrid.isotope({
      filter: data + platform
    });
  }

  /** Updates view to show default category, depending on the screen
  size. */
  function showDefaultCategory() {
    if ($('.bottom-navigation').is(':visible')) {
      $('.bottom-navigation .mdc-tab--active').click();
    } else {
      platform = '.all';
      $workGrid.isotope({
        filter: data + platform
      });
    }
  }

  // Set up click listeners
  console.log("Registering view filters...");
  $('.bottom-navigation .mdc-tab').click(function() { onTabClicked($(this)) });
  $('.portfolio-filter li').click(function() { onFilterClicked($(this)) });

  // Update view on window resize
  $(window).resize(showDefaultCategory);

  // Show defaults on start
  console.log("Activating default view...");
  $('.mdc-chip__text.active').parent().parent().click();
  showDefaultCategory();

  console.log("Projects setup complete!");
});
