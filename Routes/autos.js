const express = require("express")
const router = express.Router()
const controller = require("../controllers/autoscontroller")


router.get("/autos",controller.index)

module.exports = router