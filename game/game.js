var $game = $('#gamePosition'),
    $player = $('#player'),
    gameWidth = $game.width(),
    gameHeight = $game.height();

$(window).resize(function () {
    gameWidth = $game.width();
    gameHeight = $game.height();
});

$player.css({
    top: gameHeight - 120,
    left: gameWidth / 2 - 50,
});

$game.mousemove(function (event) {
    var mouseX = event.pageX;
    $player.css({
        left: mouseX - 50,
    });
});

function popcorn(speed, number) {
    var $popcorn = $();
    
    for (var i = 0; i < number; ++i) {
        var $popcornDiv = $('<div class="popcornDefault"></div>');

        $popcornDiv.css({
            'left': (Math.random() * $('#game').width()) + 'px',
        });

        $popcorn = $popcorn.add($popcornDiv);
    }

    $('#popcornZone').append($popcorn);

    $popcorn.animate({
        top: $('#game').height() + 'px'
    }, speed, 'linear', function(){
        $(this).remove();
    });
}

function popcornGenerator() {
    var level = null;

    function levelFirst() {
        popcorn(2000, 1);
        level = setInterval(function () {popcorn(2000, 1);}, 2000);
    }

    function levelSecond() {
        popcorn(1500, 1);
        level = setInterval(function () {popcorn(1500, 1);}, 1500);
    }

    function levelThird() {
        popcorn(1000, 1);
        level = setInterval(function () {popcorn(1000, 1);}, 1000);
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

setInterval(colisionDetector, 100);

function colisionDetector() {
    var playerPosition = $('#player').position();

    console.log(playerPosition);

    $('.popcornDefault').each(function (index) {
        var $popcorn = $(this);
        var position = $popcorn.position();


        // console.log(index, position);

    //     if (playerPosition)
    //
    })


}
//
// fallingPopcorn();
