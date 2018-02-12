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

function popcornGenerator(fallingTime, numberOfPopcorn) {
    var $popcorn = $();
    
    for (var i = 0; i < numberOfPopcorn; ++i) {
        var $popcornDiv = $('<div class="popcornDefault"></div>');

        $popcornDiv.css({
            'left': (Math.random() * $('#game').width()) + 'px'
        });

        $popcorn = $popcorn.add($popcornDiv);
    }

    $('#popcornZone').append($popcorn);

    $popcorn.animate({
        top: $('#game').height() + 'px'
    }, fallingTime, 'linear', function(){
        $(this).remove();
    });
}

function burnedPopcornGenerator() {
    var burnedPopcorn = $(),
        randomFallingTime = Math.floor(Math.random() * 2000),
        randomNumberOfPopcorn = Math.floor(Math.random() * 7);

    for (var i = 0; i < randomNumberOfPopcorn; ++i) {
        var $burnedPopcornDiv = $('<div class="popcornBurned"></div>');

        $burnedPopcornDiv.css({
            'left': (Math.random() * $('#game').width()) + 'px'
        });

        burnedPopcorn = burnedPopcorn.add($burnedPopcornDiv);
    }

    $('#popcornZone').append(burnedPopcorn);

    burnedPopcorn.animate({
        top: $('#game').height() + 'px'
    }, randomFallingTime, 'linear', function(){
        $(this).remove();
    });
}

function fallingPopcorn() {
    var popcornInterval = null;

    function level(fallingTime, numberOfPopcorn, frequency) {
        popcornGenerator(fallingTime, numberOfPopcorn);
        popcornInterval = setInterval(function () {popcornGenerator(fallingTime, numberOfPopcorn);}, frequency);
    }

    function burned() {
        var randomFrequency = Math.floor(Math.random() * 2000);

        burnedPopcornGenerator();
        setInterval(function () {burnedPopcornGenerator();}, randomFrequency);
    }

    function stop() {
        clearInterval(popcornInterval);
    }

    //=======================
    //FIRST LEVEL

    setTimeout(function () {
        level(2000, 1, 2000);
    }, 0);

    //=======================
    //SECOND LEVEL

    setTimeout(function () {
        stop(popcornInterval);
        level(1500, 1, 1000);
    }, 10000);

    //=======================
    //THIRD LEVEL

    setTimeout(function () {
        stop(popcornInterval);
        level(1000, 1, 500);
    }, 20000);

    //=======================
    //BURNED POPCORN

    setTimeout(function () {
        burned(1000, 2);
    }, 1000)
}

function colisionDetector() {
    var playerPositionLeftCorner = $('#player').position().left + 10,
        playerPositionRightCorner = $('#player').position().left + 90,
        playerPositionTop = $('#player').position().top;

    $('.popcornDefault').each(function () {
        var $popcorn = $(this),
            popcornPositionCenter = $popcorn.position().left + 5,
            popcornPositionBottom = $popcorn.position().top - 10;

        if (playerPositionLeftCorner <= popcornPositionCenter && popcornPositionCenter <= playerPositionRightCorner && popcornPositionBottom > playerPositionTop) {

            // tutaj kodujemy to co dzieje się po złapaniu popcornu
            console.log('złapany')
        }
    });

    $('.popcornBurned').each(function () {
        var $popcornBurned = $(this),
            burnedPopcornPositionCenter = $popcornBurned.position().left + 5,
            burnedPopcornPositionBottom = $popcornBurned.position().top - 10;

        if (playerPositionLeftCorner <= burnedPopcornPositionCenter && burnedPopcornPositionCenter <= playerPositionRightCorner && burnedPopcornPositionBottom > playerPositionTop) {

            // tutaj kodujemy co dzieje się po złapaniu spalonego popcornu
            console.log('spalony')
        }
    });
}

function game() {
    fallingPopcorn();
    setInterval(colisionDetector, 50);
}

game();
