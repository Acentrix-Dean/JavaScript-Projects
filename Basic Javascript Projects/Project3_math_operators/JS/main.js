function mathFunction() {
    var sum = 3 + 7; /* Create variable */
    var result = '3 + 7 = ' + sum; /* Create variable */
    document.getElementById('Math').innerHTML = result; /* Make innerHTML of element with 'Math' id equal to result variable */
}

var sumResult = (((5 + 3) - 2) * 4) / 2; /* Create variable */

document.write('5 plus 3, subtracted by 2, multiplied by 4 and then divided by 2 = ' + sumResult + '<br>'); /* Print string + result of variable to web page */

var remainder = 30 % 7; /* Create variable */
document.write('When you divide 30 by 7 you are left with a remainder of ' + remainder + '<br>'); /* Print string + result of variable to web page */

document.write(-sumResult + '<br>'); /* Print negative of variable to web page */

sumResult++; /* Increment variable */
document.write(sumResult + '<br>'); /* Print variable to webpage */
sumResult--; /* Decrease variable */
sumResult--; /* Decrease variable */
document.write(sumResult + '<br>') /* Print variable to webpage */

window.alert(Math.random()); /* An alert that displays a random number between 0 and 1 */

window.onload = function pi() {
    document.getElementById('Pi').innerHTML = Math.PI; /* Change innerHTML of element with id of 'Pi' to PI number */
}