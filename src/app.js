const express = require('express');
const routes = require('./routes');

// aqui configuramos o express
class App{

    constructor(){
        this.server = express(); // server = express()
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

module.exports = new App().server;