const { Types } = require('../models');

const typesData = [
  {
    type_name: 'High-Top',
  },
  {
    type_name: 'Low-Top',
  },
  {
    type_name: 'Basketball',
  },
  {
    type_name: 'Running',
  },
  {
    type_name: 'Lifestyle',
  },
];

const seedTypes = () => Types.bulkCreate(typesData);

module.exports = seedTypes;
