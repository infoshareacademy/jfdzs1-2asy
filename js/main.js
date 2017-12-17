var members = document.querySelectorAll('.members');

members.forEach(function (value) {
    value.addEventListener('mouseenter', function (e) {
        let member = e.target;
        member.querySelector('.members-picture').style.transform = 'translateY(-10%) scale(0.7)';
        // console.log(member.querySelector('.members-picture'));
    });

});


console.log(members);


// members.addEventListener('mouseover', function () {
//     querySelector('.social-media').style.visibility = 'visible';
//     querySelector('.social-media').style.transition-delay = '0.3s';
// });


