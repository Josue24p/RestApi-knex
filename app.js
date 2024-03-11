//Creación API v2 -- con routes y base de datos  video https://www.youtube.com/watch?v=9ZVooCNbdlY
require('dotenv').config() //usa la libreria de dotenv para el entorno de variables

const express = require('express');//express dependencia para crear backend api rest
//const bodyParser = require('body-parser'); //para que parsee los datos a json
const { databaseService } = require('./services/databaseService');

const app = express(); //app tiene las funcionalidades de express.

app.use(express.json());//permite el uso de json en las peticiones

//const dbService = databaseService();
//require('./routes')(app, dbService); Podría ser así también
require('./routes')(app, databaseService()); //si le paso con () permite crear o modificar entradas a la bd


app.listen(3000, function(){
    console.log('App listening  on port 3000!')
});