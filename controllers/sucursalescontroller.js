const database = require("../data/database")

module.exports = controller = {
    index : function(req,res){

        res.write("contacto" + "\n");

        database.forEach(concesionaria => {
            res.write('*' + concesionaria.sucursal + "\n\n") 
            res.write('' + concesionaria.telefono + "\n") 
            res.write('' + concesionaria.direccion + "\n\n") 
        });
        res.end()
    },


    sucursal : function(req,res){

        let sucId = req.params.id
        database.forEach(concesionaria=>{
            if(concesionaria.sucursal.toLowerCase() == sucId.toLowerCase()){
                res.write("encontramos tu sucursal" + "\n")
                res.write("---------------------------------" + "\n")
                res.write('' + concesionaria.telefono + "\n") 
                res.write('' + concesionaria.direccion + "\n\n")
                res.write("estos son los autos disponibles" + "\n")
                res.write("---------------------------------" + "\n")
                concesionaria.autos.forEach(auto=>{
                    res.write(auto.marca + " - " + auto.modelo + " - " + auto.anio + "\n")
                })
                res.end()
            }
        })
        res.end("no tenemos sucursal ahi")
    }
}