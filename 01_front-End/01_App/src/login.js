var url = "https://www.intern.mosbach.dhbw.de/";

function checkUser(){
    var usernameInput = document.getElementById('username').value;
    var passwortInput = document.getElementById('passwort').value;

    // require(shell).openExternal("https://www.intern.mosbach.dhbw.de/");

    changeLink(url);

    var username = document.getElementById('shortUsername');
    var passwort = document.getElementById('password');

    username.innerHTML = usernameInput;
    passwort.innerHTML = passwortInput;
    
}

function changeLink(url){
    window.location.href = url;
}