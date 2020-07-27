const express = require("express")
const router = express.Router()
const controller = require("../controllers/marcascontroller")


router.get("/marcas",controller.index)

module.exports = router