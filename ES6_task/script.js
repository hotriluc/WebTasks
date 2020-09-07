// // ES5 var
// var nameES5 = 'My name';
// var ageES5 = 19;

// console.log(nameES5,ageES5);

// // es6 const and let
// //const is not mutable
// // let is the same as var

// const pi = 3.14; // const is block scope
// //pi = 2; // assignment to const 
// console.log(pi); 

// let age = 20; // diffrence btwn var is scope (var - function scope let -block scope)
// age =30;
// console.log(age);

// function passedTest(passed){
//     if (passed){
//         var name = 'Jonh';
//     }
//     console.log(name+' passed the test');
// }

// function passedTest6(passed){
//     if(passed){
//         let name = 'John';
//     }
//     console.log(name+' passed the test'); // will log passed test w/o name
// }

// passedTest(true);
// passedTest6(true);


// let i = 23;
// for (let i=0; i<5;i++){
//     console.log(i);
// }
// console.log(i);

//=================Block and IIFES ES6======

// {
//     let a = 6;
//     const pi =3.14;
//     var b = 6; // 
// }

// // console.log(a,pi);
// console.log(b);//6 because var - is block scope

// let a = 6;
// for (a = 0;a<5;a++){
//     console.log(a);
// }
// console.log(a);


//=================STRINGS======

let name = 'John Cena';
const year = 1993;

function calcAge(year){
    return (2020-year)
}

// Es5

console.log('This is '+name+' he is '+calcAge(year));

//ES6
console.log(`This is ${name} he is ${calcAge(year)}`);


const n = `${name}`;
console.log(n);

console.log(n.startsWith('j'));
console.log(n.endsWith('a'));
console.log(n.includes(' '));
console.log(`${name} `.repeat(5));