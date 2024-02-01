// defineProperty - defineProperties

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    //this.stock = stock;

    let privateStock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // It displays the key
        configurable: false, // configurable
        get: function () {
            return privateStock;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('Message');
            }

            privateStock = value;

        }
    });
}

const p1 = new Product('T-shit', 20, 3);
console.log(p1);
//p1.stock = 'dsafdsa' // throw new TypeError('Message');
console.log(p1.stock)

function createProduct(name){
    return {
        get name(){
            return name;
        },
        set name(value){
            value = value.replace('World!', '')
            name = value;
        }
    }
}

const p2 = createProduct('Hoddie');
p2.name = 'Hello World!'
console.log(p2.name); // Any
