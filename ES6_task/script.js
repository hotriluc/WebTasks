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

// let name = 'John Cena';
// const year = 1993;

// function calcAge(year){
//     return (2020-year)
// }

// // Es5

// console.log('This is '+name+' he is '+calcAge(year));

// //ES6
// console.log(`This is ${name} he is ${calcAge(year)}`);


// const n = `${name}`;
// console.log(n);

// console.log(n.startsWith('j'));
// console.log(n.endsWith('a'));
// console.log(n.includes(' '));
// console.log(`${name} `.repeat(5));

//=================ARROW FUNCTIONS======

// const years = [1997,1996,2000,1894, 1915];


// let ages = years.map(function(el, id){
//     return `${2020-el} years old on position ${id}`;
// })

// console.log(ages);

// ages = years.map((el, id) => `${2020-el} years old on position ${id}`)
// console.log(ages);


//ES5
// var box5 = {
//     color:'green',
//     position: 1,
//     clickMe: function(){
//         //if you gonna use this. keyword as commented statement bellow 
//         // it won;t output color and posiion of object itself because 
//         // in regular functions this points to window object
//         // so you have to save this in variable and than use it
//         var self = this; 


//         document.querySelector('.green').addEventListener('click', function(){
//             // var str = 'This is '+this.color+' box, position: '+this.position;
//             var str = 'This is '+self.color+' box, position: '+self.position;
//             alert(str);
//         });
//     }
// }

// // box5.clickMe();

// //ES6
// const box6 = {
//     color:'green',
//     position: 1,
//     clickMe: function(){
        



//         document.querySelector('.green').addEventListener('click', () => 
//         {   
//             //this works because arrow function shares this keywords with its surroundings 
//             // in our case this in arraw functions points to object
//             var str = 'This is '+this.color+' box, position: '+this.position;
//             alert(str);
//         });
//     }
// }

// box6.clickMe();

// const box66 = {
//     color:'green',
//     position: 1,
//     // this keyword of clickMe arrow function will point to global object
//     // because arrow funtion does not have this (always point to it parent)
//     clickMe: () =>{
        



//         document.querySelector('.green').addEventListener('click', () => 
//         {   
//             //this = window 
//             var str = 'This is '+this.color+' box, position: '+this.position;
//             alert(str);
//         });
//     }
// }


// function Person (name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function(friendsArr){
//     //here this point to object

//     var arr = friendsArr.map( function(cur){
//         //but in here this point to global obj
//         return cur + ' is friend of '+ this.name;
//     }.bind(this));
//     //binding this thta point to object persto to function 

//     console.log(arr);
// }

// Person.prototype.myFriends6 = function(friendsArr){
//     var arr = friendsArr.map( (cur) => `${cur} is friend of ${this.name}`);
//     console.log(arr);
// }



// var mike = new Person('Mike');
// mike.myFriends5(['mathew','johnn']);
// mike.myFriends6(['mathew','johnn'])


//=================DESTRUCTURING======


// var max = ['Max', 16];
// var name_1  = max[0];
// var age_1 = max[1];
// console.log(name_1,age_1);


// //ES6 destructing

// const [name_m, age_m] = max;
// console.log(name_m, age_m);


// function calcAgeRetirment(yearOfBirth){

//     const age = new Date().getFullYear() - yearOfBirth;

//     return [age, 65 - (age)];
// }


// const [age2,retire2] = calcAgeRetirment(1997);
// console.log(age2, retire2);

// var obj = {
//     name:'max',
//     age: 16
// }

// const {name:a, age:b} = obj
// console.log(a,b);


//================ARRAY ES6

const boxes = document.querySelectorAll('.box'); //nodeList
const box5 = Array.prototype.slice.call(boxes);
const boxesArr = Array.from(boxes);

boxesArr.forEach( (el) => el.style.backgroundColor = 'dodgerblue');


// but foreach and map has no break or continue
// so you should iterate it by yourself if you need a breakpoint

//ES5
// for (var i = 0; i<boxesArr.length; i++) {
//     if(boxesArr[i].className==='box blue'){
//         continue;
//     }

//     boxesArr[i].textContent = 'i changed to blue';
// }

//===for of 

for (const item of boxesArr) {
    if (item.className.includes('blue')) {
        continue;
    }
    item.textContent= 'I had been changed to blue with for..of loop';
}


var ages = [12,15,20,23,49];

var full = ages.map(function(cur){
    return cur >=18;
});
console.log(full);
console.log(full.indexOf(true));


//Es6

//Finding index of value  ( it will find the first)
console.log(ages.findIndex( (cur) => cur >=18));

//Finding value  ( it will find the first)
console.log(ages.find(cur => cur>=18));

// if you want to get all you should loop

