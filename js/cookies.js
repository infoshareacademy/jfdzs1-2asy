var cookiePopup = document.getElementById('cookie-alert');

document.onload = function () {
    document.getElementById("cookie-alert").style.cssText = "visibility: visible";
};

function hideCookieInfo() {
    cookiePopup.setAttribute("style", "display: none");
    document.cookie = "cookie=agreed";
}

function removeCookiePopup(){
    if(document.cookie === "cookie=agreed"){
        cookiePopup.remove();
    }
}
removeCookiePopup();
