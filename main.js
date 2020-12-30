function main(){

    let getCommand, result;
    getCommand = document.getElementById('getCommand').value;
    console.log(getCommand);
    if(getCommand == "ls"){
        result = 'Dokumenty Wideo Siema info.txt';
    }
    else if(getCommand == 'neofetch'){
        result = "OS: Swiat Linuxa <br> Host: YouTube <br> Kernel: 4,42tys. sub <br> Packages: 112(filmy) <br> Shell: bash 5.0.3 <br> CPU: Ryzen 7 <br> GPU: RADEON <br> Memory: 135Mib/ 3029Mib";
    }
    else{
        badCommand = 'bash: ' + getCommand + ': command not found';
        result =badCommand;
    }
    document.getElementById('terminal__result').innerHTML=result;
    document.getElementById('next').innerHTML = '<div class=terminal__body><div class=terminal__line><label class=terminal__line__header for=result>swiat@linuxa:~$</label> <input class=terminal__line__input id=getCommand> <input onclick=main() type=button value=Enter><div id=terminal__result></div></div>';


}


// terminal__result