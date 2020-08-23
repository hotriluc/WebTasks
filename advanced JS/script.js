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
// var a,b;
// a = 26;
// b = a;
// a = 39;
// console.log(a,b);

// var mike = {
//     name:'Mike',
//     age: 26
// }

// var john = mike;
// //now mike and john have age of 30
// mike.age = 30;

// //Trying to change john name to 'Steve' 
// // and now mike and john variables have name 'Steve'
// // The reason why it's happening because we are changing property of object that stores in he memory
// // and both variables john and mike are pointing(have a reference) to that object
// john.name = 'Steve';

// var age = 27;
// var guy = {
//     name: "Luc",
//     city: "Kharkiv"
// }

// function change(a,b) {
//     //If you pass primitive type ypu actually use a copy of it
//     // but if you use object type as arg then you use its reference to an object
//     // it means that changing properties of the object in function will affect defined object outside the function
//     // and sometimes it really difficult to cath bugs because of this problem
//     a = 200;
//     b.city = 'Krakow'; 
// }

// console.log(a);//27
// console.log(guy.city);//Krakow


// =========Passing function as argument==========

// var arr = [1996, 1993, 1985, 1997, 2000, 1000];


// function calcArr(arr, fn) {
//     var age = [];
//     arr.forEach(item => age.push(fn(item)));

//     return age;
// }
// function calcAge(el){
//     return 2020 - el;
// }

// function isFullAge(el) {
//     return age >= 18;
// }

// function maxHeartRate(el) {
//     if (el>=18 && el<81){
//      return Math.round( 206.9 - (0.67*el));
//     } else {
//         return 'holy moly';
//     }
// }

// function whatGeneration(el) {
//     if (el>=1980 && el <= 2000) {
//         return 'milenial';
//     } else if (el > 2000){
//         return 'zoomer';
//     } else {
//         return 'boomer'
//     }
// }


// var age = calcArr(arr, calcAge);
// var generation = calcArr(arr, whatGeneration);
// var fullAges = calcArr(age, isFullAge);
// var heartRates = calcArr(age, maxHeartRate);
// console.log("Year of birth:",arr);
// console.log('Generation:',generation);
// console.log("Age:",age);
// console.log("Over 18: ",fullAges);
// console.log("Max heart rate",heartRates);

// =========Functions that return function==========

// function interviewQuestion(job){
//     if (job ==='designer'){
//         return function(name) {
//             console.log(name + ', can you explain what UX is?');
//         }
//     } else if (job ==='teacher') {
//         return function(name) {
//             console.log(name + ', what subject do you teach?');
//         }
//     } else {
//         return function(name) {
//             console.log(name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');

// teacherQuestion('Lukas');

// interviewQuestion('designer')('Mike');


// =========IMMEDIATELY INVOKED FUNCTION EXPRRESSIOn ==========

// (function(){
//     var score = Math.random()*10;
//     console.log(score >= 6); 
// })();

// (function(val){
//     var score = Math.random()*10;
//     console.log(score >= 6 - val); 
// })(10);// always be true because generated val from 0 to 10 > 6 - 10

// =========CLOSUREs==========

// function retirement(retireAge){
//     var str = ' years left';

//     //execution context of retirement(): str = ' years left' retireAge
//     //scope chain of retirement():  str = ' years left' retireAge

//     return function (yearOfBirth){

//         //because of scope chain :
//         var age = 2020 - yearOfBirth;
//         console.log((retireAge - age)+str);
//     }

//     //scope chain is always in tact even after function has fineshed its work
// }

// var retirementUS = retirement(66);
// retirementUS(1996);

// var retirementJP = retirement(60);
// retirementJP(1996);


// function interviewQuestion(job){
   
//     return function (name){
//         switch (job){
//             case 'teacher': console.log('What subject do you teach, '+name+' ?');
//                 break;
//             case 'designer': console.log(name+' Could you tell me what UI is?');
//                 break;
//             default: console.log("Oh "+name+" I see you are a "+job);
//         }
//     }
// }

// var designerQuestion = interviewQuestion('designer');
// var teacherQuestion = interviewQuestion('teacher');
// var somethingQuestion = interviewQuestion('superman');

// designerQuestion('Lukas');
// teacherQuestion('Lukas');
// somethingQuestion('Lukas');


// function animalLaugh(animal){
//     var laugh = ' its laugh: ';
//     return function (name) {
//         var result = name +' is a '+animal
//         switch (animal){
//             case 'cat': laugh+= 'Mew mew mew mew maw maw';
//                 break;
//             case 'dog': laugh+= 'Gow gow gaw gew gew gew'
//                 break;
//             default: laugh+= 'kekekeke kekekke kekeeke'
//         }
//         return result+laugh;

     
//     }
// }

// var dogLaugh = animalLaugh('dog');
// var catLaugh = animalLaugh('cat');
// var fishLaugh = animalLaugh('fish')
// console.log(dogLaugh('Baron'));
// console.log(catLaugh('Max'));
// console.log(fishLaugh('Martin'));

// =========Bind call and apply==========

// var mike = {
//     name: 'Mike',
//     job: 'teacher',
//     age: 28,
//     presentetion: function(style, partOfDay){
//         if (style==='formal'){
//             console.log('Good '+partOfDay+', ladies and gentlemen I\'m '+ this.name+' I\'m a '+this.job+
//             ' and I\'m a '+this.age+' years old');
//         } else if (style === 'informal'){
//             console.log('Hi, boys and girls I\'m '+ this.name+' I\'m a '+this.job+
//             ' and I\'m a '+this.age+' years old. Hoping you will have a good'+partOfDay);
//         }
//     }
// }

// mike.presentetion('informal', 'morning');

// var emily = {
//     name: 'Emily',
//     job: 'designer',
//     age: 30,
// }

// mike.presentetion.call(emily, 'formal','night');
  
// // mike.presentetion.apply(emily, [args]) not gonna work because our function does not expect an array
// //bind allows us to preset some args and pass anothers later
// var emilyPresentInformal = mike.presentetion.bind(emily,'informal');
// emilyPresentInformal('day');


// var arr = [1996, 1993, 1985, 1997, 2000, 1000, 2015];


// function calcArr(arr, fn) {
//     var age = [];
//     arr.forEach(item => age.push(fn(item)));

//     return age;
// }
// function calcAge(el){
//     return 2020 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }



// var age = calcArr(arr, calcAge);
// //var fullAgesJP = calcArr(age, isFullAge);  won't work because in calcArr passed fucntion expect 1 argument
// // and our isFullAge function accept 2 arguments
// //But passsing the copy of isFullAGe with preset limit value will work, beause right now we will pass only 1 value
// var fullAgesJP = calcArr(age, isFullAge.bind(this, 20));

// console.log(age);
// console.log(fullAgesJP);




// =========Coding challenge 7==========

// function getRandomQuestion(arr){
//     return arr[Math.floor(Math.random()*arr.length)];
// }

// function printQuestion(el){
//     //console.log(el);
//     console.log('Question: '+el.question);
//     console.log('Choose one of these answers:');

//     for (var i = 0; i<el.answer.length; i++){
//         console.log(i+") "+el.answer[i]);
//     }
// }

// function checkAnswer(question){
//     var answer = prompt('Type the number of answer');
//         if (answer==randomQuestion.correctAnswer){
//             console.log('You are right');
//             score++;
//             console.log('Your score is: '+score);
//             //calling function that will chose a new random question
            
//         } else if(answer =='-1'){
//             return -1;
//         }
        
//         else{
//             console.log('Sorry, try again');
//             console.log(score);
//         }
// }

// function getQuestion(arr){
   
//     var randomQuestion = getRandomQuestion(arr);
    

//     return function (){
        
//         printQuestion(randomQuestion);
        
//         var answer = prompt('Type the number of answer');
//         if (answer==randomQuestion.correctAnswer){
//             console.log('You are right');
//             score++;
//             console.log('Your score is: '+score);
//             //calling function that will chose a new random question
//             return getQuestion(arr)();
            
//         } else if(answer =='-1'){
//             return -1;
//         }
        
//         else{
//             console.log('Sorry, it is wrong');
//             console.log(score);
//         }
//         console.log('======');
//     }
    
// }


//Creating function constructor for Question

var Question = function(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

Question.prototype.printQuestion = function(){
    console.log('Question: '+this.question);
    console.log('Choose one of these answers:');

    for (var i = 0; i<this.answer.length; i++){
        console.log(i+") "+this.answer[i]);
    }
}

//Passing score()'s inner function as callback
Question.prototype.checkAnswer = function(answer, callback){
    
        if (answer==this.correctAnswer){
            console.log('You are right');
            console.log(callback(true));
            //calling function that will chose a new random question
            
        } else if(answer =='-1'){
            return -1;
        }
        
        else{
            console.log('Sorry, try again');
            console.log(callback(true));
            // console.log(score);
            this.printQuestion();
            var answerAgain = prompt('Type the number of answer');
            this.checkAnswer(answerAgain);
        }
}

//Not allowing to get acces of the local defined variable score, so using callbacks
//e.g Each created variable which returning inner function will has different score
// inner function explanation if user has answered right, score would've been incresed
function score(){
    var score = 0;
    return function(correctFlag){
        if(correctFlag) { score++}
        
        return score;
    }
}

//As we described above keepScore will containt one score, and if we create another variable
// e.g keepScore2 they won't interfere each other;
var keepScore = score();
function startQuiz(questions){
    var randomQuestion  = questions[Math.floor(Math.random()*questions.length)];

    randomQuestion.printQuestion();
    var answer = prompt('Type the number of answer');
       if (answer===-1){
           return  -1;
       } else { 
           //we passing inner function of function score()
           randomQuestion.checkAnswer(answer, keepScore);
            startQuiz(questions);
       }
       
    }







// TESTING
var nameQuestion = new Question('What is my name?',['Max','Luc', 'David', 'John'], 1);
var yearQuestion = new Question('When I was born?',[1997,2000, 1990, 2005], 0);
var cityQuestion = new Question('Where do I live?',['US','UK', 'UA', 'VN'], 2);

var questions = [nameQuestion, yearQuestion, cityQuestion];

startQuiz(questions);
