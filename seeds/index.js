const seedBrands = require('./brands-seeds');
const seedTypes = require('./types-seeds');
const seedTags = require('./tags-seeds');
const seedSneakers = require('./sneakers-seeds');
const seedSneakerTags = require('./sneaker-tags-seeds');

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

  await seedSneakers();
  console.log('\n----- SNEAKERS SEEDED -----\n');

  await seedSneakerTags();
  console.log('\n----- SNEAKER TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();