const router = require("express").Router()

const userRoutes = require("./userRoutes.js")
const postRoutes = require("./postroutes.js")

router.use("/posts", postRoutes)
router.use("/User", userRoutes)

module.exports = router
