var sentenceOne = 'I made '; /* Create global variable */
var sentenceTwo = 'these strings '; /* Create global variable */
var sentenceThree = 'into '; /* Create global variable */
var sentenceFour = 'a full sentence.'; /* Create global variable */
var paraStart = 'Below is the position for the '; /* Create global variable */
var paraMid = 'first '; /* Create global variable */
var paraEnd = 'match of into:'; /* Create global variable */
var fullSentence = sentenceOne.concat(sentenceTwo, sentenceThree, sentenceFour); /* Concatonate the values of the variables and save into a new variable */
var sliced = fullSentence.slice(13,19); /* slice the variable and store the value in a new variable */
var capitalLetters = paraMid.toUpperCase(); /* Changes the string 'first ' to uppercase */
var fullSentenceTwo = paraStart.concat(capitalLetters, paraEnd); /* Concatenante the three variable values together and save it into a new variable */ 
var searched = fullSentence.search('into'); /* Finds the first iteration of the value 'into' */
var num = 26.193910238329; /* Create global variable */
var numPrecise = num.toPrecision(5); /*Format the number stored inside the num variable to a specified length of 5 */
var convertNum = numPrecise.toString(); /* Covert the number value inside the variable into a string */
var fixedNum = num.toFixed(2); /* Covert the number value inside the variable into a string with 2 decimal places */
var valueType = paraMid.valueOf(); /* Use valueOf method to return the primitive value of the string */

window.onload = function loadupScript() { /* Creates a function that runs when the window is loaded */
    document.getElementById('full_sentence').innerHTML = fullSentence; /* Prints concatenated value to innerhtml */
    document.getElementById('sliced').innerHTML = sliced; /* Prints sliced value to innerhtml */
    document.getElementById('upper_cased').innerHTML = fullSentenceTwo; /* Prints the string with the uppercase letters to innerHTML */
    document.getElementById('search_position').innerHTML = searched; /* Prints the position of the first iteration of 'into' in the string to innerHTML */
    document.getElementById('number_to_string').innerHTML = convertNum; /* Prints the converted and precise number as a string to the innerHTML */
    document.getElementById('fixed_number').innerHTML = fixedNum; /* Prints the number as a string with a specified number of decimals to the innerHTML */
    document.getElementById('value_of').innerHTML = valueType; /* Prints the primitive value of the string */
}