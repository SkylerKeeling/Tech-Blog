const router = require("express").Router()
const {Post} = require("../../models/")
//const withAuth = require("../../utils/auth")

router.post("/", async (req, res) => {
  try {
    console.log(req.body.title)
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
