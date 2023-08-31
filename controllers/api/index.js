const router = require("express").Router()

//const userRoutes = require("./user-routes.js")
const postRoutes = require("./postroutes")

router.use("/post", postRoutes)

module.exports = router
