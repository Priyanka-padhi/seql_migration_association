'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      productName: 'Watch',
      price:5200,
      cartId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        productName: 'Laptop',
        price:26500,
        cartId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Laptop',
        price:26500,
         cartId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Realme',
        price:4500,
        cartId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Laptop',
        price:26500,
        cartId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
