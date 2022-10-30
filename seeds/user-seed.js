const { User } = require('../models');

const userData =
[
  {
    "username": "Jane",
    "email": "jane@mail.com",
    "password": "password1"
  },
  {
    "username": "John",
    "email": "john@mail.com",
    "password": "password12"
  },
  {
    "username": "Jake",
    "email": "jake@mail.com",
    "password": "password123"
  },
  {
    "username": "James",
    "email": "james@mail.com",
    "password": "password1234"
  },
  {
    "username": "Judy",
    "email": "judy@mail.com",
    "password": "password12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;