//=================ARROW FUNCTIONS======

// const years = [1997,1996,2000,1894, 1915];


// let ages = years.map(function(el, id){
//     return `${2020-el} years old on position ${id}`;
// })

// console.log(ages);

// ages = years.map((el, id) => `${2020-el} years old on position ${id}`)
// console.log(ages);


//ES5
var box5 = {
    color:'green',
    position: 1,
    clickMe: function(){
        //if you gonna use this. keyword as commented statement bellow 
        // it won;t output color and posiion of object itself because 
        // in regular functions this points to window object
        // so you have to save this in variable and than use it
        var self = this; 


        document.querySelector('.green').addEventListener('click', function(){
            // var str = 'This is '+this.color+' box, position: '+this.position;
            var str = 'This is '+self.color+' box, position: '+self.position;
            alert(str);
        });
    }
}

// box5.clickMe();

//ES6
const box6 = {
    color:'green',
    position: 1,
    clickMe: function(){
        



        document.querySelector('.green').addEventListener('click', () => 
        {   
            //this works because arrow function shares this keywords with its surroundings 
            // in our case this in arraw functions points to object
            var str = 'This is '+this.color+' box, position: '+this.position;
            alert(str);
        });
    }
}

box6.clickMe();

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


function Person (name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friendsArr){
    //here this point to object

    var arr = friendsArr.map( function(cur){
        //but in here this point to global obj
        return cur + ' is friend of '+ this.name;
    }.bind(this));
    //binding this thta point to object persto to function 

    console.log(arr);
}

Person.prototype.myFriends6 = function(friendsArr){
    var arr = friendsArr.map( (cur) => `${cur} is friend of ${this.name}`);
    console.log(arr);
}



var mike = new Person('Mike');
mike.myFriends5(['mathew','johnn']);
mike.myFriends6(['mathew','johnn'])


