
const movie = {
  title: 'a',
  releasyYear: 2018,
  rating: 4.5,
  director: 'b'
};
showProperties(movie);

function showProperties(obj) {
    const key = ['title', 'director']
    for(let key in movie)
     console.log(key, movie[key]);

}
//  if(!Number.isInteger(input)){
 //   return"Not a number"