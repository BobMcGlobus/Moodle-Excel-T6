function checkUser(){
    var user = [
        {
            username: "user1",
            passwort: "passwort1"
        },
        {
            username: "user2",
            passwort: "passwort2"
        },
        {
            username: "user3",
            passwort: "passwort3"
        }
    ];
    
    var usernameInput = document.getElementById('username').value;
    var passwortInput = document.getElementById('passwort').value;

    console.log(usernameInput);
    console.log(passwortInput);

    var index = user.indexOf(usernameInput);
    console.log(index);
    
    if (index >= 0) {
        if (user[index].passwort != passwortInput) {
            alert("Username und Passwort stimmen nicht überein.")
        }
    }
}