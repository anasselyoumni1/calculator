let firstNumber = document.querySelector(".inputField"); 
let secondNumber = document.querySelector(".inputField");
const equalsButton = document.querySelector(".enter");

//buttons
const addButton = document.querySelector(".add");
const minButton = document.querySelector(".subtract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const clearButton = document.querySelector(".clear");

let totalNumbers = [];
console.log(totalNumbers);

//button functions
addButton.addEventListener("click", () => {
    number();
    cleared();
    totalNumbers.push(addButton.dataset.operator);
});

minButton.addEventListener("click", () => {
    number();
    cleared();
    totalNumbers.push(minButton.dataset.operator);
});

divideButton.addEventListener("click", () => {
    number();
    cleared();
    totalNumbers.push(divideButton.dataset.operator);
});

multiplyButton.addEventListener("click", () => {
    number();
    cleared();
    totalNumbers.push(multiplyButton.dataset.operator);
});

clearButton.addEventListener("click", () => {
    totalNumbers.length = 0;
});


function number (){
    // const getal = totalNumbers.push(number);
    if(firstNumber.value == ""){
        return console.log("Je hebt nog niks ingevuld");
    }else{
    return totalNumbers.push(firstNumber.value);
    }
}


//operator functions
function add (x, y) { 
 return x + y   
}

function subtract (x, y) { 
    return x - y
}

function multiply (x, y) { 
    return x * y
}

function divide (x, y ) { 
    return x / y
}


//De operator zelf
function operate (numberOne, numberTwo, operator) {
    // console.log(totalNumbers);
    if (operator == "/"){ 
        console.log( divide(numberOne, numberTwo));
    } else if (operator == "+"){ 
        console.log( add(numberOne, numberTwo));
    } else if (operator == "-") { 
        console.log( subtract(numberOne, numberTwo));
    } else if (operator == "*" ) { 
        console.log( multiply(numberOne, numberTwo));
    } else {
        console.log("We hebben de operator niet kunnen vinden");
    }
};

function cleared() {
    firstNumber.value = 0;
}

equalsButton.addEventListener('click', () => {
    totalNumbers.push(secondNumber.value);
    operate(parseInt(totalNumbers[0]), parseInt(totalNumbers[2]), totalNumbers[1]);
});


