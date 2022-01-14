const { User } = require('../models');

const userData = [
  {
    name: "Malachi",
    email: "mchapm17@outlook.com",
    password: "password12345"
  },
  {
    name: "Can",
    email: "canphan2002@gmail.com",
    password: "password12345",
  },
  {
    name: "Yonas",
    email: "ybyonas@gmail.com",
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers