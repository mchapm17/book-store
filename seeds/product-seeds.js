const { Product } = require('../models');

const productData = [
  {
    product_name: 'Python Crash Course',
    author: "Eric Matthes",
    price: 24.99,
    stock: 14,
    img: "https://images-na.ssl-images-amazon.com/images/I/71sL0Qpd+YL.jpg",
    category_id: 1,
  },
  {
    product_name: 'Learning Python, 5th Edition',
    author: "Mark Luttz",
    price: 48.99,
    stock: 34,
    img: "https://images-na.ssl-images-amazon.com/images/I/41nRJEUxePS._SX379_BO1,204,203,200_.jpg",
    category_id: 1,
  },
  {
    product_name: 'Head-First Python (2nd edition)',
    author: "Paul Barry",
    price: 32.99,
    stock: 28,
    img: "https://i5.walmartimages.com/asr/8434e656-eace-4bb2-8a54-4a550275cee1.c0de974fd211be66a37be773953bab55.jpeg",
    category_id: 1,
  },
  {
    product_name: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: "Marjin Haverbeke",
    price: 29.99,
    stock: 12,
    img: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX376_BO1,204,203,200_.jpg",
    category_id: 2,
  },
  {
    product_name: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: "Jon Duckett",
    price: 25.99,
    stock: 52,
    img: "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg",
    category_id: 2,
  },
  {
    product_name: 'JavaScript: The Good Parts',
    author: "Douglas Crockford",
    price: 42.99,
    stock: 32,
    img: "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
    category_id: 2,
  },
  {
    product_name: 'C++ Primer 5th Edition',
    author: "Stanley B. Lippman",
    price: 12.99,
    stock: 26,
    img: "https://images-na.ssl-images-amazon.com/images/I/41Gd9xIXrUL._SX381_BO1,204,203,200_.jpg",
    category_id: 3,
  },
  {
    product_name: 'C++ Pocket Refernce 1st Edition',
    author: "Kyle Loudon",
    price: 22.99,
    stock:43,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wo519zD5L.jpg",
    category_id: 3,
  },
  {
    product_name: 'C++ All-in-One For Dummies 3rd Edition',
    author: "John Paul Mueller",
    price: 28.99,
    stock: 9,
    img: "https://media.wiley.com/product_data/coverImage300/88/11188237/1118823788.jpg",
    category_id: 3,
  },
  {
    product_name: 'Elements of Programming Interviews in Python: The Insiders Guide',
    author: "Adnan Aziz",
    price: 35.99,
    stock: 12,
    img: "https://images-na.ssl-images-amazon.com/images/I/41CUbGSthHL._SX348_BO1,204,203,200_.jpg",
    category_id: 1,
  },
  {
    product_name: 'Learn JavaScript VISUALLY',
    author: "Ivelin Demirov",
    price: 13.95,
    stock: 31,
    img: "https://images-na.ssl-images-amazon.com/images/I/71d22WkVjfL.jpg",
    category_id: 2,
  },
  {
    product_name: 'C Programming Absolute Beginners Guide',
    author: "Greg Perry",
    price: 23.99,
    stock: 43,
    img: "https://images-na.ssl-images-amazon.com/images/I/41ez2Ye5fpL._AC_UL600_SR600,600_.jpg",
    category_id: 3,
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
