const {Post} = require("../models")
const currentDate = dayjs()

const testPostOneData = [
  {
    title: "Testing",
    caption:
      "testingtestingtestingtestingtestingtestingtestingtestingtestingtesting",
    date: currentDate,
  },
]

const seedPostData = () => Post.bulkCreate(testPostOneData)

module.exports = seedPostData
