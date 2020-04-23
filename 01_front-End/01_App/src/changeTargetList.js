const openList= document.getElementById('openList');
const shell = require('electron').shell                                 //require shell to perform shell commands
openList.addEventListener('click', function (event) {
    shell.showItemInFolder('./config/targetlist.xlsx')          //opens relative path to the list with moodle Accounts
})



