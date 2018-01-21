var members = document.querySelectorAll('.members');

members.forEach(function (value) {
    value.addEventListener('mouseenter', function (e) {
        let member = e.target;
        member.querySelector('.members-picture').style.transform = 'translateY(-10%) scale(0.7)';
        member.querySelector('.members-picture').style.transition = '0.4s';
        member.querySelector('.social-media').style.visibility = 'visible';
        member.querySelector('.social-media').style.transitionDelay = '0.3s';
    });
    value.addEventListener('mouseleave', function (e) {
        let member = e.target;
        member.querySelector('.members-picture').style.transform = 'translateY(0) scale(1)';
        member.querySelector('.social-media').style.visibility = 'hidden';
        member.querySelector('.social-media').style.transitionDelay = '0s';
    });
});

$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});
});

$(document).scroll(function() {

    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 10 ) {
        $('.navbar-default').addClass("navbar-scroll");
    }
    else{
        $('.navbar-default').removeClass("navbar-scroll");
    }
});