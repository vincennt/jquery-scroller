$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            $("scroller-container").stop().animate({
                left: '-=10'
            }); //left arrow key
            break;
        case 38:
            $("scroller-container").stop().animate({
                top: '-=10'
            }); //up arrow key
            break;
        case 39:
            $("scroller-container").stop().animate({
                left: '+=10'
            }); //right arrow key
            break;
        case 40:
            $("scroller-container").stop().animate({
                top: '+=10'
            }); //bottom arrow key
            break;
    }
})