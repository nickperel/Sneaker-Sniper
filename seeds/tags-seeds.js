const { Tags } = require('../models');

const tagsData = [
  {
    tag_name: 'black',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'yellow',
  },
];

const seedTags = () => Tags.bulkCreate(tagsData);

module.exports = seedTags;