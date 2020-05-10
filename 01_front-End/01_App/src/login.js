var usernameInput;
var passwortInput;

function loginUser() {
    usernameInput = document.getElementById('username').value;
    sessionStorage.setItem("usernameInputKey", usernameInput);
    passwortInput = document.getElementById('passwort').value;
    sessionStorage.setItem("passwortInputKey", passwortInput);
    window.location.href = "loginseite.html";
    url = sessionStorage.getItem("urlKey");
    sessionStorage.removeItem("urlKey");
    console.log(url);
    // openWindow();
    return this.usernameInput, this.passwortInput;
}

function checkUser(){
    usernameInput = sessionStorage.getItem("usernameInputKey");
    passwortInput = sessionStorage.getItem("passwortInputKey");
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

//open new browser window (new step)
// function openWindow() {
//     var url = localStorage.getItem("urlKey");
//     const remote = require('electron').remote;
//     const BrowserWindow = remote.BrowserWindow;

//     var newWin = new BrowserWindow({ width: 1200, height: 800 });
//     newWin.webContents.openDevTools();
//     newWin.loadURL(url);
//     newWin.webContents.executeJavaScript(`checkUser();`);
// }


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