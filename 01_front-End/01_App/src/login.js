var usernameInput;
var passwortInput;

function loginUser() {
    usernameInput = document.getElementById('username').value;
    localStorage.setItem("usernameInputKey", usernameInput);
    passwortInput = document.getElementById('passwort').value;
    localStorage.setItem("passwortInputKey", passwortInput);
    window.location.href = "loginseite.html";
    url = localStorage.getItem("urlKey");
    console.log(url);
    return this.usernameInput, this.passwortInput;
}

function checkUser(){
    usernameInput = localStorage.getItem("usernameInputKey");
    passwortInput = localStorage.getItem("passwortInputKey");
    console.log(usernameInput);
    console.log(passwortInput);
    importUserData(usernameInput, passwortInput);
    alert("Login-Seite von Moodle wurde geöffnet und Login-Daten wurden übertragen.");
    openWindow();
}

function openWindow() {
    var url = "bewertungsueberblick.html";
    window.location.href = url;
}

function importUserData(usernameInput, passwortInput) {
    var username = document.getElementById('shortUsername');
    var passwort = document.getElementById('password');

    username.value = usernameInput;
    passwort.value = passwortInput;
}



// function openWindow(usernameInput, passwortInput) {
//     var url = "https://www.intern.mosbach.dhbw.de/";
//     console.log(url);
//     window.location.href = url;
//     window.setTimeout(importUserData(usernameInput, passwortInput),100000);

//     const remote = require('electron').remote;
//     const BrowserWindow = remote.BrowserWindow;

//     var newWin = new BrowserWindow({ width: 1200, height: 800 });
//     newWin.webContents.openDevTools();
//     newWin.loadURL(url);

//     newWin.webContents.on('did-finish-load', function() {
//         window.setTimeout(importUserData(usernameInput, passwortInput),100000);
//     });
// }