const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class SneakerTags extends Model {}

SneakerTags.init(
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
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tags',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sneaker_tags',
  }
);

module.exports = SneakerTags;
