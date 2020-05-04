var url = "https://moodle.mosbach.dhbw.de/mod/assign/view.php?id=132386";
// clickButtonGrading(url);

function clickButtonGrading(url) {
    // var shell = require('electron').shell;
    // require(shell).openExternal(url);
    changeLink(url);
    var buttonGrading = document.querySelector("div.submissionlinks a.class='btn btn-primary'");
    buttonGrading.click();
}

function changeLink(url){
    window.location.href = url;
}