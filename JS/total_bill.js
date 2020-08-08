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