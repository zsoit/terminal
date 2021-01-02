const lastP = document.querySelector('.terminal');
const listInput = document.querySelector('input');
const addListBtn = document.querySelector('button');


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Enter" || evt.key === "Enter");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        showLine();
    }
};

function showLine() {

    let command = document.querySelector('input').value;

    function addElementHTML(html) {
        var element = document.createElement('span');
        element.innerHTML = 'swiat@lnuxa:~$ ' + command + '<br>' + html + '<br><br>';
        document.querySelector('.terminalOut').appendChild(element);
    }

    //COMAND
    if (command == "ls") addElementHTML(`
    readme.txt
    Siema.txt
    `);
    else if (command == "ls -l") {
        addElementHTML(`
    <table>
    <tr>
        <td>-rwxrwxrwx</td>
        <td>1</td>
        <td>root</td>
        <td>root</td>
        <td width="50px"></td>
        <td>124</td>

    </tr>
    <tr>
        <td>-rwxrwxrwx</td>
        <td>1</td>
        <td>root</td>
        <td>root</td>
        <td width="50px"></td>
        <td>124</td>

   
    </tr>
    <tr>
        <td>-rwxrwxrwx</td>
        <td>1</td>
        <td>root</td>
        <td>root</td>
        <td width="50px"></td>
        <td> 25</td>
 
    </tr>
    <tr>
        <td>-rwxrwxrwx</td>
        <td>1</td>
        <td>root</td>
        <td>root</td>
        <td width="50px"></td>
        <td> 65</td>
   
    </tr>
    <tr>
        <td>-rwxrwxrwx</td>
        <td>1</td>
        <td>root</td>
        <td>root</td>
        <td width="50px"></td>
  
    </tr>
    <tr>
        <td>-rwxrwxrwx</td>
        <td>1</td>
        <td>root</td>
        <td>root</td>
        <td width="50px"></td>
   
    </tr>
    <tr>
        <td>-rwxrwxrwx</td>
        <td>1</td>
        <td>root</td>
        <td>root</td>
        <td width="50px"></td>

    </tr>
</table>

<table>
<tr>
    <td>
</tr>
</table>
    `);
    } else if (command == "clean") window.location.reload(true);

    else if (command == "neofetch") addElementHTML(`
    <img src="neo.png" width="150px" style="float: left; padding:20px;">
    OS: Swiat Linuxa <br>
    Host: YouTube <br>
    Kernel: 4,42tys. sub
    <br> Packages: 112(filmy)
    <br> Shell: bash 5.0.3
    <br> CPU: Ryzen 7
    <br> GPU: RADEON
    <br> Memory: 135Mib/ 3029Mib <br>`);
    else if (command == '') addElementHTML(' ');


    else addElementHTML("' " + command + " ' : bash command not found");

    document.querySelector('input').value = "";


}

function exit() {
    document.querySelector('#console').style.display = "none";
    document.querySelector('.icon').style.display = "block";
    document.querySelector('#app').innerHTML = 'Pulpit';
    document.querySelector('title').innerHTML = 'Pulpit';



}


function show() {
    document.querySelector('#console').style.display = "block";
    document.querySelector('.icon').style.display = "none";
    document.querySelector('#app').innerHTML = 'Terminal';
    document.querySelector('title').innerHTML = 'Terminal';



}

function firefox() {
    document.querySelector('#app').innerHTML = 'Firefox';
    document.querySelector('#console').style.display = "none";
    document.querySelector('.icon').style.display = "none";
    document.querySelector('.firefox').style.display = "block";
    document.querySelector(frame).style.display = "block";

}
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let day = new Date().getDay();

if (minute <= 9) {
    minute = '0' + minute;
}


document.querySelector('#time').innerHTML = hour + ":" + minute;