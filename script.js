//Create variable to hold display value, create variable of display area and populate.
let toShow = 0;
let displayValue;
let displayArea = document.getElementById('result-display');
let dataType = document.querySelectorAll('[data-type]');
let operator = "";
let firstNumber;
let secondNumber;
let operatorPressed = false;
let secondNumberCounter = false;
let firstNumberCounter = true;
let buttonNumber;
let decimalCounter;
let selectedKey;
let type;
let numberCounter = 0;
displayArea.textContent = 0;
const buttonGrid = document.querySelector('.button-grid');

//Basic math functions
add = (firstNumber, secondNumber) => firstNumber + secondNumber;
subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

//Take an operator and two numbers and call a math function
operate = (operator, firstNumber, secondNumber) => {
    if (operatorPressed === false) {
     } else {
        operatorPressed = false;
         console.log(operatorPressed);
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    secondNumberCounter = false;
  toShow = operator(firstNumber, secondNumber);
  return Math.round(toShow * 100) / 100;
}
};

//Update display on keydown event
addEventListener('keydown', (e) => {
    pressedKey = event.key;
    keyDownOperatorMapping(e);
});

let keyDownOperatorMapping = (e) => {
if (pressedKey === "+" || pressedKey === "-" || pressedKey === "*" || pressedKey === "Enter" || pressedKey === "Backspace" || pressedKey === "/") {
selectedKey = String(pressedKey);
if (selectedKey != "Enter") {
operatorPressed = true;
} 
type = "nonNumberFunction";
masterFunction(e);
} else if (pressedKey === "Shift") {
}
else if (pressedKey === ".") {
    addDecimal(e);
}
else {
selectedKey = Number(pressedKey);
type = "number";
masterFunction(e);
}
};

//Update display with button clicked
buttonGrid.addEventListener('click', e => {
pressedKey = e.target.id;
type = e.target.dataset.type;
if (type === "number") {
selectedKey = Number(pressedKey);
} else {
selectedKey = String(pressedKey);
if (selectedKey != "Enter") {
    operatorPressed = true;
}
}
    masterFunction(e);
});

//watch debugging video to see what's going on


//Fire relevant function depending on the button pressed etc
let masterFunction = (e) => {
    if (operatorPressed === false && firstNumberCounter === true && type != "nonNumberFunction" && selectedKey != "AC" && selectedKey != "Backspace" && selectedKey != "Enter") {
       console.log("one");
        firstNumberPicker(e);
    } else if (type === "nonNumberFunction" && type != "number" && selectedKey != "Enter" && selectedKey != "AC" && selectedKey != "Backspace") {
        console.log("two");
        chooseOperator(e);
    } else if (operatorPressed === true && firstNumberCounter === true && selectedKey != "AC" && selectedKey != "Backspace" && selectedKey != "Enter") {
        console.log("three");
        secondNumberPicker(e);
    }  else if (selectedKey === "Backspace") {
        console.log("four");
        backFunction(e);
    } else if (selectedKey === "Enter") {
        if (operatorPressed === false) {
        } else {
        console.log("five");
        console.log(operatorPressed);
        calculate(e);
    };
    } else if (selectedKey === "AC")  {
        console.log("six");
        reset(e);
    } 
}; 


// Update display with button number
let firstNumberPicker = (e) => {
    if (selectedKey === "decimal") 
    {
        addDecimal(e);
    } else if (type != "nonNumberFunction") {
        ++numberCounter;
        if (numberCounter === 1) {
            backFunction(e);
        }
    displayValue = selectedKey;
    displayArea.textContent += displayValue;
    firstNumberCounter = true;
    }
  };

// Choose operator
let chooseOperator = (e) => {
    decimalCounter = 0;
    operator = selectedKey;
    firstNumber = Number(displayArea.innerText);
  };

// Update screen on second number being entered
let secondNumberPicker = (e) => {
    if (selectedKey === "decimal" && decimalCounter === 0) 
    {
        addDecimal(e);
    } else if (secondNumberCounter === false) {
      displayValue = selectedKey;
      displayArea.textContent = displayValue;
    secondNumber = displayArea.textContent;
      secondNumberCounter = true;
    }
    else {
      displayValue = selectedKey;
      displayArea.textContent += displayValue;
     secondNumber = displayArea.textContent;
      secondNumberCounter = true;
  }
};

// Add decimal place
let addDecimal = (e) => {
      ++decimalCounter;
      displayValue = ".";
      displayArea.textContent += displayValue;
    };

// Remove last character entered
let backFunction = (e) => {
        displayArea.textContent = displayArea.textContent.substring(0, 
            displayArea.textContent.length - 1);
    };

// Calculate the function
let calculate = (e) => {
  if (selectedKey === "Enter" && secondNumber === 0) {
    displayArea.textContent = "OH HELL NO!";
  } else if (selectedKey === "Enter") {
    decimalCounter = 0;
    if (operator === "+") {
    operator = "add"
    } else if (operator === "-") {
    operator = "subtract"
    } else if (operator === "/") {
    operator = "divide"
    } else if (operator === "*") {
        operator = "multiply"
    }
    switch (operator) {
      case "add":
        return firstNumber = displayArea.textContent = operate(add, firstNumber, secondNumber);
      case "multiply":
        return firstNumber = displayArea.textContent = operate(multiply, firstNumber, secondNumber);
      case "divide":
        return firstNumber = displayArea.textContent = operate(divide, firstNumber, secondNumber);
      case "subtract":
        return firstNumber = displayArea.textContent = operate(subtract, firstNumber, secondNumber); 
    }
  }
};

// Reset the screen
  let reset = (e) => {
    secondNumberCounter = false;
    operatorPressed = false;
    firstNumber = 0;
    secondNumber = 0;
    buttonNumber = 0;
    decimalCounter = 0;
    numberCounter = 0;
    displayArea.textContent = 0;
  };