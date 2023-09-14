const router = require("express").Router()

const userRoutes = require("./userRoutes.js")
const postRoutes = require("./postroutes.js")

router.use("/posts", postRoutes)
router.use("/user", userRoutes)

module.exports = router
