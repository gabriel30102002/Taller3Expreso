'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <10; i++) {
    
    await
    queryInterface.bulkInsert('productos', [{
    descripcion: 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    precio:
    (Math.random()*10).toFixed(2),
    stock: 
    Math.floor(Math.random() * 51),

    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
    }
    },
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('productos', null, {});
      },
};