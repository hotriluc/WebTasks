
// Variable and data types
// var firstName = "Luc"; 
// var age = "22"
// var flag = true;
// console.log("hey hey im external script welcome to JS. Your name is "+firstName+"and you are "+age+"years old");


/***===================================
 * **Variable mutation and type coercion******/
// var firstName = "Luc"; 
// var age = "22"

// //Type coercion
// console.log(firstName+" "+age);

// var job, isMarried;

// isMarried = false;
// job = "Gamer";

// console.log("His job:"+job +"Is he married? "+isMarried);

// //Variable mutation

// age = "fourty five";
// alert("Now he is "+age+" and he still has no wife"+isMarried);

// var lastName = prompt("But what is his last name");
// console.log("I got it "+firstName+" "+lastName );

/*===================================
****Basic operators******/

// var currentYear, birthYear, myAge;

// currentYear = 2020;
// birthYear = prompt("What year were you born in?");
// myAge = currentYear - birthYear ; 

// console.log("Your age is : "+(myAge-1) +"-"+myAge);

// var dadAge = 67;

// console.log(dadAge===myAge);

// console.log("currentYear variable type is "+typeof(currentYear));

// var x,y ;
// x = 3;
// y = x;

// console.log("x = "+x+" ;y = "+y);

// x = 4;
// console.log("x = "+x+" ;y = "+y);


/*===================================
Coding challenge 1
    Calculating body mass index
*/
//weight in kilos
//height in meteres
// var weight, height; 
// var johnBMI, markBMI;

// weight = prompt("What is John's weight ?");
// height = prompt("What is John's height ?");
// johnBMI = weight / (height*height);

// weight = prompt("What is Mark's weight ?");
// height = prompt("What is Mark's height ?");
// markBMI = weight / (height*height);

// // if else
// if (johnBMI > markBMI) {
//     alert("Jonh is heavier than Mark");
// }
// else {
//     alert("Jonh is lighter than Mark");
// }

// var myCivilStatus = "single";

// if (myCivilStatus==="married"){
//     console.log("You are married");
// } else {
//     console.log("You are single");
// }

// var isMarried = true;

// if (isMarried) {
//     console.log("You are married");
// } else {
//     console.log("You are hopeless");
// }

// var myAge =17;

// if (myAge  <= 13) {
//     console.log("you are a boy");
// } else if ( (myAge > 13) && (myAge <= 18) ){
//     console.log("you are teen");
// } else if (myAge>18){
//     console.log("you are adult");
// }

/*=======================================
    ternary operator and switch statement
*/

// var firstName = "Luc";
// var age  = 21; 
// // Ternary operators
// age >= 21 ? console.log(firstName + ' drinks beer')
// : console.log(firstName+ "drink juice"); 

// var drink = age >= 21 ? 'beer': 'juice';
// console.log("His drink to go is "+drink);

/*=======================================
    Switch statements
*/

// var job = 'teacher';

// switch (job) {

//     case 'teacher': console.log("you are a teacher");
//         break;
//     case 'driver': console.log("you are a uber driver");
//         break;
//     case 'designer': console.log("you are makin cool design");
//         break;

//     default: console.log("you are god");
        
// }

//To use switch like an 'if/else statement' 
//with ranges you need to use switch(true)
// switch (true ) {

//     case (age>=18):
//         console.log(firstName+" is allowed to drink beer");
//         break;
//     case (age<18):
//         console.log(firstName+" is allowed to drink only juice");
//         break;
//     default:
//         console.log("you drink holy water");
// }

/*=======================================
    Truhty and falsy values and equality operators
*/

// var height;
// height = 0;
// if(height || height ===0) {
//     console.log('variable is defined');
// } else {
//     console.log('variable is not defined');
// }

var johnTeamScore  = [97, 134, 105];
var mikeTeamScore  = [97, 134, 104];
var maryTeamScore = [97, 134, 105];

var avgTeamOne = (johnTeamScore.reduce((sum, score) => sum +score, 0))/3;
var avgTeamTwo = (mikeTeamScore.reduce((sum, score) => sum +score, 0))/3;
var avgTeamThree = (maryTeamScore.reduce((sum, score) => sum + score, 0))/3;

console.log("Jonh's team avg score: "+avgTeamOne );
console.log("Mike's team avg score: "+ avgTeamTwo);
console.log("Mary's team avg score: "+ avgTeamThree);

// console.log('between mike and john');
// if (avgTeamOne > avgTeamTwo) {
//     console.log("John's team WON");
// }  else if (avgTeamOne===avgTeamTwo) {
//     console.log("DRAW");
// }  else {
//     console.log("Mike's team WON");
// }

console.log('between three');
if ( (avgTeamOne > avgTeamTwo) && (avgTeamOne> avgTeamThree)) {
    console.log("John's team WON");
} else if ((avgTeamTwo > avgTeamOne) && (avgTeamTwo > avgTeamThree)) {
    console.log("Mike's team WON");
} else if ((avgTeamThree > avgTeamOne) && (avgTeamThree > avgTeamTwo)) {
    console.log("Mary's team WON");
} else if ((avgTeamOne===avgTeamTwo) && (avgTeamOne===avgTeamThree) && (avgTeamTwo===avgTeamThree)) {
    console.log("triple");
}

if ( (avgTeamOne===avgTeamTwo)) {
    console.log("Team John  and Team Mike DRAW");
} 
if (avgTeamOne === avgTeamThree) {
    console.log("Team John  and Team Mary DRAW");
}
if (avgTeamTwo === avgTeamThree) {
    console.log("Team Mike  and Team Mary DRAW");
}


// let avgTeamScore = [];
// avgTeamScore.push(avgTeamOne);
// avgTeamScore.push(avgTeamTwo);
// avgTeamScore.push(avgTeamThree)
// console.log(avgTeamScore);


