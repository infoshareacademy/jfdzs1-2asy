function popcorn(speed, number) {
    var $popcorn = $();
    
    for (var i = 0; i < number; ++i) {
        var $popcornDiv = $('<div class="popcornDefault"></div>');

        $popcornDiv.css({
            'left': (Math.random() * $('#site').width()) + 'px',
        });

        $popcorn = $popcorn.add($popcornDiv);
    }

    $('#popcornZone').append($popcorn);

    $popcorn.animate({
        top: $('#site').height() + 'px'
    }, speed, 'linear', function(){
        $(this).remove();
    });
}

function popcornGenerator() {
    var level = null;

    function levelFirst() {
        popcorn(1000, 1);
        level = setInterval(function () {popcorn(1000, 1);}, 1000);
    }

    function levelSecond() {
        popcorn(500, 1);
        level = setInterval(function () {popcorn(500, 1);}, 500);
    }

    function levelThird() {
        popcorn(200, 1);
        level = setInterval(function () {popcorn(200, 1);}, 200);
    }

    function stop() {
        console.log('stop');
        clearInterval(level);
    }

    setTimeout(function () {
        levelFirst();
    }, 0);

    setTimeout(function () {
        stop();
        levelSecond();
    }, 10000);

    setTimeout(function () {
        stop();
        levelThird();
    }, 20000);
}

popcornGenerator();

//
// fallingPopcorn();
