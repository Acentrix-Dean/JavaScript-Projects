var varGlobal = 'I am a global variable.'; /* Create a variable */

window.onload = function local() { /*Create function */
    var varLocal = 'I am a local variable'; /* Create a variable */
    document.getElementById('local_variable').innerHTML = varLocal; /* Locate element with 'local_variable' id and change innerHTML to the value stored inside the 'varLocal' variable */
}

/* document.getElementById('local_variable').innerHTML = varLocal; - previous error */
/* console.log(varLocal); - console log to debug issue */

document.write(varGlobal); /* Print the value inside the 'varGlobal' variable */

function checkTime() {
    var Time = new Date().getHours(); /* Creates a variable that has the current time as a value */
    if (Time <= 17) { /* Checks if the time is before or equal to 5pm */
        document.getElementById('check_time').innerHTML = "How are you doing today?" /* if the time is not before or equal to 5pm, print the string to the element with the 'check_time' id */
    }
    else {
        document.getElementById('check_time').innerHTML = "How are you doing tonight?" /* if the time is not before or equal to 5pm, print the string to the element with the 'check_time' id */
    }
}

function nameLengthFunction() { 
    if (document.getElementById('userName').value.length <=3) {
        document.getElementById('nameResult').innerHTML = 'You have a very short name!' /* Checks amount of characters in the input field and prints a string if it is less than or equal to 3 */
    }
    else if (document.getElementById('userName').value.length >3 && document.getElementById('userName').value.length <=6) {
        document.getElementById('nameResult').innerHTML = 'You have an average length name!' /* Checks amount of characters in the input field and prints a string if it is more than 3 AND less than or equal to 6 */
    }
    else {
        document.getElementById('nameResult').innerHTML = 'You have a long name!' /* Prints a string if both of the other if statements are false */
    }
}