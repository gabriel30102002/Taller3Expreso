'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <10; i++) {
    await
    queryInterface.bulkInsert('pedidos', [{
    fecha: new Date(),
    estado: true,
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
    }
    },

    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('pedidos', null, {});
      },
};