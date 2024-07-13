'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('prodxpedidos', {
      fields: ['producto_id'],
      name: 'producto_id_fk',
      type: 'foreign key',
      references: {
      table: 'productos',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
      
      await queryInterface.addConstraint('prodxpedidos', {
      fields: ['pedido_id'],
      name: 'pedido_id_fk',
      type: 'foreign key',
      references: {
      table: 'pedidos',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
    },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('prodxpedidos', 'producto_id_fk')
   await queryInterface.removeConstraint('prodxpedidos', 'pedido_id_fk')
  }
};
