
console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10 //33 for i<

function sum(limit) {
    let sum = 0;
    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum+= i;
        }
        
    }
    return sum;
    //for (let i = 1; i <= 8; i++){
      //  if (i % 2 !== 0) console.log(i);


// if(limit % 3 === 0 limit % 5 === 1){

// }



    // while(i <= 8) {
// if (i % 3 !== 0) console.log(i);
// i++;
// }
    //    return limit  = (limit / 3)  + (limit / 5)
       // i % 3 === 0 && i % 5 === 0
    
}