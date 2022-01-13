const { Category } = require('../models');

const categoryData = [
  {
    // Shirts
    category_name: 'Python',
  },
  {
    // Shorts
    category_name: 'Javascript',
  },
  {
    // Music
    category_name: 'C++',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
