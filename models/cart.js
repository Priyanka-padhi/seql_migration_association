'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User,{   //ONE CART WILL ASSOCIATE WITH ONE USER
        foreignKey:"userId",
        onDelete:"CASCADE"
      });
      Cart.hasMany(models.Product,{
        foreignKey:"cartId",                 //must
      });

    }
  }
  Cart.init({
    cart_no: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};