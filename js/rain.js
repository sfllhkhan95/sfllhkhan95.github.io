// number of drops created.
var nbDrop = 50;

// function to generate a random number range.
function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {
    for (var i = 1; i < nbDrop; i++) {
        var dropLeft = randRange(0, $(window).width());
        var dropTop = randRange(-1.5 * $(window).height(), 0);

        var dropId = "drop" + i;
        var dropSize = randRange(5, 10);
        var dropSpeed = randRange(5, 10);

        var style = "";
        style += "width: " + dropSize + "px;";
        style += "height: " + dropSize + "px;";
        style += "-webkit-animation: fall " + dropSpeed + "s linear infinite;";
        style += "-moz-animation: fall " + dropSpeed + "s linear infinite;";

        $('.rain').append('<div class="drop" style="' + style + '" id="' + dropId + '"></div>');
        $('#drop' + i).css('left', dropLeft);
        $('#drop' + i).css('top', dropTop);
    }
}

$(window).resize(function () {
    for (var i = 1; i < nbDrop; i++) {
        var dropLeft = randRange(0, 2 * $(window).width());
        var dropTop = randRange(-1.5 * $(window).height(), $(window).height() / 2);

        $('#drop' + i).css('left', dropLeft);
        $('#drop' + i).css('top', dropTop);
    }
});

// Make it rain
createRain();