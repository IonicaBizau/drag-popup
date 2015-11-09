(function () {
    var win;
    var $element = $("#click");
    var drag = false;

    var windowSize = {};
    var delta = {};

    // mousedown
    $element.on("mousedown", function (e) {
        windowSize = {
            w: $(window).width,
            h: $(window).height
        };
        delta = {
            x: e.pageX,
            y: e.pageY
        };

        drag = true;
    });

    // mousedown
    $element.on("mouseup mouseout", function (e) {
        windowSize = undefined;
        drag = false;
    });

    /*
                 .TOP
                 .
    left ---->   +-----------+
                 |           |
                 |           |
                 +-----------+
    */

    // mousedown
    $element.on("mousemove", function (e) {
        if (drag) {
            var toX = e.pageX - delta.x;
            var toY = e.pageY - delta.y;
            window.moveTo(window.screenLeft + toX, window.screenTop + toY);
        }
    });
})();
