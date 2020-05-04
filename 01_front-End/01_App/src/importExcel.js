make_xlsx_lib(XLSX); //this is to fill xlsx object with functions and other stuff (its awful documented but important)
var imported;
var wb;
$('#input-excel').change(function(e){   //jquery stuff (note that there is no check for jquery)
    var reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = function(e) {
        var data = new Uint8Array(reader.result);
        console.log(XLSX);
        wb = XLSX.read(data,{type:'array'});
        var htmlstr = XLSX.write(wb,{sheet: wb.SheetNames[0], type:'binary',bookType:'html'});   //searches for a special sheet maybe make an input for it
        $('#wrapper')[0].innerHTML += htmlstr;                                          //place table in wrapper
        console.log(wb);
        document.getElementById('startImport').style.display = "block";

       // var ssheet = wb.SheetNames[0];
       // var test = 'A1';
       // console.log( wb.Sheets[ssheet][test].v);
    }
});