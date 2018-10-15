function addMenuItem(name, link) {
    $('.sidebar-nav.navbar-right').html(
        $('.sidebar-nav.navbar-right').html() +
        "<li><a href='" + link + "'>" + name + "</a></li>"
    );
}

function openDrawer() {
    $("#sidebar-wrapper, #action-bar").addClass("opened");

    $("#menu-toggle").css("display", "none");
    $("#menu-close").css("display", "block");

    console.log("Drawer opened.");
}

function closeDrawer() {
    $("#sidebar-wrapper, #action-bar").removeClass("opened");

    $("#menu-close").css("display", "none");
    $("#menu-toggle").css("display", "block");

    console.log("Drawer closed.");
}

// Scroll to correct section
function openSection(section, name) {
    closeDrawer();
    $('.navbar-brand').html(name.toUpperCase());

    // $('html, body').animate({scrollTop: $(section).offset().top}, 800, 'linear');
    document.location.hash = name;
}

$(document).ready(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        openDrawer();
    });

    $("#menu-close").click(function (e) {
        e.preventDefault();
        closeDrawer();
    });

    // Scrolls to the selected menu item on the page, and closes sidebar    
    $('.sidebar-nav a').click(function (e) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') ||
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                e.preventDefault();
                openSection(target, this.hash.slice(1));

                console.log("Opened " + this.hash.slice(1));
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

// Display dropdown-menu when hovering over dropdown
$(".dropdown").hover(function () {
    $(".dropdown-menu").show();
}, function () {
    $(".dropdown-menu").hide();
});