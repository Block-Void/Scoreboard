// input home name and away name [Start]
let inputhome, inputaway, 
    homename, awayname; 

inputhome = document.querySelector(".inputhome");
inputhome.addEventListener("keypress", function changeHomeName(event) {
    inputhome = document.querySelector(".inputhome").value;
    homename = document.querySelectorAll(".homename");

    if (event.key === "Enter") {
        for(let i = 0; i < homename.length; i++){
            homename[i].innerHTML = inputhome;
        }
    }
});

inputaway = document.querySelector(".inputaway");
inputaway.addEventListener("keypress", function changeAwayName(event) {
    inputaway = document.querySelector(".inputaway").value;
    awayname = document.querySelectorAll(".awayname");

    if(event.key === "Enter") {
        for(let i = 0; i < awayname.length; i++){
            awayname[i].innerHTML = inputaway;
        }
    }
});
// input home name and away name [End]

// add home score, away score, home set, period, and away set [Start]
let homeadd, homesubtract, homescore, homeset, homesetadd, homesetsubtract,
    awayadd, awaysubtract, awayscore, awayset, awaysetadd, awaysetsubtract,
    periodadd, periodsubtract, period, toNum;

homeadd = document.querySelector(".homescoreadd");
awayadd = document.querySelector(".awayscoreadd");
homesetadd = document.querySelector(".homesetadd");
awaysetadd = document.querySelector(".awaysetadd");
periodadd = document.querySelector(".periodadd");
homescore = document.querySelector(".homescore");
awayscore = document.querySelector(".awayscore");
homeset = document.querySelector(".homeset");
awayset = document.querySelector(".awayset");
period = document.querySelector(".period");


homeadd.onclick = function() {
    add(homescore);
}
homesetadd.onclick = function() {
    add(homeset);
}

awayadd.onclick = function() {
    add(awayscore);
}

awaysetadd.onclick = function() {
    add(awayset);
}

periodadd.onclick = function() {
    add(period);
}
function add(add){

    toNum = Number(add.textContent) + 1;
    add.innerHTML = String(toNum);
}

// add home score, away score, home set, period, and away set [End]

// subtract home score, away score, home set, period and away set [Start]
homesubtract = document.querySelector(".homescoresubtract");
awaysubtract = document.querySelector(".awayscoresubtract");
homesetsubtract = document.querySelector(".homesetsubtract");
awaysetsubtract = document.querySelector(".awaysetsubtract");
periodsubtract = document.querySelector(".periodsubtract");


homesubtract.onclick = function() {
    subtract(homescore);
}
awaysubtract.onclick = function() {
    subtract(awayscore);
}
homesetsubtract.onclick = function() {
    subtract(homeset);
}
awaysetsubtract.onclick = function() {
    subtract(awayset);
}
periodsubtract.onclick = function() {
    subtract(period);
}

function subtract(subtract) {
    if (toNum > 0) {
        toNum = Number(subtract.innerHTML) - 1;
        subtract.innerHTML = String(toNum);
    } else {
        subtract.innerHTML = "0";
    }
}
// subtract home score, away score, home set, period, away set [End]

let minuteset, secondset;
minuteset = document.querySelector(".minuteset");
secondset = document.querySelector(".secondset");

let set = document.querySelector(".set");

set.onclick = function() {

    minuteset = minuteset.value;
    secondset = secondset.value;
    
    if(start2 == 0){
        timer = false;
        start2 = 1;
    } else {
        timer = false;
        start2 = 1;
        if(minuteset < 10) {
            minute.textContent = String("0" + minuteset);
    
            if(minuteset == "") {
                minute.textContent = "00";
            }
        
        } else {
            minute.textContent = minuteset;
        }
    
        if(secondset < 10) {
            second.textContent = String("0" + secondset);
            
            if(secondset == "") {
                second.textContent = "00";
            }
        
        } else {
            second.textContent = secondset;
        }
    }

    
}


//Countdown Timer
let start, start2, pause, reset, timer, minute, second, timeout;

minute = document.querySelector(".minute");
second = document.querySelector(".second");

timer = false;
start2 = 1;
start = document.querySelector(".start");
start.onclick = function() {

    if(start2 == 1){
        start2 = 0;
        timer = true;
	    countdowntimer();
    } else {
        timer = true;
    }
}
pause = document.querySelector(".pause");
pause.onclick = function() {
    if(start2 == 0){
        timer = false;
        start2 = 1;
    } else {
        timer = true;
    }
}

reset = document.querySelector(".reset");
reset.onclick = function() {

    
    if(start2 == 0 || start2 == 1){
        timer = false;
        start2 = 1;
        minute.innerHTML = minuteset.value;
        second.innerHTML = secondset.value;
    }
}

function countdowntimer() {
    clearTimeout(timeout);
    
    if (timer) {
        // Condition when the timer stops [Start]

        if(minuteset > 0 || secondset > 0) {
            secondset--;
        }
        
        // [End]

        // minute timer
        if(secondset < 0) {
            minuteset--;
            secondset = 59;
        }
        // [End]

        // Add number 0 when lower than 10 [Ex. 09]
        toString(minuteset, minute);
        toString(secondset, second);

        function toString(string, time) {
            let timeString = string;
            if(string < 10) {
                timeString = "0" + timeString;
            } else if(string == "") {
                timeString == "00";
            }

            if (secondset < 10 && minuteset == "") {
                minute.textContent = "00";
            }
            // View [Start]
            time.textContent = timeString;
            // [End]
        }
        // [End]


        // Loops and limit
        if(start2 == 0) {
            timeout = setTimeout(countdowntimer, 1000);
        }
    }
}

