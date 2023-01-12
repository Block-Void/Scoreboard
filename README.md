# This website contains:

### The Responsive Design
 - The Aspect Ratio used is 16:9
 - It is between these display resolution (1366x768 - 1600x900 - 1920x1080 - 2560x1440)
 
### Code Changes
 - Website layout code in HTML, and CSS 
 - Fix some bugs in JavaScript file

### Bug Fixes
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