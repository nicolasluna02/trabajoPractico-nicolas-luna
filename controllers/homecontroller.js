const database = require("../data/database")

module.exports = controller = {
    index : function(req,res){
        res.write("bienvenidos a nuestro sitio" + "\n");
        database.forEach(concesionaria => {
            res.write('*' + concesionaria.sucursal + "\n") 
        });
        res.end()
    }
}

