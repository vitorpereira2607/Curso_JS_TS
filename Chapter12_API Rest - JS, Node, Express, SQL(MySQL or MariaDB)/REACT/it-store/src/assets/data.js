import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'
import p5_img from './product_5.png'
import p6_img from './product_6.png'

let data_product = [
  {
    id: 1,
    category: "Graphics Cards",
    name: "NVIDIA GeForce RTX 3080",
    brand: "NVIDIA",
    price: 699.99,
    oldPrice: 799.99,
    stock: 20,
    description: "High-performance graphics card with 10GB GDDR6X memory.",
    image: p1_img
  },
  {
    id: 2,
    category: "Graphics Cards",
    name: "AMD Radeon RX 6800 XT",
    brand: "AMD",
    price: 649.99,
    oldPrice: 749.99,
    stock: 15,
    description: "Powerful graphics card with 16GB GDDR6 memory.",
    image: p2_img
  },
  {
    id: 3,
    category: "Processors",
    name: "Intel Core i9-11900K",
    brand: "Intel",
    price: 539.99,
    oldPrice: 629.99,
    stock: 25,
    description: "High-end processor with 8 cores and 16 threads, 3.5 GHz base clock.",
    image: p3_img
  },
  {
    id: 4,
    category: "Processors",
    name: "AMD Ryzen 9 5900X",
    brand: "AMD",
    price: 549.99,
    oldPrice: 649.99,
    stock: 30,
    description: "Top-tier processor with 12 cores and 24 threads, 3.7 GHz base clock.",
    image: p4_img
  },
  {
    id: 5,
    category: "Smartphones",
    name: "Apple iPhone 13 Pro",
    brand: "Apple",
    price: 999.99,
    oldPrice: 1099.99,
    stock: 50,
    description: "Latest Apple smartphone with 6.1-inch display and 128GB storage.",
    image: p5_img
  },
  {
    id: 6,
    category: "Smartphones",
    name: "Samsung Galaxy S21 Ultra",
    brand: "Samsung",
    price: 1199.99,
    oldPrice: 1299.99,
    stock: 40,
    description: "Flagship Samsung smartphone with 6.8-inch display and 256GB storage.",
    image: p6_img
  }
];

export default data_product;
