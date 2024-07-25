//                                       1. Numbers, Strings and Operators

//console.log(0.5444+4)

//gives .5443999999999996 from float + int(when written like this),,, int is from 4 to 7

//console.log(0.1+0.2);
//0.+0.3 gives 0.30000000000000004

//The reason for this strange behaviour is due to the way JavaScript handles floating-point arithmetic. JavaScript, like many
// programming languages, uses the IEEE 754 standard for floating-point arithmetic, which can lead to precision issues

//Floating-point numbers cannot always represent exact values due to their binary format, leading to small precision errors in calculations

console.log(5/2)  //2.5

console.log(1 << 2)  //4
//It shifts all bits to the left by the number specifies on the right side(here,2)

//This operation is equivalent to multiplying the left operand by 2 raised to the power of the right operand. 
//So 1 << 2 is the same as 1 * (2^2) = 1 * 4 = 4.
console.log(3<<4)  //should be equal to 48,,it is

//Right shift
console.log(48>>4)  //3
//This operation is equivalent to integer division by 2 raised to the power of the right operand. 
//So 48 >> 4 is the same as Math.floor(48 / (2^4)) = Math.floor(48 / 16) = 3.
//therefore 44>>4 is 2(Math.floor(44/16))


// There are three special not-a-real-number values:
Infinity; // result of e.g. 1/0
-Infinity; // result of e.g. -1/0
NaN; // result of e.g. 0/0, stands for 'Not a Number'
console.log(1/0)

//== compares values after type conversion 
// === compares value without type conversion

// const num=3;
// const string="1, 2, ";
// result=string + num;  //bad practise even though it will be trated as a global variable,always use let,const,var for naming variables
// console.log(result);

//Here,type conversion happened from number to string

const array=["World","!"];
const string = "Hello ";
const result=string + array;
console.log(result);        //Hello World,!

//Here,the array elements are converted into string by .toString method,,the toString method joins array elements with commas
//so,["World","!"].tostring results in "World,!",,then "Hello "+"World,!"="Hello World,!"

// ...which can result in some weird behaviour...
13 + !0; // 14
"13" + !0; // '13true'
console.log("13" + !0)
//In first case, !0 is converted to !false,which is then converted to true,then converted to 1 to become 14
//In second case,!0 is converted to !false,which is then converted to true,then true,'stype conversion happens from what t o string

//String Context: When using the + operator with a string, JavaScript converts other types to strings and performs concatenation.

null == undefined; // = true
null === undefined; // = false

console.log("Hello World".substring(5,3));  //canges it to 3,5
//here second index is ending position(excluded) and in cpp second index is length

console.log(Boolean(false));    // false
console.log(Boolean(0));        // false
console.log(Boolean(-0));       // false
console.log(Boolean(0n));       // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

//everything else is truthy like
// "0" - A string containing a single zero
// " " - A string containing only whitespace
// [] - An empty array
// {} - An empty object
// function(){} - An "empty" function

// Note that 0 is falsy and "0" is truthy, even though 0 == "0".