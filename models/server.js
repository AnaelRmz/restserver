const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        //Middlewares: Son funciones que añadiran mas que otras
        //funciones al web server
        this.middlewares();


        //Rutas de mi aplicacion
        this.routes();

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
