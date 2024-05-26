var number = 3; /* Create variable */
var string = "7"; /* Create variable */
document.write(typeof number + '<br>'); /* Print type of data of variable to web page */
document.write(number + string); /* Print number variable concatonated with string variable */

function notNumber () {
    document.getElementById('testOne').innerHTML = '\'Hello\' is not a number: ' + isNaN('Hello!'); /* Print string + boolean regarding if value is a number */
    document.getElementById('testTwo').innerHTML = '\'7\' is not a number: ' + isNaN('7'); /* Print string + boolean regarding if value is a number */
}

window.onload = function negInfinity() {
    document.getElementById('negInfinity').innerHTML = -3E310; /* Print negative infinity */
    document.getElementById('posInfinity').innerHTML = 3E310; /* Print positive infinity */
}

var one = 3 > 2; /* Create variable */
var zero = 7 > 21; /* Create variable */
document.write('<br>' + one + '<br>'); /* Print variable */
document.write(zero); /* Print variable */

console.log('Hello, world!'); /* Print string to console */
console.log(zero); /* Print variable to console */

document.write('<br>' + (7 == 7)); /* Print comparison result (boolean) to webpage */
document.write ('<br>' + (5 == 1376521)); /* -- */
document.write ('<br>' + (5 === 5)); /* -- */
document.write ('<br>' + (5 === 'Twenty One')); /* -- */
document.write ('<br>' + (5 === '5')); /* -- */
document.write ('<br>' + (5 === 6)); /* -- */
document.write ('<br>' + (5 >= 5 && 10 == 10)); /* -- */
document.write ('<br>' + (5 >= 5 && 10 == 11)); /* -- */
document.write ('<br>' + (5 >= 5 || 10 == 59)); /* -- */
document.write ('<br>' + (5 >= 6 || 10 == 59)); /* -- */
document.write ('<br>' + !(5 > 10)); /* -- */
document.write ('<br>' + !(5 > 4)); /* Print comparison result (boolean) to webpage */