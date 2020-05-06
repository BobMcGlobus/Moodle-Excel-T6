function checkUser(url){
    var usernameInput = document.getElementById('username').value;
    var passwortInput = document.getElementById('passwort').value;

    openWindow();
}

function openWindow(usernameInput, passwortInput) {
    var url = "https://www.intern.mosbach.dhbw.de/";
    console.log(url);
    window.location.href = url;
    window.setTimeout(importUserData(usernameInput, passwortInput),100000);

    // const remote = require('electron').remote;
    // const BrowserWindow = remote.BrowserWindow;

    // var newWin = new BrowserWindow({ width: 1200, height: 800 });
    // newWin.webContents.openDevTools();
    // newWin.loadURL(url);

    // newWin.webContents.on('did-finish-load', function() {
    //     console.log("TESTITEST");
    //     window.setTimeout(importUserData(usernameInput, passwortInput),100000)
    //     // importUserData(usernameInput, passwortInput);
    // });
    
}

function importUserData(usernameInput, passwortInput) {
    var username = document.getElementById('shortUsername');
    var passwort = document.getElementById('password');

    username.innerHTML = usernameInput;
    passwort.innerHTML = passwortInput;
}