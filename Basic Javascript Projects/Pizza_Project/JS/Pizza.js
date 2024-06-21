// selectedSize is made a global variable so it can be used in getTopping function
var selectedSize;
function getReceipt() {
  // This initializes our string so it can get passed from function to function, growing line by line into a full receipt.
  var text1 = "<h3>You Ordered: </h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  // For loop to check which size is selected and assign a number to the sizeTotal variable
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      selectedSize = sizeArray[i].value;
      text1 = text1 + selectedSize + "<br>";
    }
  }
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 12;
  } else if (selectedSize === "Gigantic Pizza") {
    sizeTotal = 14;
  }
  runningTotal = sizeTotal;
  console.log(selectedSize + " = £" + sizeTotal + ".00");
  console.log("Size text1: " + text1);
  console.log("Subtotal: £" + runningTotal + ".00");
  // These variables will get passed on to each function
  getTopping(runningTotal, text1);
}

// Function for adding toppings to the order
function getTopping(runningTotal, text1) {
  var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");
  // For loop that loops through the toppingArray and checks if the value at each index is checked and then add's the checked values to the selectedTopping and text1 variables
  console.log(selectedSize);
  for (var j = 0; j < toppingArray.length; j++) {
    // Checks selectedSize variable and if no pizza size is selected it will not add any toppings
    if (toppingArray[j].checked && selectedSize !== undefined) {
      selectedTopping.push(toppingArray[j].value);
      console.log("selected topping item: (" + toppingArray[j].value + ")");
      text1 = text1 + toppingArray[j].value + "<br>";
    }
  }
  var toppingCount = selectedTopping.length;
  // If statement that takes 1 from the number stored inside toppingTotal if the value of toppingCount is greater than 1
  if (toppingCount > 1) {
    toppingTotal = toppingCount - 1;
    // Otherwise it makes toppingTotal equal to 0
  } else {
    toppingTotal = 0;
  }
  runningTotal = runningTotal + toppingTotal;
  console.log("Total selected topping items: " + toppingCount);
  console.log(
    toppingCount + "topping - 1 free topping = £" + toppingTotal + ".00"
  );
  console.log("Topping text1: " + text1);
  console.log("Purchase Total: £" + runningTotal + ".00");
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML =
    "<h3>Total: <strong>£" + runningTotal + ".00" + "</strong></h3>";
}
