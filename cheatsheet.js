// javascript basics cheatsheet
//variables
var num1 = 200;
var num2 = 40;
var result = num1 + num2;

console.log(num1 + num2);
console.log(result);

//debugging(alerts, comments, the console)

alert("Hello Everyone");

//different data types:

//String - "Hello Everyone"
//Number - 5, 5.5, 1000 (all numbers in JS are floats)
//Boolean - true, false
//Undefined - (no value)

//Arrays:
 //Arrays are used to hold a collection of data, of any data type. This one is full of strings:
  ["Campbell", "Resham Sharma", "Andy", "Pink"];

 //They can hold multiple data types:
  [15, 25, 32, 81, 64, "dolphin"];

 //Arrays can also be stored in variables:
var class_names = ["Nina", "Gillian", "Jason", "Dawn"];
//the first item always has an index of 0.

//Arrayception:
// declare the first array
var Honda = ["CRV", "Accord"];
// declare the second array
var Nissan = ["Altima", "Sentra"];
// declare a third array that contains the first
// and second array
//var cars = [honda, nisaan];
//This is a multi-dimensional array

//To access the items nested inside of a multi-dimensional array,
//you'll use this syntax:
// declare your mult-dimensional array
var cars = [ ["Honda", "Crv"], ["Altima", "Sentra"] ];
// access the first array inside
// then the first item inside that array
console.log(cars[0][0]);
// access the first array inside
// then the first item inside that array
console.log(cars[1][0]);

//functions:
//#1
function randomName(numberOne, anotherNumber){
  return numberOne + 25 + anotherNumber;
}
console.log(randomName(4, 14));
//#2
function alertName(somePersonsName){
  return alert(somePersonsName);
}
alertName("Ronald");
//#3
function anyName(num3, num4){
	return num3 + 12 + num4;
}
console.log(anyName(8, 11));

