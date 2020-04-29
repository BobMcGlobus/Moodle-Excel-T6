var i = 0;

var text = ['Lade Dateien hoch', 'Besiege Moodle-Wächter', 'Besteche Profs', 'Setze alle Noten von Jonas auf 100%', 'zeugs'];

function stuff() {
    if (i < 4) {
        document.getElementById("stuff").innerHTML = text[i];
        i++;
        setTimeout(stuff, 6000);
    }else{
        i = 0;
       stuff();
    }
}
