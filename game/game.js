function startGameCountdown() {
    var $gameCount = $('#gameCount'),
        timeleft = 3;

    var downloadTimer = setInterval(function(){
        timeleft--;
        $gameCount.text(timeleft);

        if(timeleft <= 0) {
            clearInterval(downloadTimer);
            $gameCount.text('START!!!');

            setTimeout(function () {
                $gameCount.remove();
                game();
            }, 1000);
        }
    },1000);
}

function bucketMove() {
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
}

function popcornGenerator(fallingTime, numberOfPopcorn) {
    var $popcorn = $();
    
    for (var i = 0; i < numberOfPopcorn; ++i) {
        var $popcornDiv = $('<div class="popcornDefault"></div>');

        $popcornDiv.css({
            'left': Math.floor(Math.random() * $('#gameArea').width()) + 'px'
        });

        $popcorn = $popcorn.add($popcornDiv);
    }

    $('#gameArea').append($popcorn);

    $popcorn.animate({
        top: $('#gameArea').height() + 'px'
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
            'left': Math.floor(Math.random() * $('#gameArea').width()) + 'px'
        });

        burnedPopcorn = burnedPopcorn.add($burnedPopcornDiv);
    }

    $('#gameArea').append(burnedPopcorn);

    burnedPopcorn.animate({
        top: $('#gameArea').height() + 'px'
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
            popcornPositionCenter = $popcorn.position().left + 25,
            popcornPositionBottom = $popcorn.position().top - 50;

        if (playerPositionLeftCorner <= popcornPositionCenter && popcornPositionCenter <= playerPositionRightCorner && popcornPositionBottom > playerPositionTop) {

            // tutaj kodujemy to co dzieje się po złapaniu popcornu
            console.log('złapany')
        }
    });

    $('.popcornBurned').each(function () {
        var $popcornBurned = $(this),
            burnedPopcornPositionCenter = $popcornBurned.position().left + 15,
            burnedPopcornPositionBottom = $popcornBurned.position().top - 30;

        if (playerPositionLeftCorner <= burnedPopcornPositionCenter && burnedPopcornPositionCenter <= playerPositionRightCorner && burnedPopcornPositionBottom > playerPositionTop) {

            // tutaj kodujemy co dzieje się po złapaniu spalonego popcornu
            console.log('spalony')
        }
    });
}

function game() {
    bucketMove();
    fallingPopcorn();
    setInterval(colisionDetector, 50);
}

startGameCountdown();
