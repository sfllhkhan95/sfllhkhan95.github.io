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
function openSection(section) {
    closeDrawer();

    $('html, body').css("scrollTop", section.offset().top);
}

$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        openDrawer();
    });

    $("#menu-close").click(function (e) {
        e.preventDefault();
        closeDrawer();
    });

    // Scrolls to the selected menu item on the page, and closes sidebar    
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') ||
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                document.location.hash = this.hash.slice(1);
                openSection(target);

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