
// false || true // true
// false || "Emil" // Emil
// false || 1 // 1

// Falsy (false)
// undefined
// null
// 0
//false
//''
// NaN  eto not a number btw

// Anything that is not Falsy -> Truthy

// Short-Circuiting
// false || 1 || 2 // otvet 1 // 2nd operator Truthy 

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);