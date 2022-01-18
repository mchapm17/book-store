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
  foreignKey: 'category_id'
});

Cart.belongsTo(User, {
  foreignKey: 'user_id'
})

Cart.belongsToMany(Product, {
  through: CartProducts,
  foreignKey: 'cart_id',
});

Product.belongsToMany(Cart, {
  through: CartProducts,
  foreignKey: 'product_id',
})

module.exports = {
  Product,
  Category,
  User,
  Cart,
  CartProducts,
};
