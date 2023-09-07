const router = require("express").Router()
const {User, Post} = require("../models")

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username", "email", "password"],
        },
      ],
    })

    const post = dbPostData.map(post => post.get({plain: true}))

    console.log(post)

    res.render("all", {
      post,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get("/post", async (req, res) => {
  try {
    res.render("post")
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
module.exports = router
