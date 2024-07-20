// const a=1;
// a=2;
// console.log(a);

// let firstName="Aakash";
// let age=22;
// let isMarried=false;

// console.log("This person's name is "+firstName+" and their age is "+age);

// if(isMarried==true){
//     console.log(firstName+" is married");
// }else{
//     console.log(firstName+" is not married");
// }

// let answer=0;

// for(let i=0;i<=1000;i++){
//     answer=answer+i;
// }

// console.log(answer);


//Write a program that prints all the even numbers of an array

// const ages = [21,22,23,24,25,24,266];

// for(let i=0; i<ages.length;i++){
//     if(ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }

//Write a program to print the biggest number in an array

// const numbers=[-1,-78,-3,-49,-4793,-4743];
// let max=-Infinity;

// for(let i=0;i<numbers.length;i++){
//     max=Math.max(max,numbers[i]);
// }
// console.log(max);

//Write a program that prints all the male people's first name given a complex object

//using 2 arrys

// const personArray=["Aakash","Anna","Arihant"];
// const genderAray=["Male","Female","Male"];

// for(let i=0;i<personArray.length;i++){
//     if(genderAray[i]==='Male'){     //can use "Male" too
//         console.log(personArray[i]);
//     }
// }

//using objects

//object syntax

// const user1={firstName:"Aakash",
//     gender:"Male"
// }
// console.log(user1.firstName);    //prints Aakash
// console.log(user1["firstName"]); //prints Aakash
//console.log(user1["gender"])`//prints Male
// console.log(user1);


//creating array of objects

// const Array=[{          //we have only single variable here named array,unlike before where we had 2 variables(2 arrays),so this is preferable
//     firstName:"Aakash",
//     gender:"Male"
// },{
//     fistName:"Anna",
//     gender:"Female"
// },{
//     firstName:"Arihant",
//     gender:"Male"
// }]

// for(let i=0;i<Array.length;i++){
//     if(Array[i]["gender"]=="Male"){
//         console.log(Array[i]["firstName"]);
//     } 
// }

//Write a program that reverses all the elements of an array

// const nums=[1,2,45,30,47,83,94,0];
// let end=nums.length-1;
// for(let start=0;start<end;start++){     //can use while loop too
//     let temp=nums[start];
//     nums[start]=nums[end];
//     nums[end]=temp;
//     end--;
// }
// console.log(nums);

//Functions
//Write a function that finds the sum of two numbers

// function sum(a,b){
//     let result=a+b;
//     return result;
// }

// function displayResult(data){
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : " + data);
// }

// You are only allowed to call one function after this
// How will you displayResult of a sum

//My answer,,,, But it was just required to display the displayResult, not in displayResultPassive
//Also i called both functions here even though they are one inside the other

//displayResultPassive(sum(5,4),displayResult(sum(5,4)));

//Technically i am calling 2 functions here too
//displayResult(sum(3,5));

//Solution

//we passed the function as an argument

// function sum(a,b,funcToCall){
//     result=a+b;
//     funcToCall(result);
// }

// sum(4,6,displayResult);
//bounty question was why did we get undefined along with the console value in terminal when we used console for above line,coz sum func had no retuen value

//one more example of passing functons

// function arithmeticOperations(a,b,arithmeticType){
//     const ans=arithmeticType(a,b);
//     return a+b;
// }

// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// const value=arithmeticOperations(2,45,sum);     //third argument should be name of a function
// console.log(value);

// function greet(){
//     console.log("Hello World");
// }

// function smile(){
//     console.log("😊");
// }

//Callback is a function passed to other function as argument
//the function that takes the callback function is the higher-order function 
//setTimeout(smile,1000);    //2nd argument is nof milliseconds to wait before calling the function greet/smile,1st argument is the callback function

//runs every 1000 ms
//setInterval(greet,1000);

//Create a counter in Javascript(counts down from 30 to 0)

// let number=30
// function counter(){
//     console.log(number);
//     number--;
//     if(number<0){
//         clearInterval(intervalId);
//     }
// }

// let intervalId=setInterval(counter,100);

//or you can do

// let number=30
// function counter(){
    
//     if(number>=0){
//         console.log(number);
//         number--;
//     }
// }

// setInterval(counter,100);

//In the above code printing stops after the number becomes 0 but the interval keeps running,so use clearInterval only

//Calculate the time it takes between a setTimeout call and the inner functon actually running

// function calculateTime(){
//     let endTime=Date.now();
//     let elapsedTime=endTime-startTime;
//     console.log(elapsedTime);
// }

// let startTime=Date.now();
// setTimeout(calculateTime,0);

//Create a terminal clock(HH:MM:SS)

let time=new Date();
let hours=time.getHours();
let minutes=time.getMinutes();
let seconds=time.getSeconds();

console.log(hours+":"+minutes+":"+seconds);