// null;      // used to indicate a deliberate non-value
// undefined; // used to indicate a value is not currently present (although
//            // `undefined` is actually a value itself)

//                                   2. Variables, Arrays and Objects


// When to Use var, let, or const?

// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

//the unique variable names are called identifiers.


//Difference betwee var,let,const

//      1.Var
//function scoped
//can be updated and can be redeclared (var x=4,,,,var x=5)

//      2.Let
//block scoped
//can be updated but cannot be redeclared (let x=4,,,let x=5  isn't allowed)

//      3.Const
//block scoped
//cannot be updated or redeclared,,i,e cannot be reassigned

//variables can be initialized without using let,const or var but it is not good pracice as doing so can lead to unexpected behaviours
//They are treated as global variables if done without using var,let,const
//var created outside the function is treated as global variable too

// Variables declared without being assigned to are set to undefined.
//var someThirdVar; // = undefined

// "use strict";

//let myArray=[23,"Hello",true,5.4,35.4,433];

//console.log(myArray.push(3.4));     //push method adds new element to the end of the array and also returns the new length of the array
//console.log(myArray.length);

// Add and remove element from front or back end of an array
// console.log(myArray.unshift(355));      //this method adds the new elements to the beginning of an array also returng the new length of the arr
// console.log(myArray.shift());       //removes the first element and returns it
// //console.log(myArray.push(3.4));     //push method adds new element to the end of the array and also returns the new length of the array
// console.log(myArray.pop());         //this method removes the last element from an array and returns it

//All the above methods affect/change the original array

//console.log(myArray.join());        //returns the array as a string,,,it affects the original array,,any separator can be specified(default is ,)

//console.log(myArray.slice(1,3));      //returns selected elements in an array as a new array,end index is exclusive,does not affect the original array

//console.log(myArray.splice(2,1,"Hi",420,false,000,8909));   //octal literals are not allowed ,,use 0 instead of 00/000/..(it did work though)
//whwen strict mode is used,they say octal literals are not allowed
//splice method adds and/or removes array elements
//returns the removed subarray
//overwrites the original array
//if splice has one argument it removes all elements starting from that index,,,if 2, starting index and deletecount,ucoming arguemnts are treated as adding elements
//console.log(myArray);


//                      OBJECTS
// JavaScript's objects are equivalent to "dictionaries" or "maps" in other
// languages: an unordered collection of key-value pairs.
var myObj = {key1: "Hello", key2: "World"};

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type.
//invalid keys are those containing special characters in between or whose name statrts with digit or those that contain spaces in between
//ex: my other key, 123key, key-with-hyphens,,,  are invalid keys
//Invalid keys require double quotes like below
var myObj = {myKey: "myValue", "my other key": 4 , "2key":8};

// Object attributes can also be accessed using the subscript syntax,
myObj["my other key"]; // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue"

//conclusion: dot operator can only be used with valid keys while brackets can be used for both valid and invalid keys

//to add new keys
myObj.newKey=true;


//to update a key
myObj.myKey="updatedValue";
console.log(myObj);

//accessing a non-existent property
console.log(myObj.oldKey);      //undefined