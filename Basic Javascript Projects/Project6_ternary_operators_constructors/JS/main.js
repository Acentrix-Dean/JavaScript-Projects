function ride_Function() { /* Create function */
    var Height, can_Ride; /*Create variables */
    Height = document.getElementById("Height").value; /* Set value of Height variable to the value of the element with the id 'Height' */
    can_Ride = (Height < 52) ? "You are too short":"You are tall enough"; /* Set can_Ride variable to one of two strings dependant on if the value of the Height variable is less than 52 */
    document.getElementById("Ride").innerHTML = can_Ride + " to ride."; /* Set the innerHTML of the element with an id of 'Ride' to the value of the can_Ride variable */
}

function voterAge() {
    var age = document.getElementById('Age').value;
    var canYouVote = (age >= 18) ? "You are old enough to vote!":"You are not old enough to vote!";
    document.getElementById('canYouVote').innerHTML = canYouVote;
}

function Vehicle(Make, Model, Year, Color) { /* Create a function that accepts 4 values */
    this.Vehicle_Make = Make; /*Use 'this' keyword to assign a value to Vehicle_Make variable where the keyword 'this' will be replace with the object name (see below for example) */
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red") /* Create variable Jack with new instance of the Vehicle object - where for example 'this.Vehicle_Make' will now be 'Jack.Vehicle_Make' in this instance */
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction() { /* Create function to find the element with a specific id and change the innerHTML */
    document.getElementById('Keywords_and_Constructors').innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

/* This code block does the same thing as above but for a new object with new instances of that object */
function Dog(Name, Age, Color, Breed) {
    this.Dog_Name = Name;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
    this.Dog_Breed = Breed;
}

var Peanut = new Dog('Peanut', 3, 'Blue ', 'Long-Haired Chihuahua ')
var Dotty = new Dog('Dotty', 2, 'White and Black ', 'Patterdale Mix ')
var Gus = new Dog('Gus', 4, 'Black', 'Patterdale')

function mySecondFunction() {
    document.getElementById('New_and_This').innerHTML = Peanut.Dog_Name + ' is a ' + Peanut.Dog_Age + " year old " + Peanut.Dog_Color + Peanut.Dog_Breed;
}

/* Nested Function */
function myNestedFunction () {
    document.getElementById('Nested_Function').innerHTML = math();
    function math() {
        var numOne = 2; /* Create variable */
        var numTwo= 5; /* Create variable */
        function multiply () { /* Nested function */
            result = numOne * numTwo; 
        }
        multiply(); /* Invoke the nested function */
        return result; /*Return the new value for result variable to the 'math()' function */
    }
}