
let address = showAddress('kolo', 'Minsk', '322');

console.log(address);

   // Factory function
function showAddress(street, city, zipCode) {
    return {
       street, 
       city,
       zipCode
    };
}
// constructor function

function Address(street, city, zipCode) {
this.street = street;
this.city = city;
this.zipCode = zipCode;

}
