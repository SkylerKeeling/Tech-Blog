const {User} = require("../models")

const testUserOneData = [
  {
    username: "Bob Dylan",
    email: "Bob@gmail.com",
    password: "12345678",
  },
]

const seedUserData = () => User.bulkCreate(testUserOneData)

module.exports = seedUserData
