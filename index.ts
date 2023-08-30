import bodyParser from "body-parser";
import Server from "./classes/server";
import userRoutes from "./routes/usuario";
import mongoose from 'mongoose';

const server = new Server();

//Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json()); //la informacion de los posteos pasa por un json


//Rutas de mi app
server.app.use('/user', userRoutes)

//Conectar DB
mongoose.connect('mongodb://localhost:27017/fotosgram')
    .then(() => console.log('BD conectada'))
    .catch((error: any) => handleErrorConnection(error));

//Levantar express
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});

function handleErrorConnection(error: any): any {
    throw new Error("Error al conectar BD");
}
