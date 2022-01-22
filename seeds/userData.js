const { User } = require('../models');

const userData = [
  {
    name: "Malachi",
    email: "mchapm17@outlook.com",
    password: "$2b$10$J5O1.qPVFVxtoN3jBM/XZu/Q9pIluhDWppZ18Fzk9zD33GiLxBxJ2"
  },
  {
    name: "Can",
    email: "canphan2002@gmail.com",
    password: "$2b$10$J5O1.qPVFVxtoN3jBM/XZu/Q9pIluhDWppZ18Fzk9zD33GiLxBxJ2",
    
  },
  {
    name: "Yonas",
    email: "ybyonas@gmail.com",
    password: "$2b$10$J5O1.qPVFVxtoN3jBM/XZu/Q9pIluhDWppZ18Fzk9zD33GiLxBxJ2"
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers