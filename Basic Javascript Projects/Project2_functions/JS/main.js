function My_First_Function() { //Create and name the function
    var str = "This button is text!"; //create a variable and set it's value
    str += " Can you read it?" //concatenate a new string with our variable 
    document.getElementById("Button_Text").innerHTML = str; //find the element with ID of "Button_Text" and change the html to the value of our variable
}