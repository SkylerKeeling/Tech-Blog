const router = require("express").Router()

const homePageRoutes = require("./homePage-routes.js")

router.use("/", homePageRoutes)

module.exports = router
