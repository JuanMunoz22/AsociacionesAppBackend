const express = require('express')
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //Rutas
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //rutas de la aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:',this.port)
        })
    }

}

module.exports = Server;