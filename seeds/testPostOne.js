const {Post} = require("../models")
const dayjs = require("dayjs")

const testPostOneData = [
  {
    title: "Testing",
    caption:
      "testingtestingtestingtestingtestingtestingtestingtestingtestingtesting",
    date: dayjs(),
    user_id: 1,
  },
]

const seedPostData = () => Post.bulkCreate(testPostOneData)

module.exports = seedPostData
