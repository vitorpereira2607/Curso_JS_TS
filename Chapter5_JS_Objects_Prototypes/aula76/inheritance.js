// Constructor function for creating Product objects
function Product(name, price){
    this.name = name;
    this.price = price;
}

// Prototype methods for Product to increase and discount the price
Product.prototype.increase = function(value){
    this.price += value;
}

Product.prototype.discount = function(value){
    this.price -= value;
}

// Constructor function for creating Pants objects, inheriting from Product
// Pants specializes in products and adds a color parameter
function Pants(name, price, color){
    // Call the constructor of the Product class, passing the necessary parameters
    Product.call(this, name, price);
    this.color = color; // Adding a color parameter specific to Pants
}

// Set the prototype of Pants to be an object created from the prototype of Product
Pants.prototype = Object.create(Product.prototype);
// Set the constructor property of Pants to correctly point to the Pants constructor
Pants.prototype.constructor = Pants;

/*
Important Note:
    If we only do this, the output will show that the constructor of any object instantiated from Pants will be Product.
        Pants.prototype = Object.create(Product.prototype); // Output: Product(Wrong) { name: 'Jogger', price: 30, color: 'blue' }

    To address this issue, we need to associate the Pants constructor with its own prototype by setting Pants.prototype.constructor to Pants.
        Pants.prototype.constructor = Pants; // Output: Pants(Correct) { name: 'Jogger', price: 30, color: 'blue' }

    Now, we can safely use the methods from Product.prototype without any conflict, as Pants is correctly set to its own prototype.
*/


Pants.prototype.increase = function (percentage){
    this.price = this.price + (this.price * (percentage / 100))
}

function Hoddie(name, price, material, color){
    Product.call(this, name, price);
    this.material = material;
    this.color = color;
}

Hoddie.prototype = Object.create(Product.prototype)
Hoddie.prototype.constructor = Hoddie;

const hoddie = new Hoddie('Zip-Up Hoodie', 50, 'cotton', 'black' )
hoddie.increase(50)
console.log(hoddie);

// Creating instances of Product and Pants
const prod1 = new Product('Gen', 111);
const pants1 = new Pants('Jogger', 30, 'blue');

// Modifying the price of pants1 using the increase method
pants1.increase(50);

// Logging the state of pants1 and prod1
console.log(pants1); // Output: Pants { name: 'Jogger', price: 40, color: 'blue' }
console.log(prod1); // Output: Product { name: 'Gen', price: 111 }

console.log(Object.getPrototypeOf(hoddie))