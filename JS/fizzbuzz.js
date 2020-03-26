var arr = [];
var cnt = 1;

function fizzBuzzTest(){
    for (i = 1; i <= 100; i++){
        arr.push(i);
    }

    for (i = 0; i<=arr.length; i++){

        if(arr[i] % 3 === 0){
            console.log("fizz")
        }
        if(arr[i] % 5 === 0){
            console.log("buzz")
        }
        if((arr[i] % 5 === 0) && (arr[i] % 3 === 0)){
            console.log("fizz-buzz")
        }
        else{
            console.log(arr[i])
        }
    }
}

function fizzBuzz(){
     
     if((cnt % 5 === 0) && (cnt % 3 === 0)){
            arr.push("fizz-buzz");
        }

     else if(cnt % 3 === 0){
            arr.push("fizz");
        }
     else if(cnt % 5 === 0){
            arr.push("buzz");
        }
        else{
           arr.push(cnt);
        }
        cnt+=1;
        console.log(arr)
}