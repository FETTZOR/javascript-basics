// Write a function that takes two numbers 
// and returns the maximum of the two

// let a = 6;
// let b = 24;
// if(a > b){ 
//     console.log(a)
// }
// else {console.log(b)
// }
function max(a, b) {
    if(a > b)return a;  //return (a > b) ? a : b;
    else return b;
 }
console.log(max(5,10));