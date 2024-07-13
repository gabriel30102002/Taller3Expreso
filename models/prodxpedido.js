'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prodxpedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  prodxpedido.init({
    producto_id: DataTypes.INTEGER,
    pedido_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'prodxpedido',
    tableName: 'prdxpedidos'
  });
  return prodxpedido;
};