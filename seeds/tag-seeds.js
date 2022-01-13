const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Python',
  },
  {
    tag_name: 'Javascript',
  },
  {
    tag_name: 'C++',
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
