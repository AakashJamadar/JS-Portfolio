//                      // 3. Logic and Control Structures

// Breaking out of labeled loops is similar to Java
// outer:
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < 10; j++) {
//         if (i == 5 && j ==5) {
//             break outer;
//             // breaks out of outer loop instead of only the inner one
//         }
//     }
// }

//"outer" is label name and you can name it whatever you want,
// you can also label for evey loop to break that loop,
// break outer will only make the outer loop to break but the inner loops can't run because they were part of the outer loop,so they get terminated immediately


// The for/in statement allows iteration over properties of an object.
// Best suited for iterating over the properties of objects
//it can be used for arrrays too but not recommended
//for arrays/strings ,property names are indices.so it takes indicies and not the value directly like for of or for each loop
// var description = "";
// var person = {fname:"Paul", lname:"Ken", age:18};
// for (var x in person){
//     description += person[x] + " ";
// } // description = 'Paul Ken 18 '
// console.log(description);

//var is not necessary in both places,can be different too(in descrption and var x)
//concatenation happens in above code,that's it
//and person[x] in for in loop in impicitly treated as person["fname"] 

//          for of loop
//Best suited for iterating over the values of collections
//Cannot be used to iterate over the properties of plain objects.

//              for in loop

// let nums=[1,2,3,4,5];
// let output="";
// for(let num in nums){
//     output+=nums[num]+" ";
// }
// console.log(output);

// //              for of loop

// let nums=[1,2,3,4,5];
// let output="";
// for(let num of nums){
//     output+=num+" ";
// }
// console.log(output);

//note the difference in the above 2 loops

// && and || "short circuit", which is useful for setting default values.
//var name = otherName || "default";
//if otherName is true otherName name takes the value of otherName,else it takes the value default

// how does the above code work?

// function greet(guestName){
//     let fName=guestName || "guest";
//     console.log("Hello "+fName);
// }
// //greet("");
// greet("Aakash");

//              switch statements


// The `switch` statement checks for equality with `===`.
// Use 'break' after each case
// or the cases after the correct one will be executed too.

let grade='G';

switch(grade){
    case 'A':
        console.log("You did great!");
        break;
    case 'B':
        console.log("You did good");
        break;
    case 'C':
        console.log("You need to improve");
            break;
    case 'D':
        console.log("Oy vey");
        break;
    default:
        console.log("Invalid choice");      
}