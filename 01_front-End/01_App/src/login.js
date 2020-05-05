var url = "https://www.intern.mosbach.dhbw.de/";

function checkUser(url){
    var usernameInput = document.getElementById('username').value;
    var passwortInput = document.getElementById('passwort').value;

    // require(shell).openExternal("https://www.intern.mosbach.dhbw.de/");

    openWindow(url);

    var username = document.getElementById('shortUsername');
    var passwort = document.getElementById('password');

    username.innerHTML = usernameInput;
    passwort.innerHTML = passwortInput;
    
}

function changeLink(url){
    window.location.href = url;
}

function openWindow() {
    var url = "https://www.intern.mosbach.dhbw.de/";
    console.log(url);
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var window = new BrowserWindow({ width: 800, height: 600 });
    // window.location.href = "https://www.intern.mosbach.dhbw.de/";
    window.open(url, '_blank', 'nodeIntegration=no');
}