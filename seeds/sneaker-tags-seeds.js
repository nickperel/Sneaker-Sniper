const { SneakerTags } = require('../models');

const sneakerTagData = [
  {
    sneaker_id: 1,
    tag_id: 1,
  },
  {
    sneaker_id: 1,
    tag_id: 3,
  },
  {
    sneaker_id: 1,
    tag_id: 4,
  },
  {
    sneaker_id: 1,
    tag_id: 11,
  },
  {
    sneaker_id: 2,
    tag_id: 1,
  },
  {
    sneaker_id: 2,
    tag_id: 6,
  },
  {
    sneaker_id: 2,
    tag_id: 3,
  },
  {
    sneaker_id: 2,
    tag_id: 4,
  },
  {
    sneaker_id: 3,
    tag_id: 2,
  },
  {
    sneaker_id: 3,
    tag_id: 4,
  },
  {
    sneaker_id: 3,
    tag_id: 11,
  },
  {
    sneaker_id: 4,
    tag_id: 2,
  },
  {
    sneaker_id: 4,
    tag_id: 4,
  },
  {
    sneaker_id: 4,
    tag_id: 5,
  },
  {
    sneaker_id: 5,
    tag_id: 2,
  },
  {
    sneaker_id: 5,
    tag_id: 4,
  },
  {
    sneaker_id: 5,
    tag_id: 5,
  },
  {
    sneaker_id: 6,
    tag_id: 2,
  },
  {
    sneaker_id: 6,
    tag_id: 4,
  },
  {
    sneaker_id: 6,
    tag_id: 6,
  },
  {
    sneaker_id: 6,
    tag_id: 12,
  },
  {
    sneaker_id: 7,
    tag_id: 2,
  },
  {
    sneaker_id: 7,
    tag_id: 4,
  },
  {
    sneaker_id: 7,
    tag_id: 6,
  },
  {
    sneaker_id: 7,
    tag_id: 11,
  },
  {
    sneaker_id: 7,
    tag_id: 3,
  },
  {
    sneaker_id: 8,
    tag_id: 1,
  },
  {
    sneaker_id: 8,
    tag_id: 4,
  },
  {
    sneaker_id: 8,
    tag_id: 7,
  },
  {
    sneaker_id: 8,
    tag_id: 12,
  },
  {
    sneaker_id: 9,
    tag_id: 2,
  },
  {
    sneaker_id: 9,
    tag_id: 13,
  },
  {
    sneaker_id: 10,
    tag_id: 2,
  },
  {
    sneaker_id: 10,
    tag_id: 13,
  },
  {
    sneaker_id: 11,
    tag_id: 2,
  },
  {
    sneaker_id: 11,
    tag_id: 13,
  },
];

const seedSneakerTags = () => SneakerTags.bulkCreate(sneakerTagData);

module.exports = seedSneakerTags;
