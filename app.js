const express = require("express");
const app = express()
const homeRouter = require("./Routes/home")
const sucursales = require("./Routes/sucursales")
const autos = require("./Routes/autos");
const marcas = require("./Routes/marcas")

app.listen(3030,function(){
    console.log("server funcionando en el puerto 3030");
})

app.use("/",homeRouter)
app.use("/",sucursales)
app.use("/",marcas)
app.use("/",autos)