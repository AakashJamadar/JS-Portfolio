
// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this when using Allman style.
// function myFunction(){
//     return // <- semicolon automatically inserted here
//     {thisIsAn: 'object literal'};
// }
// console.log(myFunction()); // = undefined

//this function returns undefined because the automatic semicolon insertion(asi) of js automatically inserts the ; at the end of the 
//return statement if it is followed by a new line
//In Allman style,we use open braces on the next line,at that time we need to be careful as it can cause to asi at the end of return line
//To return an object literal, the opening brace { must be on the same line as the return statement:


// JavaScript functions are first class objects, so they can be reassigned to
// different variable names and passed to other functions as arguments

// function sayHello(){
//     console.log("Hello world!");
//     //this code will be called in 3 seconds time
// }

//setTimeout(sayHello,3000);
// Note: setTimeout isn't part of the JS language, but is provided by browsers
// and Node.js.

// Another function provided by browsers is setInterval

//setInterval(sayHello,1000);

//function objects need not be declared with a name,you can write an anonymous function directly into the argument of another function

setTimeout(function(){
    console.log("Hello");
},3000);


// JavaScript has function scope; functions get their own scope but other blocks
// do not.
if (true){
    var i = 5;
}
i; // = 5 - not undefined as you'd expect in a block-scoped language

//var is function scoped in js,that is it cannot be accessed outside the function but it is not block scope making it accessible outside 
//any code block like if else statements,loops
//let and const are block scoped,they are inaccessible outside the block({})
//var decalred outside th function becomes global scoped
//but if let,cosnt are declared outside the block,they are treated as not completely global variables because they are accessible 
//inside other functions but not as properties of global object(i,e not completely global)

//      Immediately Invoked Function Definition(IIFE)

//creates new scope immediately,,, and ensures the variables are entirely isolated,,, also providing immediate execution,,, and
//encapsulation functionality

//      why not use normal functions as they provide local scope too
// they do so when they ae explicitly invoked(called)

(function(){
    console.log("I am IIFE function");
}());
//the () present at the end immediately invokes the function after definition,that is hat makes it an IIFE

(function(){
    var temporary=5;

    window.permanent=10;
}());
console.log(temporary);     //ReferenceError: temporary is not defined
console.log(permanent);     //10
//window object is accessible only in browser and not anywhere else
//window.permanent is used to access the gloabal variables,but not the variables present inside the iife function,erst everything are added to window object

//NOTE:Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

//                                          CLOSURES

//A function created one inside the other and the inner function can have access to all the variables inside the outer 
//functions even after the outer function exits

function sayHelloInFiveSeconds(name){
    let prompt="Hello "+name+"!";
    //inner functions are put in local scope by default as if they are declared with var
    function inner(){
        console.log(prompt);      //alert not case sensitive,but it is used in browser
    }
    setTimeout(inner,5000);
}
sayHelloInFiveSeconds("Aakash");

//setTimeout function is asynchronous and the outer function exits immediately but the inner function executes after 5 seconds.
//Because it is present inside the function it still has the access to all the variables of the outer function