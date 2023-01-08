// inputs for home name and away name [Start]
let inputHome, inputAway, 
    homeName, awayName; 


inputHome = document.querySelector(".inputhome");
inputHome.addEventListener("change", function() {
    homeName = document.querySelectorAll(".homename");

        for(let i = 0; i < homeName.length; i++){
            homeName[i].innerHTML = this.value;
        }
});

inputAway = document.querySelector(".inputaway");
inputAway.addEventListener("change", function() {
    awayName = document.querySelectorAll(".awayname");
    
        for(let i = 0; i < awayName.length; i++){
            awayName[i].innerHTML = this.value;
        }
});
// inputs for home name and away name [End]

// add 1 in home score, away score, home set, period, and away set [Start]
let homeAdd, homeSubtract, homeScore, homeSet, homeSetAdd, homeSetSubtract,
    awayAdd, awaySubtract, awayScore, awaySet, awaySetAdd, awaySetSubtract,
    periodAdd, periodSubtract, period, toNum;

homeAdd = document.querySelector(".homescoreadd");
awayAdd = document.querySelector(".awayscoreadd");
homeSetAdd = document.querySelector(".homesetadd");
awaySetAdd = document.querySelector(".awaysetadd");
periodAdd = document.querySelector(".periodadd");
homeScore = document.querySelector(".homescore");
awayScore = document.querySelector(".awayscore");
homeSet = document.querySelector(".homeset");
awaySet = document.querySelector(".awayset");
period = document.querySelector(".period");


homeAdd.onclick = function() {
    add(homeScore);
}
homeSetAdd.onclick = function() {
    add(homeSet);
}

awayAdd.onclick = function() {
    add(awayScore);
}

awaySetAdd.onclick = function() {
    add(awaySet);
}

periodAdd.onclick = function() {
    add(period);
}
function add(add){

    toNum = Number(add.textContent) + 1;
    add.innerHTML = String(toNum);
}
// add 1 in home score, away score, home set, period, and away set [End]

// subtract 1 in home score, away score, home set, period and away set [Start]
homeSubtract = document.querySelector(".homescoresubtract");
awaySubtract = document.querySelector(".awayscoresubtract");
homeSetSubtract = document.querySelector(".homesetsubtract");
awaySetSubtract = document.querySelector(".awaysetsubtract");
periodSubtract = document.querySelector(".periodsubtract");


homeSubtract.onclick = function() {
    subtract(homeScore);
}

awaySubtract.onclick = function() {
    subtract(awayScore);
}

homeSetSubtract.onclick = function() {
    subtract(homeSet);
}

awaySetSubtract.onclick = function() {
    subtract(awaySet);
}

periodSubtract.onclick = function() {
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
// subtract 1 home score, away score, home set, period, away set [End]

// set minute or second in timer [Start]
let minuteSet, secondSet, minSetValue, secSetValue;
minuteSet = document.querySelector(".minuteset");
secondSet = document.querySelector(".secondset");

document.querySelector(".minuteset").addEventListener("change", function(){
    let time = parseInt(this.value);
    if(time < 0) {
        this.value = 0;
    }
    if(time > 60) {
        this.value = 60;
    }
});

document.querySelector(".secondset").addEventListener("change", function(){
    let time = parseInt(this.value);
    if(time < 0) {
        this.value = 0;
    }
    if(time > 59) {
        this.value = 59;
    }
});

let set = document.querySelector(".set");
set.onclick = function() {
    if(minuteSet.value === undefined) {
        minuteSet.value == "00";
    }
    if(secondSet.value === undefined) {
        secondSet.value = "00";
    }
    if(start2 == 0 && timer == false) {
        minSetValue = minuteSet.value;
        secSetValue = secondSet.value;
        
        if(minSetValue < 10) {
            minute.textContent = String("0" + minSetValue);
            if(minSetValue == "") {
                minute.textContent = "00";
            }
        } else {
            minute.textContent = minSetValue;
        }
    
        if(secSetValue < 10) {
            second.textContent = String("0" + secSetValue);
            if(secSetValue == "") {
                second.textContent = "00";
            }
        } else {
            second.textContent = secSetValue;
        }
    }
}
// set minute or second in timer [End]

// Countdown Timer Buttons start, pause, and reset [Start]
let start, start2, pause, reset, timer, minute, second, timeout;

minute = document.querySelector(".minute");
second = document.querySelector(".second");

timer = false;
start2 = 0;

start = document.querySelector(".start");
start.onclick = function() {
    if(start2 == 0){
        start2 = 1;
        timer = true;
	    countDownTimer();
    } else {
        timer = true;
    }
}

pause = document.querySelector(".pause");
pause.onclick = function() {
    if(start2 == 1){
        timer = false;
        start2 = 0;
    } else {
        timer = true;
    }
}

reset = document.querySelector(".reset");
reset.onclick = function() {
    timer = true;
    if(confirm("Are you sure this will reset your timer!")){
        if(start2 == 0 || start2 == 1){
            timer = false;
            start2 = 0;
            minSetValue = document.querySelector(".minuteset").value;
            secSetValue = document.querySelector(".secondset").value;

            if(minSetValue < 10) {
                minute.textContent = String("0" + minSetValue);
                if(minSetValue == "") {
                    minute.textContent = "00";
                }
            } else {
                minute.textContent = minSetValue;
            }
        
            if(secSetValue < 10) {
                second.textContent = String("0" + secSetValue);
                if(secSetValue == "") {
                    second.textContent = "00";
                }
            } else {
                second.textContent = secSetValue;
            }
        }
    }
}
// Countdown Timer Buttons start, pause, and reset  [End]

// Timer Function [Start]
function countDownTimer() {
    clearTimeout(timeout);
    if (timer) {
        // Countdown until both second and minute is zero [Start]
        if(minSetValue > 0 || secSetValue > 0) {
            secSetValue--;
        }
        // Countdown until both second and minute is zero [End]

        // Condition for when the minute decreased by one [Start]
        if(secSetValue < 0) {
            minSetValue--;
            secSetValue = 59;
        }
        // Condition for when the minute decreased by one [End]

        // Add number 0 when lower than 10 |Ex. 09| [Start]
        toString(minSetValue, minute);
        toString(secSetValue, second);

        function toString(string, time) {
            let timeString = string;
            if(string < 10) {
                timeString = "0" + timeString;
            } else if(string == "") {
                timeString == "00";
            }

            // Display the minute to 00 only when the timer second have value [Start]
            if (secSetValue < 10 && minSetValue == "") {
                minute.textContent = "00";
            }
            // Display the minute to 00 only when the timer second have value [End]

            // Stops the timer when the timer have ended [Start]
            if(secSetValue == 0 && minSetValue == 0) {
                start2 = 0;
                timer = false;
            }
            // Stops the timer when the timer have ended [End]

            // Displays the added 0 into scoreboard [Start]
            time.textContent = timeString;
            // Displays the added 0 into scoreboard [End]
        }
        // Add number in front when it is lower than 10 [End]

        // Loops and limit the timer from the buttons [Start]
        if(start2 == 1) {
            timeout = setTimeout(countDownTimer, 1000);
        }
        // Loops and limit the timer from the buttons [End]
    }
}
// Timer Function [End]
