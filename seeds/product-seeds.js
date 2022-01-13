const { Product } = require('../models');

const productData = [
  {
    product_name: 'Python Crash Course',
    author: "Eric Matthes",
    price: 24.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Learning Python, 5th Edition',
    author: "Mark Luttz",
    price: 48.99,
    stock: 34,
    category_id: 1,
  },
  {
    product_name: 'Head-First Python (2nd edition',
    author: "Paul Barry",
    price: 32.99,
    stock: 28,
    category_id: 1,
  },
  {
    product_name: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: "Marjin Haverbeke",
    price: 29.99,
    stock: 12,
    category_id: 2,
  },
  {
    product_name: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: "Jon Duckett",
    price: 25.99,
    stock: 52,
    category_id: 2,
  },
  {
    product_name: 'JavaScript: The Good Parts',
    author: "Douglas Crockford",
    price: 42.99,
    stock: 32,
    category_id: 2,
  },
  {
    product_name: 'C++ Primer 5th Edition',
    author: "Stanley B. Lippman",
    price: 12.99,
    stock: 26,
    category_id: 3,
  },
  {
    product_name: 'C++ Pocket Refernce 1st Edition',
    author: "Kyle Loudon",
    price: 22.99,
    stock:43,
    category_id: 3,
  },
  {
    product_name: 'C++ All-in-One For Dummies 3rd Edition',
    author: "John Paul Mueller",
    price: 28.99,
    stock: 9,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
