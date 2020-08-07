
var movie = {
  title: 'a',
  releasyYear: 2018,
  rating: 4.5,
  director: 'b'
};
showProperties(movie);

function showProperties(obj) {
//     for(let key in person)
//     console.log(key, person[key]);
   
//     const colors = ['red', 'green', 'blue']
   
    for (let key in obj)
   if (typeof obj[key] === 'string')
   console.log(key, obj[key]);
    //  //do not notation
   //  person.name
   //  // bracket notation
   //  person['name']
}
//  if(!Number.isInteger(input)){
 //   return"Not a number"