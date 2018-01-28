function fallingPopcorn() {

    var $popcorn = $(),
        popcorn = 2;

    for (var i = 0; i < popcorn; ++i) {
        var $popcornDiv = $('<div class="popcorn"></div>');
        $popcornDiv .css({
            'left': (Math.random() * $('#site').width()) + 'px',
            'top': '50px'
        });
        $popcorn = $popcorn.add($popcornDiv);
    }
    $('#popcornZone').prepend($popcorn);

    $popcorn.animate({
        top: $('#site').width() + "px",
    }, Math.random() + 5000, function(){
        $(this).remove();
        if (--popcorn < 1) {
            fallingPopcorn();
        }
    });
}
fallingPopcorn();
