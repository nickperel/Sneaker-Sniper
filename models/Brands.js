const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Brands extends Model {}

Brands.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'brands',
  }
);

module.exports = Brands;