var buttonNext = document.getElementsByName('saveandshownext');
var grade;

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

    console.log(name);
    console.log(surname);

    searchName(name, surname);
}

function searchName(value1, value2) {
    let valueName = value1;
    let valueSurname = value2;

    $(document).ready(function(){  
        $(name).keyup(function(){  
             search_table(valueName);  
        });  
        function search_table(valueName){  
             $('table tr').each(function(){  
                  var found = 'false';  
                  $(this).each(function(){  
                       if($(this).text().toLowerCase().indexOf(valueName.toLowerCase()) >= 0)  
                       {  
                            found = 'true';  
                            alert("yipiie");
                       }  
                  });  
                  if(found == 'true')  
                  {  
                       $(this).show();  
                  }  
                  else  
                  {  
                       $(this).hide();  
                  }  
             });  
        }  
   });  
}

function setGrade() {
    var inputGrade = document.getElementsById('id_grade');
    inputGrade.value = grade;
}

function clickButtonNext() {
    buttonNext.click();
}