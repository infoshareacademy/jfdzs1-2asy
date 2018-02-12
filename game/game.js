var $gameArea = $('#gameArea'),
    $player = $('#player'),
    gameWidth = $gameArea.width();
    // gameHeight = $gameArea.height();

// $(window).resize(function () {
//     gameWidth = $gameArea.width();
//     gameHeight = $gameArea.height();
// });

$player.css({
    left: gameWidth / 2 - 50
});

$gameArea.mousemove(function (event) {
    var mouseX = event.pageX;
    $player.css({
        left: mouseX - 50
    });
});

function popcornGenerator(speed, number) {
    var $popcorn = $();
    
    for (var i = 0; i < number; ++i) {
        var $popcornDiv = $('<div class="popcornDefault"></div>');

        $popcornDiv.css({
            'left': (Math.random() * $('#game').width()) + 'px'
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

function fallingPopcorn() {
    var level = null;

    function levelFirst() {
        popcornGenerator(2000, 1);
        level = setInterval(function () {popcornGenerator(2000, 1);}, 2000);
    }

    function levelSecond() {
        popcornGenerator(1500, 1);
        level = setInterval(function () {popcornGenerator(1500, 1);}, 1500);
    }

    function levelThird() {
        popcornGenerator(1000, 1);
        level = setInterval(function () {popcornGenerator(1000, 1);}, 1000);
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

function colisionDetector() {
    var playerPositionLeftCorner = $('#player').position().left + 10,
        playerPositionRightCorner = $('#player').position().left + 90,
        playerPositionTop = $('#player').position().top;

    $('.popcornDefault').each(function (index) {
        var $popcorn = $(this),
            popcornPositionCenter = $popcorn.position().left + 5,
            popcornPositionBottom = $popcorn.position().top - 10;

        if (playerPositionLeftCorner <= popcornPositionCenter && popcornPositionCenter <= playerPositionRightCorner && popcornPositionBottom > playerPositionTop) {
            console.log('dupa')
        } else {
            console.log('nieeeeeeeeeeeee')
        }
    })
}

function game() {
    fallingPopcorn();
    setInterval(colisionDetector, 50);
}

game();
