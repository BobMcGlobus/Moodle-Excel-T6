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

    json_data = localStorage.getItem("jsonKey");
    toString();
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
    // var obj = jsonString;
    var searchingVorname = name;
    var searchingName = surname;
    
    console.log(obj.length);
    for (var i = 0; i < obj.length; i++){
        if (obj[i].Vorname == searchingVorname && obj[i].Name == searchingName){
        // we found it
        grade = obj[i].Note;
        setGrade();
        }
    }
}

function setGrade() {
    var inputGrade = document.getElementById('id_grade');
    inputGrade.value = grade;
    console.log(grade);
    // clickButtonNext();
}

function clickButtonNext() {
    alert("Nachdem der passende Name gefunden und die Note eingetragen wurde, wird der Button 'Speichern und nächste anzeigen' geklickt.");
    buttonNext.click();
}


/*
function searchName(name, surname) {
    jsonToArray();
    var myArr = [json_data];
    document.getElementById("demo").innerHTML = myArr[1].firstName;

    var ssheet = wbTemp.SheetNames[0];
    console.log("wb.SheetNames[0].length: " + wbTemp.SheetNames[0].length);
    // var i;
    var columnA;
    var columnB;
    var columnC;

    for (i = 2; i <= wbTemp.SheetNames[0].length; i++) {
        // this is working with a table with name in column a, surname in column b and grade in column c
        columnA = 'A' + i;
        columnB = 'B' + i;
        columnC = 'C' + i;

        var nameTemp = wbTemp.Sheets[ssheet][columnA].v;
        var surnameTemp = wbTemp.Sheets[ssheet][columnB].v;

        console.log("searchName: " + name);
        console.log("searchName Temp: " + nameTemp);
        // console.log(name);
        // console.log(columnC);
        // console.log(nameTemp);

        if (name == nameTemp && surname == surnameTemp) { 
            console.log("found ya");
            //get grade
            grade = wbTemp.Sheets[ssheet][columnC].v;
            localStorage.setItem("gradeKey", grade);
            setGrade();
            break;
        }
    }
    return grade; 
}
*/