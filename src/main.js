const userList = document.querySelector('.terminal');
const listInput = document.querySelector('input');
const addListBtn = document.querySelector('button');

let input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        showLine();
    }
});


function showLine() {

    let command = document.querySelector('input').value;

    let commandResult;

    if (command == "ls") {
        commandResult = 'Dokumenty  Muzyka readme.txt';
    } else if (command == "clear" || command == "clean") {
        window.location.reload(true);
        commandResult = ' ';
    } else if (command == "neofetch") {
        commandResult = `OS: Swiat Linuxa  
            Host: YouTube 
            Kernel: 4,42tys. sub 
            Packages: 112(filmy) 
            Shell: bash 5.0.3 
            CPU: Ryzen 7 
            GPU: RADEON
            Memory: 135Mib/ 3029Mib`;
    } else if (command == "free -h") {
        commandResult = 'WOLNE 200GB';


    } else {
        commandResult = command + ' : bash not found command';
    }

    const newLI = document.createElement("P");
    const liContent = document.createTextNode('swiat@lnuxa:~$' + ' ' + command + ' ');
    newLI.appendChild(liContent);
    userList.appendChild(newLI);
    const newi = document.createElement("p");
    const iconent = document.createTextNode(commandResult);
    newi.appendChild(iconent);
    userList.appendChild(newi);

    // document.querySelector('.terminal').innerHTML = commandResult;

    document.querySelector('input').value = "";


}