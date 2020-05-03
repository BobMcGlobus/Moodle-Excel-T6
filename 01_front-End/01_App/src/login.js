// import {shell} from 'electron';
// const {shell} = require('electron');

function checkUser(){
    var usernameInput = document.getElementById('username').value;
    var passwortInput = document.getElementById('passwort').value;

    require(shell).openExternal("https://www.intern.mosbach.dhbw.de/");

    var username = document.getElementById('shortUsername');
    var passwort = document.getElementById('password');

    username.innerHTML = usernameInput;
    passwort.innerHTML = passwortInput;
    
}
