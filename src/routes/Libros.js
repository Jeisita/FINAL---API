import express from 'express'; //Se encarga de las rutas
import { register } 
from "../controllers/controllerslibros.js";

const router = express.Router(); //Objeto que define las rutas

router.post("/Libros", register); //Insertar
//Consultar todos los libros
//router.get("/Libros"); //Consultar
//router.get("/Libros/:id");
//router.put("/Libros/:id", updateOne); //Actualizar

export default router;
//Como se va a usar en otros archivos, se debe exportar y para ello se usa esto
//de esta manera se exporta todo el archivo