//Creates a calulating class to store information
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {//<---Defines where to place the display text for the calculator
        this.previousOperandTextElement = previousOperandTextElement//<-- Sets varialbe for the previous display element in the class.
        this.currentOperandTextElement = currentOperandTextElement//<-- Sets varialbe for the current display element in the class.
        this.clear()//<-- Calls clear function as default starting display.
    }




//**********************Defining The Functions of the Calculator***********************

        //Clears the screen.
        clear() { 
            this.currentOperand = ''//<-- Sets the current operand to an empty string.
            this.previousOperand = ''//<-- Sets the previous operand to an empty string.
            this.operation = undefined//<-- Resets the operation as undefined.
        }

        //Removes a single number from the display.
        delete(){
            this.currentOperand = this.currentOperand.toString().slice(0, -1)//<-- Converts the current operand to a string and then slices from the first in the string to the first fron the last and saves it in the "currentOperand" variable, thus effectivly removing the last number.
        }

        //Adds a number to the screen.
        appendNumber(number){
            if (number === '.' && this.currentOperand.includes('.')) return// <-- Lets only one "." apear on the screen at once. Logic is (If the number is "." or there is already a "." then stop the function.)
            this.currentOperand = this.currentOperand.toString() + number.toString()//<-- Changes the numbers to strings and adds a new one to the right of previous one.
        }
        
        //Selects an operation.
        chooseOperation(operation) {
            if (this.currentOperand === '') return //<-- Prevents a second click of the operation buttons from clearing the screen. Logic is (If the current operand is empty then stop the fuction.)
            if (this.previousOperand !== '') {
            this.compute()//<--If there is an operand in the previous display then compute it.
            }
            this.operation = operation //<-- Lets the calculator know that the operation selected is the operation to use.
            this.previousOperand = this.currentOperand//<--sets the previous operand as the current operand.
            this.currentOperand = ''//<-- Clears out the current opperand and moves it to the previous operand display.
        }

        //Computes a single value.
        compute() { 
            let computation//<-- The result of the compute function.
            const prev = parseFloat(this.previousOperand)//<-- Converts the previous string to a number.
            const current = parseFloat(this.currentOperand)//<-- Converts the current string to a number.
            if (isNaN(prev) || isNaN(current)) return//<-- Causes code not to run if no secound number is selected before clicking equal. Logic is (If there is no previous value or if there is no current value then stop the fuction.)
            switch (this.operation) {//<-- Switch statment to define multipule "if" statments as "cases".)
                case '+'://<--If "+" then...
                    computation = prev + current//<-- ...add previous to current...
                    break//<-- ...then leave the switch statement.
                case '-'://<--If "-" then...
                    computation = prev - current//<-- ...subtract current from previous...
                    break//<-- ...then leave the switch statement.
                case 'x'://<--If "x" then...
                    computation = prev * current//<-- ...mutiply previous and current...
                    break//<-- ...then leave the switch statement.
                case '÷'://<--If "÷" then...
                    computation = prev / current//<-- ...divide previous from current...
                    break//<-- ...then leave the switch statement.
                default:
                    return//<-- If no other cases are executed, then stop the fuction.
            }
            this.currentOperand = computation//<-- Sets the current operand to the result of the computation.
            this.operation = undefined//<-- Sets the operation to undefined.
            this.previousOperand = ''//<-- Sets the previous operand to an empty string.
        }

        //Adds commas to long number strings and defines integer vs decimal numbers.
        getDisplayNumber(number) {//<-- Helper function added to "updateDisplay" bellow.
            const stringNumber = number.toString()//<-- Converts numbers to strings numbers.
            const integerDigits = parseFloat(stringNumber.split('.')[0])//<-- Converst the string to a floating point number and splits the number into a two part array on the decimal point, then saves the first part of the array as the integer digits.
            const decimalDigits = stringNumber.split('.')[1]//<-- Splits the string number into a two part array on the decimal point, then saves the secound part of the array as the decimal digits.
            let integerDisplay//<-- Varialble for the integer disply.
            if (isNaN(integerDigits)) {//<-- If the interger digits is not a number...
                integerDisplay  = ''//<-- ...then show nothing on the display...
            } else{
                    integerDisplay = integerDigits.toLocaleString('en', {//<-- ...otherwise set the disply of integer digits to a locale string of english (displaying commas after every third digit).
                    maximumFractionDigits: 0 })//<-- Makes sure there are never any decimal places after the locale string of integers.
                   }
            if (decimalDigits != null) {//<-- If there are decimal digits...
                return `${integerDisplay}.${decimalDigits}`//<-- ...then return the integer numbers followed by a decimal point followed by the decimal digits on the display...
            } else{//<-- ...otherwise if there are no decimal digits...
                return integerDisplay//<-- ...just return the integer digits on the display.
            }
        }

        //Updates the values inside of the display.
        updateDisplay() {
            this.currentOperandTextElement.innerText = 
            this.getDisplayNumber(this.currentOperand)
            if (this.operation != null) {//<-- If the operation is not equal to "null" then...
                this.previousOperandTextElement.innerText = //<-- ...display the previous operand text of...
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`//<--- ...the previuos operand plus the current operand,...
            }else{
                this.previousOperandTextElement.innerText = ''//<-- ... otherwise display nothing.
            }
        }
}






//*****************************Creating the Constant Variables**************************


//Defines the constant variables of the buttons and text elements.
const numberButtons = document.querySelectorAll('[data-number]')//<-- Queries HTML for number buttons.
const operationButtons = document.querySelectorAll('[data-operation]')//<-- Queries HTML for operation buttons.
const equalsButton = document.querySelector('[data-equals]')//<-- Queries HTML for equals button.
const allClearButton = document.querySelector('[data-all-clear]')//<-- Queries HTML for all-clear button.
const deleteButton = document.querySelector('[data-delete]')//<-- Queries HTML for delete button.
const previousOperandTextElement = document.querySelector('[data-previous-operand]')//<-- Queries HTML for previous operand text field. 
const currentOperandTextElement = document.querySelector('[data-current-operand]')//<-- Queries HTML for current operand text field.  




//***********************Creating the Calulator Object***********************************


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)//<--Defines the calculator class.

// Adds number buttons fuctionality.
numberButtons.forEach(button => { //<--Apllies bellow to all of the number buttons.
   button.addEventListener('click', () => {//<-- Listens for click of the number buttons.
       calculator.appendNumber(button.innerText)//<-- Selects whatever number is inside the button.
       calculator.updateDisplay()//<-- Calls "updateDisplay" function to update the display.
   }) 
})

// Adds opperation buttons fuctionality.
operationButtons.forEach(button => {//<--Apllies bellow to all of the operation buttons.
    button.addEventListener('click', () => {//<-- Listens for click of the operation buttons.
        calculator.chooseOperation(button.innerText)//<-- Selects whatever operation is inside the button.
        calculator.updateDisplay()//<-- Calls the "updateDisplay" function to update the display. 
    }) 
 })
// Adds equals button fuctionality.
equalsButton.addEventListener('click', button => {//<-- Listens for click of the "=" button.
   calculator.compute()//<-- Calls the "compute" function to get the computed value. 
   calculator.updateDisplay()//<-- Calls "updateDisplay" function to update the display.
})


allClearButton.addEventListener('click', button => {//<-- Listens for click of the "AC" button.
    calculator.clear()//<-- Calls the "clear" function to clear the screen. 
    calculator.updateDisplay()//<-- Calls "updateDisplay" function to update the display.
 })

 deleteButton.addEventListener('click', button => {//<-- Listens for click of the "DEL" button.
    calculator.delete()//<-- Calls the delete function.
    calculator.updateDisplay()//<-- Calls the "updateDisplay" function to update the display.
 })
