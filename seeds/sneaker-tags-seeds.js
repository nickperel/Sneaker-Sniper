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
  {
    sneaker_id: 12,
    tag_id: 2,
  },
  {
    sneaker_id: 12,
    tag_id: 13,
  },
  {
    sneaker_id: 13,
    tag_id: 2,
  },
  {
    sneaker_id: 13,
    tag_id: 6,
  },
  {
    sneaker_id: 13,
    tag_id: 4,
  },
  {
    sneaker_id:14,
    tag_id: 2,
  },
  {
    sneaker_id: 14,
    tag_id: 3,
  },
  {
    sneaker_id: 15,
    tag_id: 2,
  },
  {
    sneaker_id: 15,
    tag_id: 6,
  },
  {
    sneaker_id: 15,
    tag_id: 4,
  },
  {
    sneaker_id: 15,
    tag_id: 11,
  },
  {
    sneaker_id: 16,
    tag_id: 2,
  },
  {
    sneaker_id: 16,
    tag_id: 7,
  },
  {
    sneaker_id: 16,
    tag_id: 10,
  },
  {
    sneaker_id: 16,
    tag_id: 4,
  },
  {
    sneaker_id: 16,
    tag_id: 12,
  },
  {
    sneaker_id: 17,
    tag_id: 2,
  },
  {
    sneaker_id: 17,
    tag_id: 14,
  },
  {
    sneaker_id: 17,
    tag_id: 4,
  },
  {
    sneaker_id: 17,
    tag_id: 3,
  },
  {
    sneaker_id: 18,
    tag_id: 2,
  },
  {
    sneaker_id: 18,
    tag_id: 13,
  },
  {
    sneaker_id: 19,
    tag_id: 2,
  },
  {
    sneaker_id: 19,
    tag_id: 13,
  },
  {
    sneaker_id: 20,
    tag_id: 2,
  },
  {
    sneaker_id: 20,
    tag_id: 13,
  },
  {
    sneaker_id: 21,
    tag_id: 2,
  },
  {
    sneaker_id: 21,
    tag_id: 11,
  },
  {
    sneaker_id: 22,
    tag_id: 2,
  },
  {
    sneaker_id: 22,
    tag_id: 8,
  },
  {
    sneaker_id: 23,
    tag_id: 2,
  },
  {
    sneaker_id: 23,
    tag_id: 8,
  },
  {
    sneaker_id: 23,
    tag_id: 4,
  },
  {
    sneaker_id: 24,
    tag_id: 2,
  },
  {
    sneaker_id: 24,
    tag_id: 13,
  },
  {
    sneaker_id: 25,
    tag_id: 2,
  },
  {
    sneaker_id: 25,
    tag_id: 5,
  },
  {
    sneaker_id: 25,
    tag_id: 14,
  },
  {
    sneaker_id: 25,
    tag_id: 4,
  },
  {
    sneaker_id: 26,
    tag_id: 2,
  },
  {
    sneaker_id: 26,
    tag_id: 7,
  },
  {
    sneaker_id: 26,
    tag_id: 8,
  },
  {
    sneaker_id: 26,
    tag_id: 3,
  },
  

];

const seedSneakerTags = () => SneakerTags.bulkCreate(sneakerTagData);

module.exports = seedSneakerTags;
