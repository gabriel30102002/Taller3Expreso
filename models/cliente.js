'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association herez
      models.cliente.hasMany(models.pedido, { foreignKey: 'cliente_id' });
    }
  }
  cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
    tableName:'clientes'
  });
  return cliente;
};