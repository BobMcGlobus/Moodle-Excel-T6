var buttonNext = document.getElementsByName('saveandshownext');
var grade;
var json_data;
var jsonString;

function getName() {
    var nameTag = document.querySelector("div h4 a");
    var wholeString = nameTag.innerHTML;
    // var wholeString = "ON19 Jonas Althoff";
    var regex = /^(.{4,5}\s)([a-zA-ZäöüßÄÖÜèéÈÉ]*)(\s)([a-zA-ZäöüßÄÖÜèéÈÉ]*)/;
    var name = wholeString.replace(regex, "$2")
    var surname = wholeString.replace(regex, "$4")
    console.log("getName: " + name);
    searchName(name, surname);
}

function searchNameInUserlist(){
    make_xlsx_lib(XLSX);
    var wbu;
    var userlist = new Uint8Array('./config/targetlist.xlsx');
    wbu = XLSX.read(userlist,{type:'array'});
    console.log(wbu);
}

function jsonToArray() {

    json_data = sessionStorage.getItem("jsonKey");
    // sessionStorage.removeItem("jsonKey");
    // toString();
    console.log(json_data);
}

function toString() {
    jsonString = JSON.stringify(json_data);
    var regex = /\\/g;
    var slashes = jsonString.replace(regex, "");
    regex = /^"(.*)"$/;
    var quotes = slashes.replace(regex, "$1");
    console.log("string: " + quotes);
    jsonString = quotes;
}

function searchName(name, surname) {
    jsonToArray();

    var string = [{"Vorname":"Jonas","Name":"Althoff","Note":80},{"Vorname":"Christian","Name":"Dänzer","Note":55},{"Vorname":"Pascal","Name":"Feinauer","Note":70},{"Vorname":"Katharina","Name":"Schmitt","Note":95},{"Vorname":"Marco","Name":"Scotellaro","Note":40}];

    var obj = string;
    // var obj = json_data;
    var searchingVorname = name.trim();
    var searchingName = surname.trim();

    fetch(obj)
    .then(response =>{
        return response.json();
    })
    
    for (var i = 0; i < obj.length; i++){
        if (obj[i].Vorname == searchingVorname && obj[i].Name == searchingName){
            grade = obj[i].Note;
            setGrade();
        }
    }
}

function setGrade() {
    var inputGrade = document.getElementById('id_grade');
    inputGrade.value = grade;
    console.log(grade);
    clickButtonNext();
}

function clickButtonNext() {
    alert("Nachdem der passende Name gefunden und die Note eingetragen wurde, wird der Button 'Speichern und nächste anzeigen' geklickt.");
    buttonNext.click();
}