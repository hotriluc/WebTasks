// =========FUNCTION CONSTRUCTOR==========

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     // this.calculteAge = function() {
//     //     console.log(2020 - this.yearOfBirth);
//     // }
// }

// Person.prototype.calculteAge = function() {
//      console.log(2020 - this.yearOfBirth);
// }

// var mike = new Person("Max", 1997, "Actor");
// //But what if you have a lot of code in that function? Every created object will have an example of calcluateAge function.
// // And it is not efficient, so the way to do it its make in inherited using prototype properties
// // Only Person will have this function, but all of the child can get access to it
// mike.calculteAge();

// var Animal = function (type, numOfLegs) {
//     this.type = type;
//     this.numOfLegs = numOfLegs;
// }

// Animal.prototype.saySomething = function (greeting){
//     console.log(this.type +" says: "+greeting);
// }

// var dog = new Animal("dog", 4);
// dog.saySomething('meow');

// =========Object.creates==========
//First thing you need to do before use Object.create it is to create prototype
// var personProto = {
//     calculteAge: function(){
//         console.log(2020 - this.yearOfBirth);
//     }
// }

// var mike = Object.create(personProto);
// mike.name = 'Mike';
// mike.yearOfBirth = 1997;
// mike.calculteAge();

// var jane = Object.create(personProto, {
//     name:{value:'Jane'},
//     yearOfBirth:{value: 1985},
//     job: {value: 'police officer'}
// })


// =========Primitives vs Objects==========
var a,b;
a = 26;
b = a;
a = 39;
console.log(a,b);

var mike = {
    name:'Mike',
    age: 26
}

var john = mike;
//now mike and john have age of 30
mike.age = 30;

//Trying to change john name to 'Steve' 
// and now mike and john variables have name 'Steve'
// The reason why it's happening because we are changing property of object that stores in he memory
// and both variables john and mike are pointing(have a reference) to that object
john.name = 'Steve';

var age = 27;
var guy = {
    name: "Luc",
    city: "Kharkiv"
}

function change(a,b) {
    //If you pass primitive type ypu actually use a copy of it
    // but if you use object type as arg then you use its reference to an object
    // it means that changing properties of the object in function will affect defined object outside the function
    // and sometimes it really difficult to cath bugs because of this problem
    a = 200;
    b.city = 'Krakow'; 
}

console.log(a);//27
console.log(guy.city);//Krakow