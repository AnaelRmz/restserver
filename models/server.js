const express = require('express');
const cors = require('cors');
const { dbConecction } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar BD
        this.conectarDB();

        //Middlewares: Son funciones que añadiran mas que otras
        //funciones al web server
        this.middlewares();


        //Rutas de mi aplicacion
        this.routes();

    }

    async conectarDB() {

        await dbConecction();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        // Lectura y Parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );

    }



    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo el puerto', this.port);
        });
    }

}

module.exports = Server;