const sequelize = require("../config/connection")
const seedTestPostOne = require("./testPostOne")

const seedTest = async () => {
  await sequelize.sync({force: true})

  await seedTestPostOne()

  process.exit(0)
}

seedTest()
