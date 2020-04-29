var i = 0;

var perc = ['0%', '13%', '17%', '25%', '37%', '49%', '51%', '62%', '83%', '91%' ];

function percent() {
    if (i < 9) {
        document.getElementById("percent").innerHTML = perc[i];
        i++;
        setTimeout(percent, 2500);
    }else{
        document.getElementById("percent").innerHTML = "100%";
        setTimeout(end, 700);
    }
}
function end() {
    window.location = "success.html";
}