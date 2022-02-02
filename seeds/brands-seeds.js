const { Brands } = require('../models');

const brandsData = [
  {
    brand_name: 'Jordan',
  },
  {
    brand_name: 'Nike',
  },
  {
    brand_name: 'Adidas',
  },
  {
    brand_name: 'New Balance',
  },
  {
    brand_name: 'Asics',
  },
];

const seedBrands = () => Brands.bulkCreate(brandsData);

module.exports = seedBrands;