const database = require("../data/database")

module.exports = controller ={
    index : (req,res)=>{
        res.write("              marcas disponibles" + "\n")
        res.write("------------------------------------------------------------------")
        res.end()
    }
}