/**
 * @file Manages the main navigation for the web app.
 * @author saifkhichi96
 */
'use strict';


$(function() {
  console.log("Setting up site navigation...");
  // Instantiate toolbar
  const topAppBarEl = document.querySelector('.mdc-top-app-bar');
  const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

  // Instantiate navigation drawer
  const drawerEl = document.querySelector('.mdc-drawer');
  const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);

  // Attach toolbar to navigation drawer
  topAppBar.setScrollTarget(document.querySelector('.main-content'));
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });

  console.log("Navigation setup complete!");
});

// Import copyright notice
$.get('/copyright.html', function(data) {
  var copyright = $('.copyright')
  if (copyright != null) {
    copyright.html(data);
  }
})

function back() {
  if (document.referrer.indexOf(location.protocol + "//" + location.host) === 0) {
    history.back();
  } else {
    window.location = '/';
  }
}
