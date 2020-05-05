var url = "https://moodle.mosbach.dhbw.de/mod/assign/view.php?id=132386";
// clickButtonGrading(url);

function clickButtonGrading(url) {
    // var shell = require('electron').shell;
    // require(shell).openExternal(url);
    openWindow(url);
    var buttonGrading = document.querySelector("div.submissionlinks a.class='btn btn-primary'");
    buttonGrading.click();
}

function changeLink(url){
    window.location.href = url;
}

function openWindow(url) {
    window.open(url, '_blank', 'nodeIntegration=no')
}

function openWindow(url) {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var window = new BrowserWindow({ width: 800, height: 600 });
    window.open(url, '_blank', 'nodeIntegration=no')
  }