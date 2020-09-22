
let address = {
 street: 'kolotushkina',
 city: 'pushkino',
 zipCode: '322'
};

function showAddress(address) {
for(let key in address)
console.log(key,address[key]);

}

showAddress(address);