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

var signInButton = document.getElementById("signInBtn");

function openGameSection() {
    var signInSection = document.getElementById("signin"),
        newElement = document.createElement("div"),
        template;

    newElement.classList.add("game-section");
    newElement.setAttribute("id", "#gameDiv");


    template = ''
        + '<div id="game">'
        +   '<h1>' + "WITAJ W GRZE ŁAPACZ POPCORNU" + '</h1>'
        +   '<h2>' + "Instrukcja gry:" + '</h2>'
        +   '<p>' + "Dostęp do gry użytkownik otrzymuje po zapisaniu się na newstletter serwisu GitFilm" + '</p>'
        +   '<p>' + "Gra polega na łapaniu do kubełka spadającego popcornu" + '</p>'
        +   '<p>' + "Każdy złapany fallingPopcorn to 1 punkt." + '</p>'
        +   '<p>' + "Rozgrywka trwa 120 seksund" + '</p>'
        +   '<p>' + "Oprócz popcornu spadają spalone ziarna kukurydzy" + '</p>'
        +   '<p>' + "Złapanie spalonego ziarna skutkuje utratą zęba" + '</p>'
        +   '<p>' + "Masz tylko trzy zęby" + '</p>'
        +   '<p>' + "Utrata wszystkich zębów kończy rozgrywkę" + '</p>'
        +   '<p>' + "Po  60 sekundach rozgrywki przechodzisz na lvl2" + '</p>'
        +   '<p>' + "Ziarna przyspieszają pojawia się więcej spalonych ziaren" + '</p>'
        +   '<p>' + "Użytkownik może w każdym momencie opuścić grę lub ją zrestartować" + '</p>'
        +   '<p>' + "Gra konczy się przekazaniem graczowi uzyskanego wyniku oraz tabeli 10 najlepszych." + '</p>'
        +   '<button class="main-button" id="gameStart">' + "graj" + '</button>'
        +  '</div>';
    newElement.innerHTML = template;
    signInSection.appendChild(newElement);
    document.location.href = "#game";
}

signInButton.addEventListener('click', function() {
    openGameSection()
});


//--------------Scroll Button-------------------//
window.onload = function() {
    var toTop = document.getElementById("toTop");

    window.onscroll = function() {
        var scrollY = window.pageYOffset;

        if(scrollY > 200) toTop.style.display = "block";
        else toTop.style.display = "none";
    };

    toTop.onclick = function() {
        window.scrollBy(0, -1 * window.pageYOffset);
    }
};
//------------------------------------------------------//
