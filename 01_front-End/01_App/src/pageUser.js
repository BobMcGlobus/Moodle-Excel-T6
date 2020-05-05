var buttonNext = document.getElementsByName('saveandshownext');
var grade;

/* Ablauf
getName();
setGrade(grade);
clickButtonNext();
*/
make_xlsx_lib(XLSX);
var wbu;
var userlist = new Uint8Array('./config/targetlist.xlsx');
wbu = XLSX.read(userlist,{type:'array'});
console.log(wbu);









function getName() {
    /* Aufbau Moodle
    <div data-region="user-info">
        <h4 id="yui_3_17_2_1_1588593555365_53">
            <a> NAME </a>
        </h4>
    </div>
    */

    // var nameTag = document.querySelector("div h4 a");
    // var wholeString = nameTag.innerHTML;
    var wholeString = "ON19 Jonas Althoff";
    var regex = /^(.{4}\s)([a-zA-ZäöüßÄÖÜèéÈÉ]*)(\s)([a-zA-ZäöüßÄÖÜèéÈÉ]*)/;
    var name = wholeString.replace(regex, "$2")
    var surname = wholeString.replace(regex, "$4")
    
    searchName(name, surname);
}

function searchName(name, surname) {
     var ssheet = wb.SheetNames[0];
     // var i;
     var columnA;
     var columnB;
     var columnC;

     for (i = 2; i <= wb.SheetNames[0].length; i++) {
          // this is working with a table with name in mnr in column a, column c and surname in colum b
          columnA = 'A' + i;
          columnB = 'B' + i;
          columnC = 'C' + i;

          var nameTemp = wb.Sheets[ssheet][columnC].v;
          var surnameTemp = wb.Sheets[ssheet][columnB].v;

          // console.log(name);
          // console.log(columnC);
          // console.log(nameTemp);

          if (name == nameTemp && surname == surnameTemp) { 
               console.log("found ya");
               //get grade
               grade = wb.Sheets[ssheet][columnA].v;
               setGrade(grade);
               break;
          }
     }
     return grade; 
}

function setGrade(grade) {
    var inputGrade = document.getElementById('id_grade');
//     inputGrade.value = grade;
    inputGrade.innerHTML = grade;
}

function clickButtonNext() {
    buttonNext.click();
}