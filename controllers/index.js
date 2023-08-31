const router = require("express").Router()

const homePageRoutes = require("./homePage-routes.js")
const apiRoutes = require("./api")

router.use("/", homePageRoutes)
router.use("/api", apiRoutes)

module.exports = router
