const database = require("../data/database")

module.exports = controller = {
    index : function(req,res){
        res.write("stock de autos" + "\n");
        database.forEach(concesionaria => {
            res.write('*' + concesionaria.autos.forEach(autos =>{
                res.write("---------------------------------" + "\n")
                res.write ("*" + autos.marca + "\n")
                res.write ( "*" + autos.modelo + "\n")
                res.write (  "*" + autos.anio + "\n")
                res.write ( "*" + autos.color + "\n")
            }) + "\n\n") 
        });
        res.end()
    }
}