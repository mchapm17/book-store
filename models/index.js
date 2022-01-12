// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

Product.hasOne(ProductTag, {
  foreignKey: 'product_id'
});

Tag.hasOne(ProductTag, {
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
