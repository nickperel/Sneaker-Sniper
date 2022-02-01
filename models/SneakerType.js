const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SneakerType extends Model {}

SneakerType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    SneakerType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'brands',
        key: 'id',
      },
    },
    user: {
      type: DataTypes.STRING,
    },
    row: {
      type: DataTypes.INTEGER,
    },
    col: {
      type: DataTypes.INTEGER,
    } 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'SneakerType',
  }
);

module.exports = SneakerType;