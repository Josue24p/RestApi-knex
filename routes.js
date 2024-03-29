module.exports = function(app,databaseService){

    app.get('/',(req,res)=>{
        res.json({"mensaje": "Todo bien"})
    });
    
    app.get('/clientes',(req,res)=>{
        databaseService.leerClientes()
        .then(clientes => {//"clientes" es la promise, ya que necesito un resultado que viene de la bd
            res.json(clientes);
        }).catch(e => res.status(500).json(e))
    });

    app.post('/clientes',(req,res)=>{
    //Muestra los datos que se van a enviar en consola primero
        const nuevoCliente = req.body;
        console.log(nuevoCliente);
    //Con el código de abajo ya se crea y se manda a la base de datos
        databaseService
        .crearCliente(nuevoCliente)
            .then(() => { //acá vació los () pq estoy creando
                res.json({"mensaje":"Cliente creado!"});
            }).catch(e => {
                res.status(500).json(e);
            });
    }); // retorna una promesa se usa async await o then
};