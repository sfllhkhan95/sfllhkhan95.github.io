$(document).ready(function () {
    var jobs = [
        "Android Developer",
        "Web Developer",
        "Amateur Designer",
        "Software Engineer",
        "Avid Reader",
        "Landscape Photographer",
        "Traveller",
        "Blogger"
    ];

    var j = 0;
    var dispJob = jobs[j];

    var cursor = 0;
    var label = dispJob[cursor];

    var erase = false;

    var skip = true;

    function ticker() {
        if (!erase) {
            if (skip) {
                skip = false;
                return;
            }
            skip = true;

            if (++cursor < dispJob.length) {
                label += dispJob.charAt(cursor);
            }
            else if (cursor > dispJob.length + 3) {
                erase = true;
            }
        } else {
            if (--cursor >= 0) {
                label = dispJob.substr(0, cursor);
            }
            else if (cursor < -10) {
                if (++j >= jobs.length) {
                    j = 0;
                }
                dispJob = jobs[j];

                erase = false;
                cursor = 0;
                label = dispJob[cursor];
            }
        }
        $("#what-i-am").html(label + "<span class='typed-cursor' style='display:inline-block;'>|</span>");
    }

    var b = 0;

    function blink() {
        if (cursor <= 0) {
            if (++b === 1) {
                $(".typed-cursor").css("opacity", "0");
            } else if (b === 3) {
                $(".typed-cursor").css("opacity", "1");
            } else if (b > 3) b = 0;
        }
    }

    setInterval(ticker, 75);
    setInterval(blink, 150);

});