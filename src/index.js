import express from 'express';
import { connectDB } from "./db.js"; 
import dotenv from "dotenv"; //Se instala esta dependiencia
dotenv.config();//Llama al archivo creado para usarlo
import LibrosRoutes from "./routes/libros.js"

//Es de suma importancia el orden en el cual se escriba el código
//dependiendo de ello, se ejecutará correctamente

const port = process.env.PORT || 9000; //Constantre en javascript, 
//se da tener de un archivo llamado proccess, las lineas significan "o si no encuentra"

const app = express(); //Se crea una constante para express, objeto de tipo express

app.use(express.json());

app.use("/api", LibrosRoutes);


//Rutas
app.get("/", (req, res) =>{
    res.send("Bienvenidos a mi primera API");
});


connectDB(); //Se llama a la conexión para que se conecte a la BdD


app.listen(port, () => //Se llama el objeto de tipo express, llamo el método listen
    console.log(`El servidor está escuchando el puerto ${port}`)//requiere dos parámetros, el puerto 
); //Hasta acá ya está funcionando el servidor

//Se llama a la conexión para que se conecte a la BdD


