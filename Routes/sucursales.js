const express = require("express")
const router = express.Router()
const controller = require("../controllers/sucursalescontroller")


router.get("/sucursales",controller.index)
router.get("/sucursales/:id",controller.sucursal)

module.exports = router