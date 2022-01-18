const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CartProducts extends Model { }

CartProducts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cart',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart_product',
  }
);

module.exports = CartProducts;