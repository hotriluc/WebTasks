
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

/*=================================== 
codin challenge 2*/
// var johnTeamScore  = [97, 134, 105];
// var mikeTeamScore  = [97, 134, 104];
// var maryTeamScore = [97, 134, 105];

// var avgTeamOne = (johnTeamScore.reduce((sum, score) => sum +score, 0))/3;
// var avgTeamTwo = (mikeTeamScore.reduce((sum, score) => sum +score, 0))/3;
// var avgTeamThree = (maryTeamScore.reduce((sum, score) => sum + score, 0))/3;

// console.log("Jonh's team avg score: "+avgTeamOne );
// console.log("Mike's team avg score: "+ avgTeamTwo);
// console.log("Mary's team avg score: "+ avgTeamThree);



// console.log('between three');
// if ( (avgTeamOne > avgTeamTwo) && (avgTeamOne> avgTeamThree)) {
//     console.log("John's team WON");
// } else if ((avgTeamTwo > avgTeamOne) && (avgTeamTwo > avgTeamThree)) {
//     console.log("Mike's team WON");
// } else if ((avgTeamThree > avgTeamOne) && (avgTeamThree > avgTeamTwo)) {
//     console.log("Mary's team WON");
// } else if ((avgTeamOne===avgTeamTwo) && (avgTeamOne===avgTeamThree) && (avgTeamTwo===avgTeamThree)) {
//     console.log("triple");
// }

// if ( (avgTeamOne===avgTeamTwo)) {
//     console.log("Team John  and Team Mike DRAW");
// } 
// if (avgTeamOne === avgTeamThree) {
//     console.log("Team John  and Team Mary DRAW");
// }
// if (avgTeamTwo === avgTeamThree) {
//     console.log("Team Mike  and Team Mary DRAW");
// }


// let avgTeamScore = [];
// avgTeamScore.push(avgTeamOne);
// avgTeamScore.push(avgTeamTwo);
// avgTeamScore.push(avgTeamThree)
// console.log(avgTeamScore);


/*=================================== 
Functions*/

// function sayHelloTo (name) {
//     console.log("Hello "+name);
// }

// function sum (a, b){
//     return a + b ;
// }

// sayHelloTo("LUC");
// console.log(sum(3,4));


// function calcuateAge (currentYear, bithYear) {
//     return currentYear - bithYear;
// }

 

// function retireYearLeft(retireAge, birthYear, name) {
    
//     let yourAge = calcuateAge(2020, birthYear);

//     if (yourAge  >= retireAge) {
//         console.log(name+" is already retired");
//     } else {
//         console.log(name+ " will retire in "+(retireAge - yourAge)+"years");
//     }

// }

// retireYearLeft(65, 1997, 'Luc');

/*=================================== 
Function Expression*/

// var whatIsYourJob = function(job, name) {
//     switch(job) {
//         case 'teacher':
//         case 'tutor': return name+" is a teacher";

//         case 'football player':
//             return name+' is doing sport';

//         default:
//             return 'actually i don\'t know what '+name+' is doing' ;
//     }
// }

// console.log(whatIsYourJob('teacher','Max'));

/*=================================== 
Arrays*/
// function arraySum(arr) {
//     return arr.reduce((sum, curVal)=> sum + curVal,0);
// }

// var a = [1,2,3,4,5]

// console.log(arraySum(a));

// a.push(95);
// console.log(arraySum(a));

/*=================================== 
Coding challenge 3*/

// I did it in the way if there are N - items in array not 3 like in the task
function calculateTotal(array){

    let totalWithTips = [];
    let onlyTips = [];

    //Rounding tips why not to make a waitress happier
   array.forEach(element => {
        if (element < 50){
            onlyTips.push(Math.round(element*0.2));
        } else  if(element >=50 && element <= 200) {
            onlyTips.push(Math.round(element*0.15));
        } else {
            onlyTips.push(Math.round(element*0.1));
        }
    });

    console.log("Bill: "+ array);
    console.log("Tips: "+ onlyTips);
    
    
    //Calculate total
    for (i=0; i<array.length; i++) {
        totalWithTips.push(array[i]+onlyTips[i]);
    }

    console.log("Total with tips: "+ totalWithTips);

    //Returning tuple with two arrays;
    return {
       tips: onlyTips, 
       total: totalWithTips
    };
}

// Order of tips or total does not matter because we defined their names in return tuples;
var {tips, total} = calculateTotal([124, 48, 268]);