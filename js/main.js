var members = document.querySelector('.members');

members.addEventListener('mouseenter', function () {
    querySelector('.members-picture').style.transform = 'translateY(-10%) scale(0.7)';
    querySelector('.members-picture').style.transition = '0.4s';
});

members.addEventListener('mouseover', function () {
    querySelector('.social-media').style.visibility = 'visible';
    querySelector('.social-media').style.transition-delay = '0.3s';
});
