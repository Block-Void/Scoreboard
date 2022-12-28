let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

timer = false;
start2 = 1;
let timeout;
let minute = 01;
let second = 02;
let milli = 01;
startBtn.addEventListener('click', function () {
    // Triggers to start the timer [Start]
    if(start2 == 1){
        start2 = 0;
        timer = true;
	    stopWatch();
    } 
    
    // [End]
    
});

stopBtn.addEventListener('click', function () {
    // Pause timer
    if(start2 == 0){
        timer = false;
        start2 = 1;
        stopWatch();
    } 
});

resetBtn.addEventListener('click', function () {
    // Reset
    if(start2 == 0 || start2 == 1){
        timer = false;
        start2 = 1;
	    stopWatch();
    }
    minute = 01;
    second = 02;
    milli = 01;
});



function stopWatch() {
    clearTimeout(timeout);
   
	if (timer) {
        // Condition when the timer stops [Start]
        if(minute > 00 || second > 00 || milli > 00) {
            milli--;
        }
        // [End]

        // condition in minute [Start]
        if (milli < 0) {
            second--;
            milli = 99;
        }

		if (second < 0) {
			minute--;
			second = 59;
		}
        // [End]

        // Add number 0 when lower to 10 [Ex. 09]
		let minString = minute;
		let secString = second;
        let milliString = milli;

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

        if(milli < 10) {
            milliString = "0" + milliString;
        }

        // [End]

        // View [Start]
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
        document.getElementById('mil').innerHTML = milliString;
        // [End]

        // Loops and limit
        
        if(start2 == 0) {
            timeout = setTimeout(stopWatch, 10);
          
        } 
	}
}
