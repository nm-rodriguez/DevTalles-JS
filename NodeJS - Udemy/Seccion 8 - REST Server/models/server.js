const express = require('express')
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.port
        this.userPath = '/api/users';
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }
    routes(){
       this.app.use(this.userPath ,require('../routes/user'));
    }
    listen(){
        this.app.listen(this.port, () => {
        console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;