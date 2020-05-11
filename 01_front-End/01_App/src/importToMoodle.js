// var url = "https://moodle.mosbach.dhbw.de/mod/assign/view.php?id=132386";
var url;
function importData () {
    // alert("Der Import wurde gestartet.");
}

function saveURL () {
    url = document.getElementById('url').value;
    sessionStorage.setItem("urlKey", url);
}