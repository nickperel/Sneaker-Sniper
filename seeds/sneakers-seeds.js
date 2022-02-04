const { Sneakers } = require('../models');

const sneakersData = [
  {
    sneaker_name: 'Jordan 1 Dior',
    price: 25000.00,
    stock: 3,
    img: 'public/images/jordan1dior.png',
    brand_id: 1,
    type_id: 1,
  },
  {
    sneaker_name: 'Jordan 1 Off-White',
    price: 10000.00,
    stock: 7,
    img: 'public/images/jordan1offwhite.png',
    brand_id: 1,
    type_id: 1,
  },
  {
    sneaker_name: 'Jordan 4 Cement',
    price: 1200.00,
    stock: 12,
    img: 'public/images/jordan4cement.png',
    brand_id: 1,
    type_id: 1,
  },
  {
    sneaker_name: 'New Balance 550 UNC White University Blue ',
    price: 160.00,
    stock: 25,
    img: 'public/images/NCblueNB.jpeg',
    brand_id: 4,
    type_id: 3,
  },
  {
    sneaker_name: 'Nike Patta x Air Max 1',
    price: 345.00,
    stock: 20,
    img: 'public/images/Nikeam1patta.png',
    brand_id: 2,
    type_id: 3,
  },
  {
    sneaker_name: 'Nike DQM x Air Max 90 Bacon',
    price: 215.00,
    stock: 18,
    img: 'public/images/Nikeam90bacon.png',
    brand_id: 2,
    type_id: 3,
  },
  {
    sneaker_name: 'Nike Air Max 90 Infrared',
    price: 222.00,
    stock: 16,
    img: 'public/images/Nikeam90infared.png',
    brand_id: 2,
    type_id: 3,
  },
  {
    sneaker_name: 'Nike Dunk High LX Toasty',
    price: 285.00,
    stock: 13,
    img: 'public/images/NikeDunkpadded.png',
    brand_id: 2,
    type_id: 1,
  },
  {
    sneaker_name: 'Nike SB Dunk Low Paris',
    price: 150000.00,
    stock: 1,
    img: 'public/images/nikeparisdunk.png',
    brand_id: 2,
    type_id: 3,
  },
  {
    sneaker_name: "Nike SB Dunk Low Ben & Jerry's Chunky Dunky",
    price: 1420.00,
    stock: 3,
    img: 'public/images/sb-dunk-b&j.jpeg',
    brand_id: 2,
    type_id: 3,
  },
  {
    sneaker_name: 'Adidas Yeezy Boost 350 V2 MX Oat',
    price: 240.00,
    stock: 10,
    img: 'public/images/yzymx.jpeg',
    brand_id: 3,
    type_id: 3,
  },
];

const seedSneakers = () => Sneakers.bulkCreate(sneakersData);

module.exports = seedSneakers;