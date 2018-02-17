
function GameModal() {
    var GameStartButton = document.getElementById("gameStart");


    var modal = document.getElementById('myModal');

    var span = document.getElementsByClassName("close")[0];
    console.log(span)


    GameStartButton.onclick = function() {
        modal.style.display = "block";
    };


    span.onclick = function() {
        modal.style.display = "none";
    };


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        document.location.href = "#modalContent";
    }
};