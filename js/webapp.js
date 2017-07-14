$(document).ready(function () {
    if (window.navigator.standalone == true) {
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