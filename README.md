# This website contains:

### The Responsive Design
 - The Aspect Ratio used is 16:9
 - It is between these display resolution (1366x768 - 1600x900 - 1920x1080 - 2560x1440)
 
### Code Changes
 - Website layout code in HTML, and CSS 
 - Fix some bugs in JavaScript file
 

# Bug Fixes
### Subtract Button Bugs (Fixed in 12/12/23)
#### Before
 - Causes the other displayed scores or points to display zero 
 - The condition of if statement that uses the value of toNum that value uses the before value inside of toNum from which the condition inside (when it becomes zero) will skip to else statement then displays zero.
```
    function subtract(subtract) {
        if (toNum < 0) {
            toNum = Number(subtract.innerHTML) - 1;
            subtract.innerHTML = String(toNum);
        } else {
            subtract.innerHTML = "0";
        }
    }
```

#### After 
 - This code fixes it since it forces to subtract when activated on one of the buttons without having to use the value of toNum then it is condition to limit and display to zero.
[Code Changes](https://github.com/Block-Void/Scoreboard/blob/c6c5379bc593d0627e13726c759720e54d91ded4/Volleyball/volleyball.js#L105-L111)

### Input Bugs (Fixed in 01/14/23)
#### Before
 - Causes empty inputs to display no value in scoreboard
 #### Input Team Name Code
 ```
    inputHome = document.querySElector(".inputhome");
    inputHome.addEventListener("change", function() {
        homeName = document.querySelectorAll(".homename");
        if(homeName.value != "") {
            for(let i = 0; i < homeName.length; i++) {
                homeName[i].innerHTML = this.value;
            }
        } else {
            for(let i = 0; i < homeName.length; i++) {
                homeName[i].innerHTML = "Home Team";
            }
        }
    });
    
    inputAway = document.querySelector(".inputaway");
    inputAway.addEventListener("change", function() {
        awayName = document.querySelectorAll(".awayname");
        
        if(awayName.value != "") {
            for(let i = 0; i < awayName.length; i++) {
                awayName[i].innerHTML = this.value;
            }
        } else {
            for(let i = 0; i < awayName.length; i++) {
                awayName[i].innerHTML = "Away Team";
            }
        }
    });
 ```
 #### Input Timer Code
 ```
     let minuteSet, secondSet, minSetValue, secSetValue;
     minuteSet = document.querySelector(".minuteset");
     secondSet = document.querySelector(".secondset");
     
     document.querySelector(".minuteset").addEventListener("change", function() {
         let time = parseInt(this.value);
         if(time < 0) {
             this.value = 0;
         }
         if(time > 60) {
             this.value = 60;
         }
     });
     
     document.querySelector(".secondset").addEventListener("change", function() {
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
                 minute.textContent = String('0" + minSetValue);
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
         
 ```
 
#### After
- The fixed code turns the empty values into displaying the default value
- [Team Name Input Code](https://github.com/Block-Void/Scoreboard/blob/0151b7fd53a37901c82755ef6f4efe574ff87c94/Volleyball/volleyball.js#L6-L35)
- [Timer Input Code](https://github.com/Block-Void/Scoreboard/blob/0151b7fd53a37901c82755ef6f4efe574ff87c94/Volleyball/volleyball.js#L117-L188)


### Timer Bug (Fixed in 01/15/23)
#### Before
 - Can start without setting values inside the timer 
 ```
    function countDownTimer() {
        clearTimeout(timeout);
        if(timer) {
            if(minSetValue > 0 || secSetValue > 0) {
                secSetValue--;
            }

            if(seSetValue < 0) {
                minSetValue--;
                secSetValue = 59;
            }

            toString(minSetValue, minute);
            toString(secSetValue, second);

            function toString(string, time) {
                let timeString = string;
                if(string < 10) {
                    timeString = "0" + timeString;
                } else if(string == "") {
                    timeString == "00";
                }

                if(secSetValue < 10 && minSetValue == "") {
                    minute.textContent = "00";
                }

                if(secSetValue == 0 && minSetValue == 0) {
                    start2 = 0;
                    timer = false;
                }
                time.textContent = timeString;
            }
        }

        if(start2 == 1) {
            timeout = setTimeout(countDownTimer, 1000);
        }
    }
 ```

#### After
 - The fixed code stops from starting without setting a value
 - [The Added Code](https://github.com/Block-Void/Scoreboard/blob/f61a351b3efe13fc7552313c9b3a9f667fc92c74/Volleyball/volleyball.js#L258-L261)