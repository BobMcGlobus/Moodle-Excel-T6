var url;

function importData () {
    // alert("Der Import wurde gestartet.");
}

function saveURL () {
    url = document.getElementById('url').value;
    localStorage.setItem("urlKey", url);
}