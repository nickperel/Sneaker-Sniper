const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Types extends Model {}

Types.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    brand_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'brands',
          key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'types',
  }
);

module.exports = Types;