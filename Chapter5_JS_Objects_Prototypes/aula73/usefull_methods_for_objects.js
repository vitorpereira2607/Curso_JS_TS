const product = {name: 'T-shirt', price: 1.8};
const referenceProduct = product; //reating a reference to original array

//  Since objects are reference type, now we are going to make referenceProduct independent, 
//  The simple way to do that is by creating a copy of the original array

const copyProduct = {
    ...product,
    material: 'leather',
} // We can add keys to this object

const copyProduct2 = Object.assign({}, product, {material: 'leather'}) // Other way of copying an object using assing method

referenceProduct.name = 'Jeans';
product.price = 30;
console.log(referenceProduct); // Output: { name: 'Jeans', price: 30 }
console.log(copyProduct); // Output: { name: 'T-shirt', price: 1.8, material: 'leather' }

console.log(Object.values(product)) // Returns an array with only the values within the object. Output: [ 'Jeans', 30 ]
console.log(Object.entries(product)) // Returns an array with key & value  within the object. Output: [ [ 'name', 'Jeans' ], [ 'price', 30 ] ]

for (let entry of Object.entries(product)){
    console.log('For:', entry);
}

// We can also destruct the array since it return a key and a value
for (let [key, value] of Object.entries(product)){
    console.log('Key:', key,'Value:', value);
}


// Changing the property of an atributte of a specific object
Object.defineProperty(product, 'name', {
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(product, 'name')) // returns the the property descriptor from an object
/*

Output of Object.getOwnPropertyDescriptor(product, 'name')
{
  value: 'Jeans',
  writable: false,
  enumerable: true,
  configurable: true
}
*/

//const showProductKeys = Object.keys(product); // Shows the keys from the product object
//Object.freeze(copyProduct2) // Prevents of changing anything within the object selected