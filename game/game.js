function startGame() {
    var $gameCount = $('#gameCount'),
        timeleft = 3;

    var downloadTimer = setInterval(function () {
        timeleft--;
        $gameCount.text(timeleft);

        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $gameCount.text('START');

            setTimeout(function () {
                $gameCount.remove();
                game();
            }, 1000);
        }
    }, 1000);
}

function bucketMove() {
    var $gameArea = $('#gameArea'),
        $player = $('#player'),
        $gameWidth = $gameArea.width();
    // gameHeight = $gameArea.height();

    // $(window).resize(function () {
    //     $gameWidth = $gameArea.width();
    //     $gameHeight = $gameArea.height();
    // });

    $player.css({
        left: $gameWidth / 2 - 50
    });

    $gameArea.mousemove(function (event) {
        var mouseX = event.pageX;
        $player.css({
            left: mouseX - 50
        });
    });
}

function popcornGenerator(fallingTime, numberOfPopcorn) {
    var $popcorn = $();

    for (var i = 0; i < numberOfPopcorn; ++i) {
        var $popcornDiv = $('<div class="popcornDefault"></div>');

        $popcornDiv.css({
            'left': 20 + Math.floor(Math.random() * ($('#gameArea').width() - 100)) + 'px'
            // 'left': $('#gameArea').width() - 70 + 'px'
            // 'left': 0 + 'px'
        });

        $popcorn = $popcorn.add($popcornDiv);
    }

    $('#gameArea').append($popcorn);

    $popcorn.animate({
        top: $('#gameArea').height() - 60 + 'px'
    }, fallingTime, 'linear', function () {
        $(this).remove();
    });
}

function burnedPopcornGenerator() {
    var burnedPopcorn = $(),
        randomFallingTime = Math.floor(Math.random() * 2000 + 500),
        randomNumberOfPopcorn = Math.floor(Math.random() * 3);

    for (var i = 0; i < randomNumberOfPopcorn; ++i) {
        var $burnedPopcornDiv = $('<div class="popcornBurned"></div>');

        $burnedPopcornDiv.css({
            'left': 20 + Math.floor(Math.random() * ($('#gameArea').width() - 50)) + 'px'
            // 'left': $('#gameArea').width() - 50 + 'px'
            // 'left': 200 + 'px'
        });

        burnedPopcorn = burnedPopcorn.add($burnedPopcornDiv);
    }

    $('#gameArea').append(burnedPopcorn);

    burnedPopcorn.animate({
        top: $('#gameArea').height() - 40 + 'px'
    }, randomFallingTime, 'linear', function () {
        $(this).remove();
    });
}

function fallingPopcorn() {
    var popcornInterval = null;

    function level(fallingTime, numberOfPopcorn, frequency) {
        popcornGenerator(fallingTime, numberOfPopcorn);
        popcornInterval = setInterval(function () {
            popcornGenerator(fallingTime, numberOfPopcorn);
        }, frequency);
    }

    function burned() {
        var randomFrequency = Math.floor(Math.random() * 1000 + 500);

        burnedPopcornGenerator();
        setInterval(function () {
            burnedPopcornGenerator();
        }, randomFrequency);
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
        burned();
    }, 1000)
}

function removeTooth() {
    var $tooth = $('.tooth');

    $tooth.each(function () {
        $tooth.last().remove();
    });
}

function colisionDetector() {
    var $playerPositionLeftCorner = $('#player').position().left + 5,
        $playerPositionRightCorner = $('#player').position().left + 95,
        $playerPositionTop = $('#player').position().top;

    $('.popcornDefault').each(function () {
        var $popcorn = $(this),
            $popcornPositionCenter = $popcorn.position().left + 25,
            $popcornPositionBottom = $popcorn.position().top + 15;

        // console.log('left: ' + $playerPositionLeftCorner + ' center: ' + $popcornPositionCenter + ' right: ' + $playerPositionRightCorner);

        if ($playerPositionLeftCorner <= $popcornPositionCenter && $popcornPositionCenter <= $playerPositionRightCorner && $popcornPositionBottom > $playerPositionTop) {
            // tutaj kodujemy to co dzieje się po złapaniu popcornu
            console.log('złapany');
            $popcorn.remove();
        } else {

        }
    });

    $('.popcornBurned').each(function () {
        var $popcornBurned = $(this),
            $burnedPopcornPositionCenter = $popcornBurned.position().left + 15,
            $burnedPopcornPositionBottom = $popcornBurned.position().top;

        // console.log('left: ' + $playerPositionLeftCorner + ' center: ' + $burnedPopcornPositionCenter + ' right: ' + $playerPositionRightCorner);

        if ($playerPositionLeftCorner <= $burnedPopcornPositionCenter && $burnedPopcornPositionCenter <= $playerPositionRightCorner && $burnedPopcornPositionBottom > $playerPositionTop) {
            // tutaj kodujemy co dzieje się po złapaniu spalonego popcornu
            console.log('spalony');
            $popcornBurned.remove();
            removeTooth();
        }
    });
}

function game() {
    fallingPopcorn();
    bucketMove();
    setInterval(colisionDetector, 10);
}

startGame();
