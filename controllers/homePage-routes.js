const router = require("express").Router()
const {User, Post} = require("../models")

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["title", "caption", "date"],
        },
      ],
    })

    const post = dbPostData.map(post => post.get({plain: true}))

    res.render("post", {
      post,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
