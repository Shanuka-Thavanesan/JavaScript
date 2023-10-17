//Day1 Excersise
// Welcome to learn JavaScript
/*
  Comments can make code readable,
  easy to reuse, and informative
*/

// variable.js

// String 
let myString = "hi, I am Shanuka";

// Boolean 
let myBoolean = true;

// Undefined 
let myUndefined = undefined;

// Null 
let myNull = null;

// Printing the variables
console.log( myString);
console.log( myBoolean);
console.log( myUndefined);
console.log(typeof(null));

// datatypes

// Declare variables with different data types
let variable1 = "Hello";
let variable2 = 123;
let variable3 = true;
let variable4 = undefined;
let variable5 = null;
let variable6 = [1, 2, 3];
let variable7 = { key: "value" };
let variable8 = function () {
  return "This is a function";
};

// Check the data types using typeof operator
console.log("variable1:", typeof variable1);
console.log(" variable2:", typeof variable2);
console.log(" variable3:", typeof variable3);
console.log(" variable4:", typeof variable4);
console.log("variable5:", typeof variable5);
console.log("variable6:", typeof variable6);
console.log(" variable7:", typeof variable7);
console.log("variable8:", typeof variable8);

var v1;
var v2;
let v3;
let v4;

console.log(v1,typeof v1);
console.log(v2,typeof v2);
console.log(v3,typeof v3);
console.log(v4,typeof v4);


var vari1 = 5;
var vari2= "Hello";
let vari3= true;
let vari4 = [1, 2, 3];

console.log(vari1,typeof vari1);
console.log(vari2, typeof vari2);
console.log(vari3, typeof vari3);
console.log(vari4, typeof vari4);

let firstName = "Shanuka";
let lastName = "Thavanesan";
let maritalStatus = "single";
let country = "Srilanka";
let age = 21;

console.log(firstName);
console.log(lastName);
console.log(maritalStatus);
console.log(country);
console.log(age);

let fName = "Shanuka", lName = "Thavanesan", maStatus = "Single", coun = "Srilanka", yrs = 21;

console.log(fName,lName,maStatus,coun, yrs);

let myAge = 21;
let yourAge = 24;

console.log("My age is:", myAge);
console.log("Your age is:", yourAge);

let challenge = 'learn Javascript';
console.log(challenge);

let learn = 'learn Javascript';
console.log(learn.length);

let b="javascript";
let c="javascript".toUpperCase();
let d="APPLE". toLowerCase();

console.log(c);
console.log(d);

let u = 'learn Javascript';
let firstWord = u.substr(0, challenge.indexOf(' '));

console.log(firstWord);

let cha = 'learn Javascript';
let first = cha.substring(0, cha.indexOf(' '));

console.log(first);

let r="hello world";
let r1=r.slice(1);
console.log(r1);

let ff= 'learn Javascript';

if (ff.includes('Script')) {
    console.log('The string contains the word "Script".');
} else {
    console.log('The string does not contain the word "Script".');
}

let e = 'learn Javascript';
let array = e.split(' ');

console.log(array);


let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let company = companies.split(', ');

console.log(company);

let l = 'learn Javascript';
let newChallenge = l.replace('learn Javascript', '30 Days Of Python');

console.log(newChallenge);

let study = 'learn Javascript';
let character = study.charAt(15);

console.log(character);

let code = 'learn Javascript';
let charCode = code.charCodeAt(5);

console.log(charCode);

let index = 'learn Javascript';
let position = index.indexOf('a');

console.log(position);

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let position1 = sentence.indexOf('because');

console.log(position1);

let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let position3 = sentence2.lastIndexOf('because');

console.log(position3);

let sen = 'You cannot end a sentence with because because because is a conjunction';
let position4 = sen.search('because');

console.log(position4);

let str = ' learn Javascript ';
let trimmedStr = str.trim();

console.log(trimmedStr);

let str1 = 'learn Javascript';
let result = str1.endsWith('Script');

console.log(result);

let str2 = 'learn Javascript';
let matches = str2.match(/a/g);

console.log(matches);

let st = '30 Days of';
let st2 = 'JavaScript';
let mergedString = st.concat(' ', st2);

console.log(mergedString);

let s = 'learn Javascript';
let repeatedString = s.repeat(2);

console.log(repeatedString);






























