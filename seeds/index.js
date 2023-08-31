const sequelize = require("../config/connection")
const seedTestPostOne = require("./testPostOne")
const seedUserData = require("./testUserOne")

const seedTest = async () => {
  await sequelize.sync({force: true})

  await seedUserData()

  await seedTestPostOne()

  process.exit(0)
}

seedTest()
