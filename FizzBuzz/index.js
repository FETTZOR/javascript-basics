// Divisible by 3=> Fizz
//Divisible by 5=> Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'
const output = fizzBuzz("asd");
console.log(output);

function fizzBuzz(input) {
    if(!Number.isInteger(input)){
        return"Not a number";
      }
 else if (input === 3){
    return"Fizz";
  }   
  else if(input === 5) {
    return"Buzz";
  }
  else if(input % 3 === 0 && input % 5 === 0) {
     return"FizzBUzz";
  }
 else if(input % 3 !== 0 && input % 5 !== 0) {
    return(input);
  }
}