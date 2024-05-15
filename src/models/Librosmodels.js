//Se crea el modelo que sirve como intermediario
import mongoose from 'mongoose';//Importa mongoose ODN 

const LibrosSchema = new mongoose.Schema({

NombreLibro:{type: String, required: true, lowercase: true},
Autor:{type: String, required: true, lowercase: true},
Categoria:{type: String, required: true, lowercase: true},
Existencias:{type: Number, required: true},
AñoPublicacion:{type: Number, required: true},
});
const Libros = mongoose.model("Libros",LibrosSchema);

export default Libros;
