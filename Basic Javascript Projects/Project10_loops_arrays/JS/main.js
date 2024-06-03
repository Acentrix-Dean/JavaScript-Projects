var str = 'Hello';
var strLength = str.length;
var counter = 1;
var y;
var array = ['Chihuahua', 'Pug', 'Daschund', 'Border Collie', 'Labrador', 'Yorkshire Terrier']

/* While loop function */
function Call_Loop() {
    while (counter <= 10) {
        document.getElementById('Loop').innerHTML += '<br>' + counter 
        counter++;
    }
} 

/* String length */
document.getElementById('string_length').innerHTML = 'The length of the saved string is: ' + strLength;

/* For loop */
function forLoop() {
    for (y = 0; y < array.length; y++) {
        document.getElementById('List_of_Dogs').innerHTML += array[y] + '<br>';
        let blockScope = 'I\'m a blockscope variable';
        document.getElementById('string_let').innerHTML = blockScope;
    }
}

/* Array - getElementById */

function array_Function() {
    var childrenNames = [];
    childrenNames[0] = 'Jonathan';
    childrenNames[1] = 'Michael';
    childrenNames[2] = 'Buster';
    childrenNames[3] = 'Clint';
    childrenNames[4] = 'The Beast';
    document.getElementById('Array').innerHTML = 'The name of the child at index 4 is ' + childrenNames[4] + '.';
}

/* Constants */
function constant_function() {
    const character = {name:'Donald', height:'190cm', type:'Human'};
    document.getElementById('Constant').innerHTML = 'This character is ' + character.height + ' tall.';
}

/* Return */
function returnPi() {
    return Math.PI;
  }
document.getElementById('return').innerHTML = returnPi();

/* Let Object */
let birdObject = {
    size: '30cm',
    talons: 'sharp',
    beak: 'pointy',
    feather_color: 'grey',
    description : function() {
        return 'The bird is a ' + this.size + ' long ' + this.feather_color + ' bird with a' + this.beak + ' beak and very ' + this.talons + ' talons.';
    }
};

document.getElementById('object').innerHTML = birdObject.description();

/* Break statement */
for (i = 1; i <= 5; i++) {
    if (i === 4) { break; }
    document.getElementById('break').innerHTML += i + '<br>';
  }

/* Continue statement */
for (i = 1; i <= 5; i++) {
    if (i === 2) { continue; }
    document.getElementById('continue').innerHTML += i + '<br>';
  }