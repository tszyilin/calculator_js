// CALCULATOR PROGRAM

// DOM part
const display = document.getElementById('display');

// Create functions

// Display fucntion
function appendToDisplay(input) {
    display.value = display.value + input;
}

// Clear display function
function clearDisplay(){
    display.value = "";
}

// Calculation function (Use eval function in javascript)
function calculate(){
    // Return the error if the input can't be calculated
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}
