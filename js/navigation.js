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

// Spread breadcrumbs
$('.breadcrumbs').html("<li class='breadcrumb-item'><a href='/'><span class='material-icons'>home</span></a></li>")
var pages = location.href.split("://")[1].split('#')[0].split('?')[0].split("/").filter(function(el) {
  return el != "" && el != "index.html";
});
var url = ''
for (var i = 1, len = pages.length; i < len; i++) {
  var page = pages[i].split('.')[0].replace('-', ' ').replace('_', ' ')
  url += '/' + pages[i]
  var oldHtml = $('.breadcrumbs').html()
  if (i == pages.length - 1) {
    var newHtml = oldHtml + "<li class='breadcrumb-item active'><span>" + page + "</span></li>"
  } else {
    var newHtml = oldHtml + "<li class='breadcrumb-item'><a href='" + url + "'>" + page + "</a></li>"
  }
  $('.breadcrumbs').html(newHtml);
}

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
