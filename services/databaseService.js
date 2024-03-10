
const databaseService = () => {

    const knex = require('knex')({
        client: 'mssql',
        connection:{
            host : process.env.DB_HOST,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });

    const table = 'CLIENTES';

    const leerClientes = () => {
        return knex(table).select();
    };
    const crearCliente = ({NroDocumento, ApellidosNombres, FechaHoraRegistro}) =>{
        return knex(table).insert({
            NroDocumento:  NroDocumento, 
            ApellidosNombres: ApellidosNombres, 
            FechaHoraRegistro: FechaHoraRegistro
        }); // retorna una promesa 
    };
    
    return{
        crearCliente,
        leerClientes
    };

};
module.exports = {
    databaseService
};