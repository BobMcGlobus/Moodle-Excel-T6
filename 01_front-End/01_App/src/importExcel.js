var fileUploaded = false;
var file;

//-----------FUNCTIONS------------

function checkFileReader () {
    // var path = document.getElementById('path').value;
    var path = "../../02_Daten/test.xlsx";
    file = new File ([""], path);
    if (window.FileReader) {
        checkFile(file);
        console.log("FileReader works.");
    } else {
        alert("This browser isn't supported. Please use another one.");
    }
}

function checkFile (file) {
    console.log(file.name);
    var regex = /^(.*)\.(xlsx|xls)$/;
    if (regex.test(file.name.toLowerCase())) {
        getAsArray();
        fileUploaded = true;
    } else {
        alert("This is not a xls or xlsx file. Please make sure of that.");
    }

}

function getAsArray () {
    let reader = new FileReader();
    //For Browsers other than IE.
    if (reader.readAsBinaryString) {
        reader.onload = function (e) {
            console.log(e.target.result);
            console.log(file);
            createTable(file);
        };
        reader.readAsBinaryString(file);
    } else {
        //For IE Browser.
        reader.onload = function (e) {
            var data = "";
            var bytes = new Uint8Array(e.target.result);
            for (var i = 0; i < bytes.byteLength; i++) {
                data += String.fromCharCode(bytes[i]);
            }
            createTable(data);
        };
        reader.readAsArrayBuffer(file);
    }
}

function createTable(file) {
        //Read the Excel File data.
 
        //Create a HTML Table element.
        var table = document.createElement("table");
        table.border = "1";
 
        //Add the header row.
        var row = table.insertRow(-1);
 
        //Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Matrikelnr";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Punkte";
        row.appendChild(headerCell);
 
        //Add the data rows from Excel file.
        // for (var i = 0; i < excelRows.length; i++) {
        //     //Add the data row.
        //     var row = table.insertRow(-1);
 
        //     //Add the data cells.
        //     cell = row.insertCell(-1);
        //     cell.innerHTML = excelRows[i].Matrikelnr;
 
        //     cell = row.insertCell(-1);
        //     cell.innerHTML = excelRows[i].Punkte;
        // }
 
        var divExcel = document.getElementById("divExcel");
        divExcel.innerHTML = "";
        divExcel.appendChild(table);
    
}