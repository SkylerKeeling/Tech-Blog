const router = require("express").Router()
const Post = require("../../models/Post")
const withAuth = require("../../utils/auth")

router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      caption: req.body.caption,
    })

    res.status(200).json(postData)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
