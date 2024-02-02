// new Object -> All objects shares all prototype(_proto_)
const objA = {
    keyA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    keyB: 'B'
    // __proto__: objA
}

const objC = new Object();
objC.keyC = 'C'
// Doing this means that objB now has access to the information of objA
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.keyA); // Output: A
console.log(Object.getPrototypeOf(objB)); // Output: { keyA: 'A' }
console.log(Object.getPrototypeOf(objC)); // Output: { keyB: 'B' }
console.log(objC.keyB) // B

function Product (name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.descount = function(value){
    this.price = this.price - (this.price * (value / 100))
}

Product.prototype.increase = function(value){
    this.price = this.price + (this.price * (value / 100))
}

const prod1 = new Product('T-shirt', 25);
prod1.descount(50);
console.log(prod1); // Product { name: 'T-shirt', price: 12.5 }
prod1.increase(100);
console.log(prod1); // Product { name: 'T-shirt', price: 25 }

// Literal object
const prod2 = {
    name: 'Pen',
    price: 3
}

// Setting the prod2 prototype to Product.prototype
Object.setPrototypeOf(prod2, Product.prototype);
prod2.increase(100);
console.log(prod2); // Output: Product { name: 'Pen', price: 6 }

const prod3 = Object.create(Product.prototype, {
    stock: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    },

    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
})

prod3.increase(100);
prod3.name = 'Pencil';
console.log(prod3);