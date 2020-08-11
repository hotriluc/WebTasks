// ///////////////////////////////////////
// // Lecture: Hoisting

//FUNCTIONS
// It does not matter where to call this function because of the hoisting
// calcaAge(1997);
// function calcaAge(year) {
//     console.log(2020 - year);
// }

// //age(1997);// age is not a function
// var age  = function(year) {
//     console.log(2020-year);
// }
// // it works but if you write it above function expression
// age(1997);


// //VARIABLES

// var a = 100;
// console.log(a);//100

// b = 11;
// console.log(b);//11
// var b; 


// console.log(c);
// var c = 100; // hoisting first so it will be set to undefined then 
// //will be printed in consle and then will be initialize setted to value



// var x = 23; 

// function foo() {
//     console.log(x);
// }
// foo(); // it will output the global value x

// function foo2() {
//     console.log(x); // undefined, because foo2 has its own execution context
//     var x = 150;
//     console.log(x); //  150
// }

// foo2();

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c); //Hellohihey
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + d);//HelloJohn
//     console.log(a + b + c + d); // b and c is not defined there will be error
// }




///////////////////////////////////////
// Lecture: The this keyword


// console.log(this); // Window


calcAge(1989);
function calcAge (year){
    console.log(2020 - year);
    console.log(this); //window, because it belows to global object and as we know it is Window
}


var person = {
    name:'Alex',
    year: 1990,
    calcAge: function() {
        console.log(2020 - this.year);
        console.log(this); // this pointing to object which called that method

        /*function inner(){
            console.log(this);//window, Because regular function always called by global object so this is
            // pointing at window
        }

        inner(); 
        */
    }
}

person.calcAge(); // will output person's year and object that call this method 
// 30 and person (object)

var person_v1 = {
    name: 'alex v.1',
    year: 2010
}
//borrowing method
person_v1.calcAge = person.calcAge;
person_v1.calcAge(); // this is pointing at person_v1


