'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Carts', [{
      cart_no:1,
      userId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        cart_no:2,
        userId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_no:3,
        userId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carts', null, {});
  }
};
