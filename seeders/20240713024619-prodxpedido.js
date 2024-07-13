'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [pedidos, pedidos_metadata] = await queryInterface.sequelize.query('SELECT id FROM pedidos')
    let [productos, productos_metadata] = await queryInterface.sequelize.query('SELECT id FROM productos')
    await queryInterface.bulkInsert('prodxpedidos', [
    { pedido_id: pedidos[0].id, producto_id: productos[0].id, precio:(Math.random()*10).toFixed(2), cantidad:Math.floor(Math.random() * 11), createdAt: new Date(), updatedAt: new
    Date() },
    { pedido_id: pedidos[0].id, producto_id: productos[1].id, precio:(Math.random()*10).toFixed(2), cantidad:Math.floor(Math.random() * 11), createdAt: new Date(), createdAt: new Date(), updatedAt: new
    Date() },
    { pedido_id: pedidos[1].id, producto_id: productos[1].id, precio:(Math.random()*10).toFixed(2), cantidad:Math.floor(Math.random() * 11), createdAt: new Date(), createdAt: new Date(), updatedAt: new
    Date() }
    ],);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prodxpedidos', null, {});
  }
};
