const User = require('./User');
const Brands = require('./Brands');
const Types = require('./Types');
const Tags = require('./Tags');
const Sneakers = require('./Sneakers');
const UserSneakers = require('./UserSneakers');
const SneakerTags = require('./SneakerTags');

Sneakers.belongsTo(Brands, {
    foreignKey: 'brand_id'
});

Brands.hasMany(Sneakers, {
    foreignKey: 'brand_id'
});

Sneakers.belongsTo(Types, {
    foreignKey: 'type_id'
});

Types.hasMany(Sneakers, {
    foreignKey: 'type_id'
});

Sneakers.belongsToMany(Tags, {
    through: SneakerTags,
    foreignKey: 'sneaker_id'
});

Tags.belongsToMany(Sneakers, {
    through: SneakerTags,
    foreignKey: 'tag_id'
});

Sneakers.belongsToMany(User, {
    through: UserSneakers,
    foreignKey: 'sneaker_id'
});

User.belongsToMany(Sneakers, {
    through: UserSneakers,
    foreignKey: 'user_id'
});

module.exports = { User, Brands, Types, Tags, Sneakers, SneakerTags };