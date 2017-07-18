$(function () {
    $(document).mousemove(function (e) {
        $('#cube').css({
            'webkit-transform': 'rotateX(' + e.pageY + 'deg) rotateY(' + e.pageX + 'deg)'
        });
    });
});