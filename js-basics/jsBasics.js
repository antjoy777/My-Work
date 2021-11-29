// Variables

let name = 'Anthony';


// Variables can not be a reserve keyword like "let" 
// Variables should be meaningful
// Variables can not start with a number (1name)
// Variables can not contain a space or a hyphen (-)
// Variables are case sensitive and shound be typed in camelCase
// Easch variable should be declared on a seperate line as a best practice

let firstName = 'Anthony'
let lastName = 'Lester'

// Constaints

const intrestRate = 0.3;
console.log (intrestRate);

// If you don't need to reassign a variable you should use const otherwise use let

// Primitive / value types

let myName = 'Anthony'; //String Literal value type
let myAge = 30; //Number Literal value type
let isAproved = true; let isNotAproved = false; //Boolean Literal value type
let middleName = null; //Null values (used to clear the value of a variable)
let me; let you = undefined; // Undefined values

//Referance Type values

// Objects

 let person = {
     name: 'Anthony',
     age: 52
 }

 // Changing properties of an object

 person.name = 'John'; //Dot Notation (cleaner and easier to use)
 
 person['name'] = 'Mary'; //Bracket Notation

 console.log(person.name);

 //Arrays

 let selectedColor1 = []; //Array literal value type (This is an empty array.)

 let selectedColor = ['red', 'blue'];
 selectedColor[2] = 1
 console.log (selectedColor);

 //An array is viewed as an object by js


 //Functions

 // Performing a task type of function

 function greet(name, lastName){ //<--"name" is a variable called a parameter (paramiters are only meaningfull inside of the function)
     //the part inside of the {} is the body of the function
     console.log('Hello ' + name + " " + lastName);
 }

 greet('Anthony', 'Lester'); //<---calling the function. Anthony and Lester are "arguments" for the parameters name / lastName and will be the value applied for the parameters.
 greet('Mary', 'Smith');

 // Console will log "Hello Anthony Lester" and "Hello Mary Smith"

// Calculating a value type of function

function square(number) {
  return number * number;  
}

console.log(square(5));//<-- returns 25 (5*5=25)
// There are 2 function calls in this fuction, "square of 2" and "console.log"