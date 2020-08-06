
// Variable and data types
// var firstName = "Luc"; 
// var age = "22"
// var flag = true;
// console.log("hey hey im external script welcome to JS. Your name is "+firstName+"and you are "+age+"years old");


/*****Variable mutation and type coercion******/
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

/*****Basic operators******/

var currentYear, birthYear, myAge;

currentYear = 2020;
birthYear = prompt("What year were you born in?");
myAge = currentYear - birthYear ; 

console.log("Your age is : "+(myAge-1) +"-"+myAge);

var dadAge = 67;

console.log(dadAge===myAge);

console.log("currentYear variable type is "+typeof(currentYear));