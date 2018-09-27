$(document).ready(function () {
    if (window.navigator.standalone === true) {
        $('a').click(function () {
            window.location = $(this).attr('href');
            return false;
        });
        $('[data-toggle=modal]').click(
            function () {
                $($(this).attr("data-target")).modal("show");
            }
        );
    }
});

// Does this browser support Service Workers?
if ('serviceWorker' in navigator) {
    // Yes! Register our Service Worker to enable offline capabilities.
    navigator.serviceWorker
        .register('/webapp/sw.js')
        .then(function () { console.log("Service Worker Registered"); });
}