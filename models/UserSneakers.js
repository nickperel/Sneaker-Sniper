const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserSneakers extends Model {}

UserSneakers.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sneaker_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sneakers',
        key: 'id'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_sneakers',
  }
);

module.exports = UserSneakers;