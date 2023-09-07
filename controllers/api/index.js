const router = require("express").Router()

const userRoutes = require("./userRoutes.js")
const postRoutes = require("./postroutes")

router.use("/post", postRoutes)
router.use("/User", userRoutes)

module.exports = router
