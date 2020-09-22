
// Value(primitive) types: Number, String, Boolean, Symbol,
// undefined, null



// Reference Types: Object, Function, Array

let x = { value: 10 };
let y = x; 

x.value = 20;  // Primitives are copied
               // by their value

               // Objects are copied by 
               // their refereince
// let number = 10;
// function increase(number){
// }

// increase(number);
// console.log(number); 
let obj = { value: 10};

function increase(number){
    obj.value++;
}

increase(obj);
console.log(obj);  //11