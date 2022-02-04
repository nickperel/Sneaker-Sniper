// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Sneakers extends Model {}

// set up fields and rules for Product model
Sneakers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sneaker_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isInt: true
      },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    brand_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    type_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'types',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sneakers',
  }
);

module.exports = Sneakers;