// Toggles the sidebar menu
$("#menu-toggle, #menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("opened");
    $("#action-bar").toggleClass("opened");
});

// Sidebar closes when window is resized
$(window).resize(function () {
    $("#sidebar-wrapper").removeClass("opened");
    $("#action-bar").removeClass("opened");
});

// Display dropdown-menu when hovering over dropdown
$(".dropdown").hover(function () {
    $(".dropdown-menu").show();
}, function () {
    $(".dropdown-menu").hide();
});