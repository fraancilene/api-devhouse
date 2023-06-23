import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';

// aqui configuramos o express
class App{

    constructor(){
        this.server = express(); // server = express()

        // conectando com o banco
        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.lapssxt.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
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

export default new App().server;


