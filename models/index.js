// import models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User')
const Cart = require('./Cart')
const CartProducts = require('./CartProducts')

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

User.hasMany(Cart, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Product.hasMany(Cart, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
  foreignKey: 'user_id',
})

Cart.belongsTo(Product, {
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  User,
  Cart,
  CartProducts,
};
