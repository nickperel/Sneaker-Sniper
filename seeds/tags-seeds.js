const { Tags } = require('../models');

const tagsData = [
  {
    tag_name: 'high-top',
  },
  {
    tag_name: 'low-top',
  },
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
  {
    tag_name: 'grey',
  },
  {
    tag_name: 'brown',
  },
  {
    tag_name: 'multi-color',
  },
];

const seedTags = () => Tags.bulkCreate(tagsData);

module.exports = seedTags;