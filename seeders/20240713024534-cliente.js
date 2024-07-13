'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <10; i++) {
    await
    queryInterface.bulkInsert('clientes', [{    
    nombre: 'Alberto',
    apellido: 'Perez',
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
    }
    },

    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('fotos', null, {});
      },
};