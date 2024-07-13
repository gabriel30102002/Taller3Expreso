'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('pedidos', {
      fields: ['cliente_id'],
      name: 'cliente_id_fk',
      type: 'foreign key',
      references: {
      table: 'clientes',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('pedidos', 'cliente_id_fk') }
};