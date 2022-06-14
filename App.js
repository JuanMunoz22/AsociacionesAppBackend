//Tomando archivo de variables globales
require('dotenv').config();
const Server = require('./models/server.model');


const server = new Server();
server.listen();

