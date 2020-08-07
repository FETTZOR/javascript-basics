
showNumbers(10);

function showNumbers(limit){
     if (limit % 2 === 0){ 
         console.log(limit + ' "EVEN" ');
}
    else if (limit % 2 !== 0){ 
        console.log(limit + " ODD");
}
}