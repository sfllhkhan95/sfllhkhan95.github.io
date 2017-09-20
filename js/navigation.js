// Closes the sidebar menu
$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").removeClass("opened");
    $("#action-bar").removeClass("opened");
});
// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("opened");
    $("#action-bar").toggleClass("opened");
});
// Scrolls to the selected menu item on the page, and closes sidebar
$(function () {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // Scroll to correct section
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                // Close sidebar
                $("#sidebar-wrapper").removeClass("opened");
                $("#action-bar").removeClass("opened");

                // Update title
                if ($(this).html() != "Discover")
                    $("#action-bar-title").html($(this).html());
                return false;
            }
        }
    });
});
// Sidebar closes when window is resized
$(window).resize(function () {
    $("#sidebar-wrapper").removeClass("opened");
    $("#action-bar").removeClass("opened");
});
$(document).scroll(function () {
    // Update page title based on which section we are in
    if ($(this).scrollTop() < $("#about").offset().top) {
        $("#action-bar-title").html("Home");
        $(".sidebar-nav li").removeClass("active");
        $("[href=#top]").parent().addClass("active");
    } else if ($(this).scrollTop() < $("#services").offset().top) {
        $("#action-bar-title").html("About");
        $(".sidebar-nav li").removeClass("active");
        $("[href=#about]").parent().addClass("active");
    } else if ($(this).scrollTop() < $("#portfolio").offset().top) {
        $("#action-bar-title").html("Services");
        $(".sidebar-nav li").removeClass("active");
        $("[href=#services]").parent().addClass("active");
    } else if ($(this).scrollTop() < $("#contact").offset().top) {
        $("#action-bar-title").html("Projects");
        $(".sidebar-nav li").removeClass("active");
        $("[href=#portfolio]").parent().addClass("active");
    } else {
        $("#action-bar-title").html("Contact");
        $(".sidebar-nav li").removeClass("active");
        $("[href=#contact]").parent().addClass("active");
    }
});
// Display dropdown-menu when hovering over dropdown
$(".dropdown").hover(function () {
    $(".dropdown-menu").show();
}, function () {
    $(".dropdown-menu").hide();
});

$(".header .all-wrap").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});