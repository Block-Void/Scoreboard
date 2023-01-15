// Set Team Name [Start]
    let inputHome, inputAway, 
        homeName, awayName; 

    inputHome = document.querySelector(".inputhome");
    inputHome.addEventListener("change", function() {
        homeName = document.querySelectorAll(".homename");
        inputHomeValue = inputHome.value;

        for(let i = 0; i < homeName.length; i++) {
            homeName[i].innerHTML = this.value;
        }

        if(inputHomeValue.length == 0) {
            for(let i = 0; i < homeName.length; i++) {
                homeName[i].innerHTML = "Home Team";
            }
        }
    });

    inputAway = document.querySelector(".inputaway");
    inputAway.addEventListener("change", function() {
        awayName = document.querySelectorAll(".awayname");
        inputAwayValue = inputAway.value;

        for(let i = 0; i < awayName.length; i++) {
            awayName[i].innerHTML = this.value;
        }
        if(inputAwayValue.length == 0) {
            for(let i = 0; i < awayName.length; i++) {
                awayName[i].innerHTML = "Away Team";
            }
        }
    });
// Set Team Name [End]

// Add Button [Start]
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
    function add(add) {
        toNum = Number(add.textContent) + 1;
        add.innerHTML = String(toNum);
    }
// Add Button [End]

// Subtract Button [Start]
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
        toNum = Number(subtract.innerHTML) - 1;
        subtract.innerHTML = String(toNum);
        if (toNum < 0) {
            subtract.innerHTML = "0";
        }
    }
// Subtract Button [End]

// Setting Timer [Start]
    let minuteSet, secondSet, minSetValue, secSetValue;
    minuteSet = document.querySelector(".minuteset");
    secondSet = document.querySelector(".secondset");


    inputMinute = document.querySelector(".minuteset").addEventListener("change", function() {
        let time = parseInt(this.value);
        inputMinuteValue = minuteSet.value;

        if(time < 0) {
            this.value = 0;
        }
        if(time > 60) {
            this.value = 60;
        }

        if(inputMinuteValue.length == 0) {
            this.value = 0;
        }
    });

    inputSecond = document.querySelector(".secondset").addEventListener("change", function() {
        let time = parseInt(this.value);
        inputSecondValue = secondSet.value;

        if(time < 0) {
            this.value = 0;
        }
        if(time > 59) {
            this.value = 59;
        }

        if(inputSecondValue.length == 0) {
            this.value = 0;
        }
    });

    let set = document.querySelector(".set");
    set.onclick = function() {
        minSetValue = minuteSet.value;
        secSetValue = secondSet.value;
        if(minSetValue.length = 0) {
            minute.textContent = "00";
            minuteSet.value = 0;
        }

        if(secSetValue.length = 0) {
            second.textContent = "00";
            secondSet.value = 0;
        }
        
        if(start2 == 0 && timer == false) {

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
// Setting Timer [End]

// Timer Buttons [Start]
    let start, start2, pause, reset, timer, minute, second, timeout;

    minute = document.querySelector(".minute");
    second = document.querySelector(".second");

    timer = false;
    start2 = 0;

    start = document.querySelector(".start");
    start.onclick = function() {
        if(minSetValue.length == 0 && secSetValue.length == 0) {
            minute.textContent = "00";
            second.textContent = "00";
            start2 = 0;
        } else {
            if(start2 == 0) {
                start2 = 1;
                timer = true;
                countDownTimer();
            } else {
                timer = true;
            }
        }
    }

    pause = document.querySelector(".pause");
    pause.onclick = function() {
        if(start2 == 1) {
            timer = false;
            start2 = 0;
        } else {
            timer = true;
        }
    }

    reset = document.querySelector(".reset");
    reset.onclick = function() {
        if(start2 == 0 || start2 == 1) {
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
// Timer Buttons [End]

// Countdown Timer Function [Start]
    function countDownTimer() {
        clearTimeout(timeout);
        minuteValue = minuteSet.value;
        secondValue = secondSet.value;

        if(minuteValue.length > 0 || secondValue.length > 0) {
            if(timer) {
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
    }
// Timer Function [End]
