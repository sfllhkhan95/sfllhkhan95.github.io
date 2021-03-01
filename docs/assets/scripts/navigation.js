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
var hardcodedCrumbs = $('.breadcrumbs').html()
$('.breadcrumbs').html("<li class='breadcrumb-item'><a class='muted' href='/'>Home</a></li>")
var pages = location.href.split("://")[1].split('#')[0].split('?')[0].split("/").filter(function(el) {
  return el != "" && el != "index.html";
});
var url = ''
for (var i = 1, len = pages.length; i < len; i++) {
  var page = pages[i].split('.')[0].replace('-', ' ').replace('_', ' ')
  url += '/' + pages[i]
  var oldHtml = $('.breadcrumbs').html()
  if (i == pages.length - 1) {
    var newHtml = oldHtml
  } else {
    var newHtml = oldHtml + "<li class='breadcrumb-item'><a class='muted' href='" + url + "'>" + page + "</a></li>"
  }
  $('.breadcrumbs').html(newHtml);
}
var oldHtml = $('.breadcrumbs').html()
$('.breadcrumbs').html(oldHtml + hardcodedCrumbs);

$('#last-modified').html(document.lastModified);

function back() {
  if (document.referrer.indexOf(location.protocol + "//" + location.host) === 0) {
    history.back();
  } else {
    window.location = '/';
  }
}
