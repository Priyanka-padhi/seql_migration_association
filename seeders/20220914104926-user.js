'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
       name: 'John Doe',
       email:"bshh@312.com",
       createdAt: new Date(),
       updatedAt: new Date()
     },
       {
       name: "Harry hfs",
        email:"nvdn122@.com",
        createdAt: new Date(),
        updatedAt: new Date()
  },
       {
        name: 'Maria fhsb',
        email:"eurfbh@123.com",
        createdAt: new Date(),
        updatedAt: new Date()
  },
         {
             name: "hdhj hfs",
             email:"nvdn122@.com",
             createdAt: new Date(),
             updatedAt: new Date()
         },
         {
             name: "iuef hfs",
             email:"nvdn122@.com",
             createdAt: new Date(),
             updatedAt: new Date()
         },], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Users', null, {});

  }
};

