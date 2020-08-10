/*=================================== 
Coding challenge 4*/

// var John = {
//     name: 'John',
//     height: 2.3,
//     mass: 85,
//     calcBMI: function () {
//         this.bmi = this.mass / (Math.pow(this.height,2));
//     }
// }

// var Mike = {
//     name: 'Mike',
//     height: 1.5,
//     mass: 85,
//     calcBMI: function () {
//         this.bmi = this.mass / (Math.pow(this.height,2));
//     }
// }

// John.calcBMI();
// Mike.calcBMI();
// console.log("Jonh BMI: ",John.bmi);
// console.log("Mike BMI: ",Mike.bmi);

// if (John.bmi > Mike.bmi) {
//     console.log("John BMI is higher");
// } else if (John.bmi === Mike.bmi) {
//     console.log("They are the same");
// } else {
//     console.log("Mike BMI is higher");
// }



/*But what if there will be N people
    writing the new object everytime is not convinient and practical
    you have to use classes
*/
class Person {
   
    constructor (name, mass, height){
        this.name = name;
        this.height = height;
        this.mass = mass;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setHeight(height) {
        this.height = height;
    }

    getHeight() {
        return this.name;
    }

    setMass(mass) {
        this.mass = mass;
    }

    getMass() {
        return this.mass;
    }

    getBMI() {
        return this.mass / (Math.pow(this.height,2));
    }

}


// /Testing/
var personA = new Person('John', 93, 1.55);
var personB = new Person('Mike', 94, 1.55);

var bmiPersonA = personA.getBMI();
var bmiPersonB = personB.getBMI();
console.log("Jonh BMI: ",bmiPersonA);
console.log("Mike BMI: ",bmiPersonB);


if (bmiPersonA > bmiPersonB) {
        console.log("John BMI is higher");
    } else if (bmiPersonA === bmiPersonB) {
        console.log("They are the same");
    } else {
        console.log("Mike BMI is higher");
    }