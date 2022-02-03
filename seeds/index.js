const seedBrands = require('./brands-seeds');
const seedTypes = require('./types-seeds');
// const seedProducts = require('./product-seeds');
const seedTags = require('./tags-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedBrands();
  console.log('\n----- BRANDS SEEDED -----\n');

  await seedTypes();
  console.log('\n----- TYPES SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

//   await seedProductTags();
//   console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();