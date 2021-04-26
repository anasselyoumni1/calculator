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

function operate (numberOne, numberTwo, operator) {
    let counter = 0;
    let num1 = prompt("Eerste getal");
    operator = prompt("vul je operator in");
    let num2 = prompt("Tweede getal");

    numberOne = parseInt(num1);
    numberTwo = parseInt(num2);

    if (operator == "/"){ 
        console.log( divide(numberOne, numberTwo));
    } else if (operator == "+"){ 
        console.log( add(numberOne, numberTwo));
    } else if (operator == "-") { 
        console.log( subtract(numberOne, numberTwo));
    } else if (operator == "*" ) { 
        console.log( multiply(numberOne, numberTwo));
    } else {
        console.log("We hebben de divider niet kunnen vinden");
    }
};

operate();



// for (let i = 0; i < 10; i++) {
//     const button = document.createElement('button'); 
    
//     const div = document.createElement("div");
//     document.body.appendChild(div);
//     div.appendChild(button);
//     button.setAttribute("id", [i])
//     button.innerHTML = [i];
// }