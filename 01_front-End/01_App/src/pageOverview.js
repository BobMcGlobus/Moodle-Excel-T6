// var url = "https://moodle.mosbach.dhbw.de/mod/assign/view.php?id=132386";
// clickButtonGrading(url);

function clickButtonGrading() {
    // var shell = require('electron').shell;
    // require(shell).openExternal(url);
    alert("Button 'Bewertung' wird geklickt.");
    var buttonGrading = document.querySelector("div.submissionlinks a.btn btn-primary");
    buttonGrading.click();
}

function openWindow() {
    var url = "namensseite.html";
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var window = new BrowserWindow({ width: 800, height: 600 });
    window.location.assign(url);
}








// function changeLink(url){
//     window.location.href = url;
// }

// function openWindow(url) {
//     window.open(url, '_blank', 'nodeIntegration=no')
// }