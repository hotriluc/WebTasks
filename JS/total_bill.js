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

    //Returning object with two arrays;
    return {
       tips: onlyTips, 
       total: totalWithTips
    };
}

// Order of tips or total does not matter because we defined their names in return tuples;
var {tips, total} = calculateTotal([124, 48, 268]);



/*Coding challenge 5*/
// var bill = {
//     currentBill: [124, 48, 268, 180, 42],
//     onlyTips: [],
//     total:[],

//     calculateTips: function () {
//         for (var i = 0 ; i<this.currentBill.length; i++) {
            
//             if ( this.currentBill[i] < 50){
//                 this.onlyTips.push(Math.round( this.currentBill[i]*0.2));
//             } else  if( this.currentBill[i] >=50 &&  this.currentBill[i] <= 200) {
//                 this.onlyTips.push(Math.round( this.currentBill[i]*0.15));
//             } else {
//                 this.onlyTips.push(Math.round( this.currentBill[i]*0.1));
//             }
//         }
        
//     },
//     calculateTotal: function () {
//         for (var i = 0 ; i<this.currentBill.length; i++) {
//             this.total.push(this.currentBill[i]+this.onlyTips[i]);
//         }
//     }

// }

// console.log("Current Bill: ",bill.currentBill);
// console.log("Calculating tips...");
// bill.calculateTips();
// console.log("Tips: ",bill.onlyTips);
// console.log("Calculating Total...");
// bill.calculateTotal();
// console.log("Total: ",bill.total);

/*=================
This time I used classes*/

class Bill {
    constructor(bill) {
        this.bill = bill;
        this.tips = [];
        this.total = [];
    }

    setBill(bill){
        this.bill = bill;
    }
    getBill() {
        return this.bill;
    }

    calculateTips(){
        this.bill.forEach(element => {
            if (element < 50){
                this.tips.push(Math.round(element*0.2));
            } else  if(element >=50 && element <= 200) {
                this.tips.push(Math.round(element*0.15));
            } else {
                this.tips.push(Math.round(element*0.1));
            }
        });
    }

    getTips() {
        return this.tips;
    }

    calculateTotal() {
        this.calculateTips();

        for (var i=0; i<this.bill.length; i++) {
            this.total.push(this.tips[i]+this.bill[i]);
        }
    }

    getTotal(){
        return this.total;
    }


}

console.log(" Created class Bill to calculate tips, total");
console.log("John's bills");
var bill_A =  new Bill([124, 48, 268, 180, 42]);
bill_A.calculateTotal();
console.log(bill_A.getTips(),bill_A.getTotal());

console.log("Marks's bills");
var bill_B =  new Bill([200, 324, 268, 180, 13]);
bill_B.calculateTotal();
console.log(bill_B.getTips(),bill_B.getTotal());

