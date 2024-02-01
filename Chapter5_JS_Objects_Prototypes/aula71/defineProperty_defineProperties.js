// defineProperty - defineProperties

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    //this.stock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // It displays the key
        value: stock, // Property value
        writable: true, // Property can be changed
        configurable: false, // 
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true, // It displays the key
            value: name, // value
            writable: true, // If it cans rewrite the value of the variable or not
            configurable: true, // 
        },
        price: {
            enumerable: true, // It displays the key
            value: price, // value
            writable: true, // If it cans rewrite the value of the variable or not
            configurable: true, // 
        }
    })
}

const p1 = new Product('T-shit', 20, 3);
p1.stock = 5;
console.log(p1);
console.log(Object.keys(p1));