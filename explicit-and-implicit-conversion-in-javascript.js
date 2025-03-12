/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let num = 2;
let strNum = String(num); //converts number to string
let result = ("5 - " + strNum); //converts to show result as a string
console.log("The result is: " + result);


let isValid = Boolean(false); //removes quotation marks to prevent reading "false" as truthy
if (isValid) {
    console.log("This is valid!");
};

let age = "25";
let numAge = Number(age);  //converts age to a number value
let totalAge = numAge + 5;  //uses numAge instead of age so it will calculate
console.log("Total Age: " + totalAge);

let earned;
if (Boolean(earned)) {  //example of implicit type conversion / boolean -- until earned is defined patron will be prompted to ask how to earn points.
  console.log("Good job earning library points!");
} else {
  console.log("Ask a librarian how you can start earning library points!");
};


let numberOne = 20;
let numberTwo = 25;
console.log (String(numberOne) + String(numberTwo));  // example of explicit conversion two numbers into a string of text