make_xlsx_lib(XLSX); //this is to fill xlsx object with functions and other stuff (its awful documented but important)
var imported;
var wb;

$('#input-excel').change(function(e){   //jquery stuff (note that there is no check for jquery)
    var reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = function(e) {
        var data = new Uint8Array(reader.result);
        wb = XLSX.read(data,{type:'array'});
        var htmlstr = XLSX.write(wb,{sheet: wb.SheetNames[0], type:'binary',bookType:'html'});   //searches for a special sheet maybe make an input for it
        $('#wrapper')[0].innerHTML += htmlstr;                                          //place table in wrapper
        console.log(wb);
        document.getElementById('startImport').style.display = "block";

        //save in local storage to access later from different html file
        wb = localStorage.setItem("wbKey", JSON.stringify(wb));

        // var ab = localStorage.getItem("wbKey");
        // console.log("ab.SheetNames[0].length: " + ab.SheetNames[0].length);
        // var ssheet = wb.SheetNames[0];
        // var test = 'A1';
        // console.log( wb.Sheets[ssheet][test].v);
    }
});

var selectedFile;
var jsonObject;

document.getElementById("input-excel")
    .addEventListener("change", function(event) {
    selectedFile = event.target.files[0];
    makeString();
    });

function makeString() {
    if (selectedFile) {
        console.log("hi");
        var fileReader = new FileReader();
        fileReader.onload = function(event) {
        var data = event.target.result;
            var workbook = XLSX.read(data, {type: "binary"});
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                jsonObject = JSON.stringify(rowObject);
                document.getElementById("jsonData").innerHTML = jsonObject;
                localStorage.setItem("jsonKey", jsonObject);
                console.log(jsonObject);
            });
        };
        fileReader.readAsBinaryString(selectedFile);
    }
}